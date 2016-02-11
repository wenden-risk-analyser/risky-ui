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
            // Very simple implementation that reads the data from the provided csv files
            var bets = BetReader.Read(_currDir + @"\Mock\settled.csv", true)
                .Concat(BetReader.Read(_currDir + @"\Mock\unsettled.csv", false)).ToList();

            // add risk profile
            foreach (var bet in bets)
            {
                bet.RiskProfile = _betRiskProfile.Get(bet, bets.Where(b => bet.Settled && b.CustomerId == bet.CustomerId).ToList());
            }

            return bets;
        }
    }
}
