namespace Teremana.Server.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public User() { }

        public User(string email, string password)
        {
            Email = email;
            Password = password;
        }

        public User(Guid id, string email, string password)
        {
            Id = id;
            Email = email;
            Password = password;
        }
    }
}