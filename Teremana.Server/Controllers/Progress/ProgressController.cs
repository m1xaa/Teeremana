using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Teremana.Server.Models;
using Teremana.Server.Services;
using Teremana.Server.Services.Statistics;
using Teremena.Server.Dtos.Progress;
using Teremena.Server.Dtos.Trainings;

namespace Teremana.Server.Controllers.Progress
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
