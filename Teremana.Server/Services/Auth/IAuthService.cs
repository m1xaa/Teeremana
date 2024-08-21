using Microsoft.AspNetCore.Mvc;
using Teremana.Server.Models;
using Teremena.Server.Dtos.Auth;



public interface IAuthService
{
    public Task<Person> Login(String email, String password);

    public Task<Person> Register(RegistrationRequest request);
}