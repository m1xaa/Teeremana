using Microsoft.AspNetCore.Mvc;
using Teremana.Server.Models;



public interface IUserService
{
    public Task<User> Login(String email, String password);

    public Task<User> Register(User user);
}