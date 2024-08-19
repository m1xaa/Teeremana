using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;
using AngularWIthASP.Server.Repository.Users;
using Microsoft.AspNetCore.Http.HttpResults;
using Teremana.Server.Models;
using Teremana.Server.Repositories;
using Teremena.Server.Dtos.Trainings;

namespace Teremana.Server.Services
{
    public class TrainingService : ITrainingService
    {
        private readonly ITrainingRepository _trainingRepository;
        private readonly IUserRepository _userRepository;

        public TrainingService(ITrainingRepository trainingRepository, IUserRepository userRepository)
        {
            _trainingRepository = trainingRepository;
            _userRepository = userRepository;
        }

        public async Task<IEnumerable<Training>> GetAllByUserId(Guid userId)
        {
            return await _trainingRepository.GetAllByUserId(userId);
        }

        public async Task<Training> Create(CreateTrainingRequest request)
        {
            User user = _userRepository.GetById(request.UserId).Result;
            Training training = new(request.Type, request.DurationInMinutes,
                request.Difficulty, request.Fatigue, request.DateTime.ToUniversalTime(), user);
            return await _trainingRepository.Create(training);
        }

        public async Task<Training> Update(UpdateTrainingRequest request, Guid id)
        {
            User user = _userRepository.GetById(request.UserId).Result;
            Training training = new(id, request.Type, request.DurationInMinutes,
                request.Difficulty, request.Fatigue, request.DateTime.ToUniversalTime(), user);
            return await _trainingRepository.Update(training);
        }

        public async Task Delete(Guid id)
        {
            await _trainingRepository.Delete(id);
        }
    }
}
