using Teremana.Server.Dtos.Trainings.Progress;

namespace Teremana.Server.Services.Trainings.Progress
{
    public interface ITrainingStatisticsService
    {
        public List<TrainingStatistics> GetStatistics(Guid id, string targetDate);
    }
}
