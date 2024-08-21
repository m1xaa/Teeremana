namespace Teremana.Server.Models
{
    public class Person
    {
        public Guid Id { get; set; }
        public String Name { get; set; }
        public String Surname { get; set; }
        public DateOnly Birthdate { get; set; }
        public UserAccount Account { get; set; }

        public Person() { }

        public Person(String name, String surname, DateOnly birthdate, UserAccount account)
        {
            Name = name;
            Surname = surname;
            Birthdate = birthdate;
            Account = account;
        }

        public Person(Guid id, String name, String surname, DateOnly birthdate, UserAccount account)
        {
            Id = id;
            Name = name;
            Surname = surname;
            Birthdate = birthdate;
            Account = account;
        }
    }
}