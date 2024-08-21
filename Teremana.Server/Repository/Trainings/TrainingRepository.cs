using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularWIthASP.server.Database.Context;
using Microsoft.EntityFrameworkCore;
using Teremana.Server.Models;

namespace Teremana.Server.Repository.Trainings
{
    public class TrainingRepository : ITrainingRepository
    {
        private readonly ApplicationDbContext _context;

        public TrainingRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Training>> GetAllByPersonId(Guid personId)
        {
            return await _context.Trainings
                .Include(t => t.Person)
                .Include(t => t.Person.Account)
                .Where(t => t.Person.Id == personId)
                .ToListAsync();
        }


        public async Task<Training> Create(Training training)
        {
            var person = await _context.People.FindAsync(training.Person.Id);
            if (person != null)
            {
                training.Person = person; 
            }

            _context.Trainings.Add(training);
            await _context.SaveChangesAsync();
            return training;
        }


        public async Task<Training> Update(Training training)
        {
            _context.Trainings.Update(training);
            await _context.SaveChangesAsync();
            return training;
        }

        public async Task Delete(Guid id)
        {
            var training = await _context.Trainings.FindAsync(id);
            if (training != null)
            {
                _context.Trainings.Remove(training);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<Training> GetbyId(Guid id)
        {
            return await _context.Trainings.FindAsync(id);
        }
    }
}
