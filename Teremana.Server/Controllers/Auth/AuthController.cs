using Microsoft.AspNetCore.Mvc;
using Teremana.Server.Models;
using Teremena.Server.Dtos.Auth;

namespace Teremana.Server.Controllers.Auth
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class AuthController : ControllerBase
    {

        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }


        [HttpPost("register")]
        public async Task<Person> Register([FromBody] RegistrationRequest request)
        {
            return await _authService.Register(request);
        }

        [HttpPost("login")]
        public async Task<Person> Login([FromBody] Teremena.Server.Dtos.Auth.LoginRequest request)
        {
            return await _authService.Login(request.Email, request.Password);
        }
    }
}