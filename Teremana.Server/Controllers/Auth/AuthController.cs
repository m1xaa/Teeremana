
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Teremana.Server.Models;
using Teremena.Server.Dtos.Auth;

namespace Teremana.Server.Controllers.Auth
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class AuthController : ControllerBase
    {

        private readonly IUserService _userService;

        public AuthController(IUserService userService)
        {
            _userService = userService;
        }


        [HttpPost("register")]
        public async Task<User> Register([FromBody] RegistrationRequest request)
        {
            return await _userService.Register(new User(request.Name, request.Surname, request.Email, request.Password,
                request.Birthdate));
        }

        [HttpPost("login")]
        public async Task<User> Login([FromBody] Teremena.Server.Dtos.Auth.LoginRequest request)
        {
            return await _userService.Login(request.Email, request.Password);
        }
    }
}