namespace Teremana.Server.Models
{
    public class Person
    {
        public Guid Id { get; set; }
        public String Name { get; set; }
        public String Surname { get; set; }
        public DateOnly Birthdate { get; set; }
        public User User { get; set; }

        public Person() { }

        public Person(String name, String surname, DateOnly birthdate, User user)
        {
            Name = name;
            Surname = surname;
            Birthdate = birthdate;
            User = user;
        }

        public Person(Guid id, String name, String surname, DateOnly birthdate, User user)
        {
            Id = id;
            Name = name;
            Surname = surname;
            Birthdate = birthdate;
            User = user;
        }
    }
}