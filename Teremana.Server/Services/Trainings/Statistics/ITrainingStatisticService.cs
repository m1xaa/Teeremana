using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http.HttpResults;
using Teremana.Server.Models;
using Teremana.Server.Repositories;
using Teremena.Server.Dtos.Progress;
using Teremena.Server.Dtos.Trainings;

namespace Teremana.Server.Services.Statistics
{
    public interface ITrainingStatisticsService
    {
        public List<TrainingStatistics> GetStatistics(Guid id, string targetDate);
    }
}
