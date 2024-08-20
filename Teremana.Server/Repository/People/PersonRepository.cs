using System;
using System.Linq;
using System.Threading.Tasks;
using AngularWIthASP.server.Database.Context;
using Microsoft.EntityFrameworkCore;
using Teremana.Server.Models;
using Teremana.Server.Repository.People;

namespace Teremana.Server.Repository.People
{
    public class PersonRepository : IPersonRepository
    {
        private readonly ApplicationDbContext _context;

        public PersonRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Person> Create(Person person)
        {
            _context.People.Add(person);
            await _context.SaveChangesAsync();
            return person;
        }

        public async Task Delete(Guid id)
        {
            var person = await _context.People.FindAsync(id);
            if (person != null)
            {
                _context.People.Remove(person);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<Person> Update(Person person)
        {
            _context.People.Update(person);
            await _context.SaveChangesAsync();
            return person;
        }

        public async Task<Person> GetPersonByUser(User user)
        {
            return await _context.People.FirstOrDefaultAsync(p => p.User.Id == user.Id);
        }

        public async Task<Person> GetById(Guid id)
        {
            return await _context.People
                .Include(p => p.User)
                .FirstOrDefaultAsync(p => p.Id == id);
        }
    }
}
