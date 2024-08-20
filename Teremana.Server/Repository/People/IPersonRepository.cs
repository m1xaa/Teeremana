using Teremana.Server.Models;

namespace Teremana.Server.Repository.People
{
    public interface IPersonRepository
    {
        Task<Person> GetById(Guid id);
        Task<Person> Create(Person person);
        Task Delete(Guid id);
        Task<Person> Update(Person person);
        Task<Person> GetPersonByUser(User user);
    }
}
