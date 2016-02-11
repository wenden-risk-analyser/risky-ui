using System.Collections.Generic;
using System.Linq;
using DTO;
using Service.Rules.Bet;

namespace Service.Helpers
{
    public class BetRiskProfile
    {
        private readonly IList<IBetRisk> _risks = new List<IBetRisk>();

        public BetRiskProfile()
        {
            // do this a bit smarter
            _risks.Add(new HighStakeRisk());
            _risks.Add(new HighPayoutRisk());
        }

        public RiskProfile Get(Bet bet, IList<Bet> settledBets)
        {
            var riskProfiles = _risks.Select(risk => risk.Calculate(bet, settledBets)).ToList();

            return riskProfiles.OrderByDescending(risk => risk.Risk).FirstOrDefault();
        }
    }
}
