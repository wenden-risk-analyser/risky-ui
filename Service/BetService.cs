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
        private readonly BetRiskProfile _betRiskProfile;
        private string _currDir;

        public BetService(BetRiskProfile betRiskProfile)
        {
            _betRiskProfile = betRiskProfile;
            _currDir = Path.GetDirectoryName(Assembly.GetExecutingAssembly().CodeBase).Replace("file:\\", string.Empty);
        }

        public IList<Bet> GetAll()
        {
            // sucks for testing, should inject this.
            var betReader = new BetReader();
            // Very simple implementation that reads the data from the provided csv files
            var bets = betReader.Read(_currDir + @"\Mock\settled.csv", true)
                .Concat(betReader.Read(_currDir + @"\Mock\unsettled.csv", false)).ToList();

            // add risk profile
            foreach (var bet in bets)
            {
                bet.RiskProfile = _betRiskProfile.Get(bet, bets.Where(b => b.CustomerId == bet.CustomerId).ToList());
            }

            return bets;
        }
    }
}
