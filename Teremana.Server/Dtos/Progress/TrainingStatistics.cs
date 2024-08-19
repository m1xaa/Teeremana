namespace Teremena.Server.Dtos.Progress
{
    public record TrainingStatistics(int WeekNumber, int TotalDuration, int NumberOfTrainings, double AverageFatigue, double AverageDifficulty);
}