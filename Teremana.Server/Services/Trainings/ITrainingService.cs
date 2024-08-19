using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Teremana.Server.Models;
using Teremena.Server.Dtos.Trainings;

namespace Teremana.Server.Services
{
    public interface ITrainingService
    {
        Task<IEnumerable<Training>> GetAllByUserId(Guid userId);
        Task<Training> Create(CreateTrainingRequest request);
        Task<Training> Update(UpdateTrainingRequest request, Guid id);
        Task Delete(Guid id);
    }
}
