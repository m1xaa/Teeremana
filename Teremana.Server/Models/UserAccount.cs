namespace Teremana.Server.Models
{
    public class UserAccount
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public UserAccount() { }

        public UserAccount(string email, string password)
        {
            Email = email;
            Password = password;
        }

        public UserAccount(Guid id, string email, string password)
        {
            Id = id;
            Email = email;
            Password = password;
        }
    }
}