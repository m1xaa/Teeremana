using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Teremana.Server.Dtos.Trainings.Progress;
using Teremana.Server.Models;
using Teremana.Server.Services;
using Teremana.Server.Services.Trainings.Progress;
using Teremena.Server.Dtos.Trainings;

namespace Teremana.Server.Controllers.Trainings.Progress
{
    [ApiController]
    [Route("api/v1/people")]
    public class ProgressController : ControllerBase
    {
        private readonly ITrainingStatisticsService _trainingStatisticsService;

        public ProgressController(ITrainingStatisticsService trainingStatisticsService)
        {
            _trainingStatisticsService = trainingStatisticsService;
        }

        [HttpPost("{personId}/trainings/statistics")]
        public List<TrainingStatistics> CheckProgress([FromBody] GetProgressRequest request, Guid personId)
        {
            return _trainingStatisticsService.GetStatistics(personId, request.Month);
        }
    }
}
