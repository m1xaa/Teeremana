using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Teremana.Server.Models;

namespace Teremana.Server.Repositories
{
    public interface ITrainingRepository
    {
        Task<IEnumerable<Training>> GetAllByUserId(Guid userId);
        Task<Training> Create(Training training);
        Task<Training> Update(Training training);
        Task Delete(Guid id);
    }
}
