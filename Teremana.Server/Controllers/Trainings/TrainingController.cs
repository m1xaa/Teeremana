using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Teremana.Server.Models;
using Teremana.Server.Services;
using Teremana.Server.Services.Statistics;
using Teremena.Server.Dtos.Progress;
using Teremena.Server.Dtos.Trainings;

namespace Teremana.Server.Controllers
{
    [ApiController]
    [Route("api/v1/people")]
    public class TrainingController : ControllerBase
    {
        private readonly ITrainingService _trainingService;

        public TrainingController(ITrainingService trainingService)
        {
            _trainingService = trainingService;
        }

        [HttpGet("{personId}/trainings")]
        public async Task<IActionResult> GetAllByPersonId(Guid personId)
        {
            var trainings = await _trainingService.GetAllByPersonId(personId);
            return Ok(trainings);
        }

        [HttpPost("{personId}/trainings")]
        public async Task<IActionResult> Create([FromBody] CreateTrainingRequest request)
        {
            if (request == null)
            {
                return BadRequest("Training is null");
            }
            var training = await _trainingService.Create(request);
            return Ok(training);
        }

        [HttpPut("{personId}/trainings/{id}")]
        public async Task<IActionResult> Update([FromBody] UpdateTrainingRequest request, Guid id)
        {
            if (request == null)
            {
                return BadRequest("Training is null");
            }

            var updatedTraining = await _trainingService.Update(request, id);
            return Ok(updatedTraining);
        }

        [HttpDelete("{personId}/trainings/{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            await _trainingService.Delete(id);
            return NoContent();
        }
    }
}
