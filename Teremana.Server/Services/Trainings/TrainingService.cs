using Teremana.Server.Models;
using Teremana.Server.Repository.People;
using Teremana.Server.Repository.Trainings;
using Teremena.Server.Dtos.Trainings;

namespace Teremana.Server.Services
{
    public class TrainingService : ITrainingService
    {
        private readonly ITrainingRepository _trainingRepository;
        private readonly IPersonRepository _personRepository;

        public TrainingService(ITrainingRepository trainingRepository, IPersonRepository personRepository)
        {
            _trainingRepository = trainingRepository;
            _personRepository = personRepository;
        }
        public async Task<Training> Create(CreateTrainingRequest request)
        {
            Person person = _personRepository.GetById(request.personId).Result;
            Training training = new(request.Type, request.DurationInMinutes,
                request.Difficulty, request.Fatigue, request.DateTime.ToUniversalTime(), person);
            return await _trainingRepository.Create(training);
        }
        public async Task<IEnumerable<Training>> GetAllByPersonId(Guid personId)
        {
            return await _trainingRepository.GetAllByPersonId(personId);
        }

        

        public async Task<Training> Update(UpdateTrainingRequest request, Guid id)
        {
            var person = _personRepository.GetById(request.personId).Result;
            Training training = new(id, request.Type, request.DurationInMinutes,
                request.Difficulty, request.Fatigue, request.DateTime.ToUniversalTime(), person);
            return await _trainingRepository.Update(training);
        }

        public async Task Delete(Guid id)
        {
            await _trainingRepository.Delete(id);
        }
    }
}
