using AngularWIthASP.server.Database.Context;

using AngularWIthASP.Server.Repository.Users;
using Microsoft.EntityFrameworkCore;
using Teremana.Server.Models;


namespace AngularWIthASP.Server.Repository.Users;

public class UserRepository : IUserRepository
{
    private readonly ApplicationDbContext _context;

    public UserRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<User> GetById(Guid id)
    {
        return await _context.Users.FindAsync(id);
    }

    public async Task<User> Register(User user)
    {
        var savedUser = _context.Users.Add(user);
        await _context.SaveChangesAsync();
        return await GetById(user.Id);
    }

    public async Task<User> Login(string email, string password)
    {
        return await _context.Users
            .Where(u => u.Email == email && u.Password == password)
            .FirstOrDefaultAsync();
    }
}
