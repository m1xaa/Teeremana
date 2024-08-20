


using AngularWIthASP.Server.Repository.Auth;
using Teremana.Server.Models;
using Teremana.Server.Services.People;
using Teremena.Server.Dtos.Auth;

namespace AngularWIthASP.Server.Services.Users;

public class AuthService : IAuthService
{

    private readonly IAuthRepository _authRepository;
    private readonly IPersonService _personService;

    public AuthService(IAuthRepository authRepository, IPersonService personService)
    {
        _authRepository = authRepository;
        _personService = personService;
    }
    public Task<Person> Register(RegistrationRequest request)
    {
        var user = _authRepository.Create(new User(request.Email, request.Password)).Result;
        return _personService.Create(new Person(request.Name, request.Surname, request.Birthdate, user));
    }

    public async Task<Person> Login(string email, string password)
    {
        var user = await _authRepository.Login(email, password);
        if (user == null)
            return null;

        return await _personService.GetPersonByUser(user);
    }

}