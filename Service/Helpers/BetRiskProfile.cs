using System.Collections.Generic;
using System.Linq;
using DTO;
using Service.Rules.Bet;
using Service.Rules.Customer;

namespace Service.Helpers
{
    public class BetRiskProfile
    {
        private readonly IList<IBetRisk> _risks = new List<IBetRisk>();
        private readonly HighWinRisk _customerRisk;

        public BetRiskProfile()
        {
            // do this a bit smarter
            _risks.Add(new HighStakeRisk());
            _risks.Add(new HighPayoutRisk());
            _customerRisk = new HighWinRisk();
        }

        public RiskProfile Get(Bet bet, IList<Bet> settledBets)
        {
            var riskProfiles = _risks.Select(risk => risk.Calculate(bet, settledBets)).ToList();
            riskProfiles.Add(_customerRisk.Calculate(settledBets));

            var tst = riskProfiles.OrderByDescending(risk => risk.Risk);
            return riskProfiles.OrderByDescending(risk => risk.Risk).FirstOrDefault();
        }
    }
}
