using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Threading.Tasks;
using AngularWIthASP.Server.Repository.Users;
using Microsoft.AspNetCore.Http.HttpResults;
using Teremana.Helper;
using Teremana.Server.Models;
using Teremana.Server.Repositories;
using Teremena.Server.Dtos.Progress;
using Teremena.Server.Dtos.Trainings;

namespace Teremana.Server.Services.Statistics
{
    public class TrainingStatisticsService: ITrainingStatisticsService
    {
        private readonly ITrainingRepository _trainingRepository;

        public TrainingStatisticsService(ITrainingRepository trainingRepository)
        {
            _trainingRepository = trainingRepository;
        }

        public DateOnly convertTargetDate(string date)
        {
            return DateConverter.Convert(date);
        }

        public List<Training> GetUserTrainingsForMonth(Guid id, string targetDate)
        {
            var date = this.convertTargetDate(targetDate);
            var trainings = _trainingRepository.GetAllByUserId(id).Result;
            var filteredTrainings = trainings
                .Where(t => t.DateTime.Year == date.Year && t.DateTime.Month == date.Month)
                .ToList();

            return filteredTrainings;
        }

        private List<IGrouping<int, Training>> GroupTrainingsByWeek(List<Training> trainings)
        {
            return trainings
                .GroupBy(t => CultureInfo.CurrentCulture.Calendar.GetWeekOfYear(
                    t.DateTime,
                    CalendarWeekRule.FirstDay,
                    DayOfWeek.Monday))
                .ToList();
        }


        public List<TrainingStatistics> GetStatistics(Guid id, string targetDate)
        {
            var trainings = this.GetUserTrainingsForMonth(id, targetDate);
            var trainingsByWeek = GroupTrainingsByWeek(trainings);

            var statistics = trainingsByWeek
                .Select(weekGroup => new TrainingStatistics(
                    TotalDuration: weekGroup.Sum(t => t.DurationInMinutes),
                    NumberOfTrainings: weekGroup.Count(),
                    AverageFatigue: weekGroup.Average(t => t.Fatigue),
                    AverageDifficulty: weekGroup.Average(t => t.Difficulty)
                ))
                .ToList();

            return statistics;
        }

    }
}
