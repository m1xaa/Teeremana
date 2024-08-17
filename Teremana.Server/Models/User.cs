namespace Teremana.Server.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public String Name { get; set; }
        public String Surname { get; set; }
        public String Email { get; set; }
        public String Password { get; set; }
        public DateOnly Birthdate { get; set; }

        public User() { }

        public User(String name, String surname, String email, String password, DateOnly birthdate)
        {
            Name = name;
            Surname = surname;
            Email = email;
            Password = password;
            Birthdate = birthdate;
        }

        public User(Guid id, String name, String surname, String email, String password, DateOnly birthdate)
        {
            Id = id;
            Name = name;
            Surname = surname;
            Email = email;
            Password = password;
            Birthdate = birthdate;
        }
    }
}