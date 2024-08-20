using AngularWIthASP.server.Database.Context;

using AngularWIthASP.Server.Repository;
using Microsoft.EntityFrameworkCore;
using Teremana.Server.Models;


namespace AngularWIthASP.Server.Repository.Auth;

public class AuthRepository : IAuthRepository
{
    private readonly ApplicationDbContext _context;

    public AuthRepository(ApplicationDbContext context)
    {
        _context = context;
    }
    public async Task<User> GetById(Guid id)
    {
        return await _context.Users.FindAsync(id);
    }

    public async Task<User> Login(string email, string password)
    {
        return await _context.Users
            .Where(u => u.Email == email && u.Password == password)
            .FirstOrDefaultAsync();
    }

    public async Task<User> Create(User user)
    {
        var savedUser = _context.Users.Add(user);
        await _context.SaveChangesAsync();
        return await GetById(user.Id);
    }
}
