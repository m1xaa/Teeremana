using System;
using System.Threading.Tasks;
using Teremana.Server.Models;
using Teremana.Server.Repository.People;
using Teremana.Server.Services.People;

namespace Teremana.Server.Services.People
{
    public class PersonService : IPersonService
    {
        private readonly IPersonRepository _personRepository;

        public PersonService(IPersonRepository personRepository)
        {
            _personRepository = personRepository;
        }

        public async Task<Person> Create(Person person)
        {
            return await _personRepository.Create(person);
        }

        public async Task Delete(Guid id)
        {
            await _personRepository.Delete(id);
        }

        public async Task<Person> Update(Person person)
        {
            return await _personRepository.Update(person);
        }

        public async Task<Person> GetPersonByUser(User user)
        {
            return await _personRepository.GetPersonByUser(user);
        }
    }
}
