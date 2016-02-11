using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using DTO;
using Service.Helpers;

namespace Service
{
    public class BetService: IBetService
    {
        private string _currDir = Path.GetDirectoryName(Assembly.GetExecutingAssembly().CodeBase).Replace("file:\\", string.Empty);

        public IList<Bet> GetAll()
        {
            // Very simple implementation that reads the data from the provided csv files
            return
                BetReader.Read(_currDir + @"\Mock\settled.csv", true)
                .Concat(BetReader.Read(_currDir + @"\Mock\unsettled.csv", false)).ToList()
            ;
        }
    }
}
