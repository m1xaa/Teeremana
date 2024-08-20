

using Teremana.Server.Models;

namespace AngularWIthASP.Server.Repository.Auth;

public interface IAuthRepository
{
    Task<User> Create(User user);
    Task<User> Login(string email, string password);
}