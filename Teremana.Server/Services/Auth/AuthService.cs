


using AngularWIthASP.Server.Repository.Auth;
using Teremana.Server.Models;
using Teremana.Server.Services.People;
using Teremena.Server.Dtos.Auth;

namespace AngularWIthASP.Server.Services.Auth;

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
        var account = _authRepository.Create(new UserAccount(request.Email, request.Password)).Result;
        return _personService.Create(new Person(request.Name, request.Surname, request.Birthdate, account));
    }

    public async Task<Person> Login(string email, string password)
    {
        var userAccount = await _authRepository.Login(email, password);
        if (userAccount == null)
            return null;

        return await _personService.GetPersonByUserAccount(userAccount);
    }

}