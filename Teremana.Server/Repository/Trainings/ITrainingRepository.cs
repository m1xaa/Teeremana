using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Teremana.Server.Models;

namespace Teremana.Server.Repository.Trainings
{
    public interface ITrainingRepository
    {
        Task<IEnumerable<Training>> GetAllByPersonId(Guid personId);
        Task<Training> GetbyId(Guid id);
        Task<Training> Create(Training training);
        Task<Training> Update(Training training);
        Task Delete(Guid id);
    }
}
