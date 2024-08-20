namespace Teremena.Server.Dtos.Trainings
{
    public record CreateTrainingRequest(string Type, int DurationInMinutes, int Difficulty, int Fatigue, DateTime DateTime, Guid personId);
}