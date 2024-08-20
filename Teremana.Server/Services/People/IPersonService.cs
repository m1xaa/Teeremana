using System;
using System.Threading.Tasks;
using Teremana.Server.Models;

namespace Teremana.Server.Services.People
{
    public interface IPersonService
    {
        Task<Person> Create(Person person);
        Task Delete(Guid id);
        Task<Person> Update(Person person);
        Task<Person> GetPersonByUser(User user);
    }
}
