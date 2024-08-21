using Microsoft.AspNetCore.Http;

namespace Teremana.Helper
{
    public class DateConverter
    {
        public static DateOnly Convert(string dateString) {
            var parts = dateString.Split('-');
            int year = int.Parse(parts[0]);
            int month = int.Parse(parts[1]);

            return new DateOnly(year, month, 1); 
        }
    }
}