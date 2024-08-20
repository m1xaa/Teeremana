using System;

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
        public Person Person { get; set; }

        public Training() { }

        public Training(string type, int durationInMinutes, int difficulty, int fatigue, DateTime dateTime, Person person)
        {
            Type = type;
            DurationInMinutes = durationInMinutes;
            Difficulty = difficulty;
            Fatigue = fatigue;
            DateTime = dateTime;
            Person = person;
        }

        public Training(Guid id, string type, int durationInMinutes, int difficulty, int fatigue, DateTime dateTime, Person person)
        {
            Id = id;
            Type = type;
            DurationInMinutes = durationInMinutes;
            Difficulty = difficulty;
            Fatigue = fatigue;
            DateTime = dateTime;
            Person = person;
        }
    }
}