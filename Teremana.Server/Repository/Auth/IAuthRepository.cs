

using Teremana.Server.Models;

namespace AngularWIthASP.Server.Repository.Auth;

public interface IAuthRepository
{
    Task<UserAccount> Create(UserAccount account);
    Task<UserAccount> Login(string email, string password);
}