


using AngularWIthASP.Server.Repository.Users;
using Teremana.Server.Models;

namespace AngularWIthASP.Server.Services.Users;

public class UserService : IUserService
{

    private readonly IUserRepository _userRepository;

    public UserService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }
    public Task<User> Register(User user)
    {
        return _userRepository.Register(user);
    }

    public Task<User> Login(string email, string password)
    {
        return _userRepository.Login(email, password);
    }

}