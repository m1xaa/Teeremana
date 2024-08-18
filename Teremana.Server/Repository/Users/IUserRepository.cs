

using Teremana.Server.Models;

namespace AngularWIthASP.Server.Repository.Users;

public interface IUserRepository
{
    public Task<User> GetById(Guid id);
    Task<User> Register(User user);


    Task<User> Login(string email, string password);
}