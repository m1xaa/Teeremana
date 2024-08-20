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
    [Route("api/v1/[controller]")]
    public class TrainingController : ControllerBase
    {
        private readonly ITrainingService _trainingService;
        private readonly ITrainingStatisticsService _trainingStatisticsService;

        public TrainingController(ITrainingService trainingService, ITrainingStatisticsService trainingStatisticsService)
        {
            _trainingService = trainingService;
            _trainingStatisticsService = trainingStatisticsService;
        }

        [HttpGet("{personId}")]
        public async Task<IActionResult> GetAllByPersonId(Guid personId)
        {
            var trainings = await _trainingService.GetAllByPersonId(personId);
            return Ok(trainings);
        }

        [HttpPost("{personId}/statistics")]
        public List<TrainingStatistics> CheckProgress([FromBody] GetProgressRequest request, Guid personId)
        {
            return _trainingStatisticsService.GetStatistics(personId, request.Month);
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
