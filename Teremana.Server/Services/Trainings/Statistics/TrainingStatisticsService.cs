using Teremana.Helper;
using Teremana.Server.Models;
using Teremana.Server.Repositories;
using Teremana.Server.Services.Statistics;
using Teremena.Server.Dtos.Progress;

public class TrainingStatisticsService : ITrainingStatisticsService
{
    private readonly ITrainingRepository _trainingRepository;

    public TrainingStatisticsService(ITrainingRepository trainingRepository)
    {
        _trainingRepository = trainingRepository;
    }

    public DateOnly ConvertTargetDate(string date)
    {
        return DateConverter.Convert(date);
    }

    public List<Training> GetUserTrainingsForMonth(Guid id, string targetDate)
    {
        var date = this.ConvertTargetDate(targetDate);
        var trainings = _trainingRepository.GetAllByPersonId(id).Result;
        var filteredTrainings = trainings
            .Where(t => t.DateTime.Year == date.Year && t.DateTime.Month == date.Month)
            .ToList();

        return filteredTrainings;
    }

    private int GetWeekNumberInMonth(DateTime date)
    {
        var firstDayOfMonth = new DateTime(date.Year, date.Month, 1);
        var firstDayWeekDay = (int)firstDayOfMonth.DayOfWeek;
        firstDayWeekDay = firstDayWeekDay == 0 ? 7 : firstDayWeekDay; 

        var dayOfMonth = date.Day;
        return (dayOfMonth + firstDayWeekDay - 2) / 7 + 1;
    }

    private List<IGrouping<int, Training>> GroupTrainingsByWeek(List<Training> trainings)
    {
        return trainings
            .GroupBy(t => GetWeekNumberInMonth(t.DateTime))
            .ToList();
    }

    public List<TrainingStatistics> GetStatistics(Guid id, string targetDate)
    {
        var date = ConvertTargetDate(targetDate);
        var trainings = GetUserTrainingsForMonth(id, targetDate);
        var trainingsByWeek = GroupTrainingsByWeek(trainings);
        var totalWeeksInMonth = CalculateTotalWeeksInMonth(date);

        return GenerateStatisticsForAllWeeks(trainingsByWeek, totalWeeksInMonth);
    }

    private int CalculateTotalWeeksInMonth(DateOnly date)
    {
        var lastDayOfMonth = new DateTime(date.Year, date.Month, DateTime.DaysInMonth(date.Year, date.Month));
        return GetWeekNumberInMonth(lastDayOfMonth);
    }

    private List<TrainingStatistics> GenerateStatisticsForAllWeeks(List<IGrouping<int, Training>> trainingsByWeek, int totalWeeksInMonth)
    {
        var statistics = new List<TrainingStatistics>();

        for (int weekNumber = 1; weekNumber <= totalWeeksInMonth; weekNumber++)
        {
            var weekStatistics = GenerateStatisticsForWeek(trainingsByWeek, weekNumber);
            statistics.Add(weekStatistics);
        }

        return statistics;
    }

    private TrainingStatistics GenerateStatisticsForWeek(List<IGrouping<int, Training>> trainingsByWeek, int weekNumber)
    {
        var weekTrainings = GetTrainingsForWeek(trainingsByWeek, weekNumber);

        if (weekTrainings != null)
        {
            return CreateStatisticsFromTrainings(weekTrainings, weekNumber);
        }
        else
        {
            return CreateEmptyStatistics(weekNumber);
        }
    }

    private IGrouping<int, Training>? GetTrainingsForWeek(List<IGrouping<int, Training>> trainingsByWeek, int weekNumber)
    {
        return trainingsByWeek.FirstOrDefault(wg => wg.Key == weekNumber);
    }

    private TrainingStatistics CreateStatisticsFromTrainings(IGrouping<int, Training> weekTrainings, int weekNumber)
    {
        return new TrainingStatistics(
            WeekNumber: weekNumber,
            TotalDuration: weekTrainings.Sum(t => t.DurationInMinutes),
            NumberOfTrainings: weekTrainings.Count(),
            AverageFatigue: weekTrainings.Average(t => t.Fatigue),
            AverageDifficulty: weekTrainings.Average(t => t.Difficulty)
        );
    }

    private TrainingStatistics CreateEmptyStatistics(int weekNumber)
    {
        return new TrainingStatistics(
            WeekNumber: weekNumber,
            TotalDuration: 0,
            NumberOfTrainings: 0,
            AverageFatigue: 0,
            AverageDifficulty: 0
        );
    }

}
