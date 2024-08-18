namespace Teremena.Server.Dtos.Trainings
{
public record UpdateTrainingRequest(string Type, int DurationInMinutes, int Difficulty, int Fatigue, DateTime DateTime, Guid UserId);
}
