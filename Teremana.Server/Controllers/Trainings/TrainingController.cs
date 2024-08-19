using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Teremana.Server.Models;
using Teremana.Server.Services;
using Teremena.Server.Dtos.Trainings;

namespace Teremana.Server.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class TrainingController : ControllerBase
    {
        private readonly ITrainingService _trainingService;

        public TrainingController(ITrainingService trainingService)
        {
            _trainingService = trainingService;
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetAllByUserId(Guid userId)
        {
            var trainings = await _trainingService.GetAllByUserId(userId);
            return Ok(trainings);
        }

        [HttpPost("")]
        public async Task<IActionResult> Create([FromBody] CreateTrainingRequest request)
        {
            if (request == null)
            {
                return BadRequest("Training is null");
            }
            var training = await _trainingService.Create(request);
            return Ok(training);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update([FromBody] UpdateTrainingRequest request, Guid id)
        {
            if (request == null)
            {
                return BadRequest("Training is null");
            }

            var updatedTraining = await _trainingService.Update(request, id);
            return Ok(updatedTraining);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            await _trainingService.Delete(id);
            return NoContent();
        }
    }
}
