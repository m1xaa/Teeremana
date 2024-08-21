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
    public async Task<UserAccount> GetById(Guid id)
    {
        return await _context.UserAccounts.FindAsync(id);
    }

    public async Task<UserAccount> Login(string email, string password)
    {
        return await _context.UserAccounts
            .Where(u => u.Email == email && u.Password == password)
            .FirstOrDefaultAsync();
    }

    public async Task<UserAccount> Create(UserAccount account)
    {
        var savedUser = _context.UserAccounts.Add(account);
        await _context.SaveChangesAsync();
        return await GetById(account.Id);
    }
}
