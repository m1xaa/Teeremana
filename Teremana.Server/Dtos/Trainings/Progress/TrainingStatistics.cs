namespace Teremana.Server.Dtos.Trainings.Progress
{
    public record TrainingStatistics(int WeekNumber, int TotalDuration, int NumberOfTrainings, double AverageFatigue, double AverageDifficulty);
}