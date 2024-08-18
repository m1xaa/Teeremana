namespace Teremana.Server.Models
{
    public class Training
    {
        public Guid Id { get; set; }
        public string Type { get; set; }
        public int DurationInMinutes { get; set; }
        public int Difficulty {  get; set; }
        public int Fatigue { get; set; }
        public DateTime DateTime { get; set; }
        public User User { get; set; }

        public Training() { }

        public Training(string type, int durationInMinutes, int difficulty, int fatigue, DateTime dateTime, User user)
        {
            Type = type;
            DurationInMinutes = durationInMinutes;
            Difficulty = difficulty;
            Fatigue = fatigue;
            DateTime = dateTime;
            User = user;
        }

        public Training(Guid id, string type, int durationInMinutes, int difficulty, int fatigue, DateTime dateTime, User user)
        {
            Id = id;
            Type = type;
            DurationInMinutes = durationInMinutes;
            Difficulty = difficulty;
            Fatigue = fatigue;
            DateTime = dateTime;
            User = user;
        }
    }
}