using System.Collections.Generic;
using System.Linq;
using DTO;
using Service.Rules.Customer;

namespace Service.Helpers
{
    public class CustomerRiskProfile
    {
        private readonly IList<ICustomerRisk> _risks = new List<ICustomerRisk>();

        public CustomerRiskProfile()
        {
            // do this a bit smarter
            _risks.Add(new HighWinRisk());
        }

        public RiskProfile Get(IList<Bet> settledBets)
        {
            var riskProfiles = _risks.Select(risk => risk.Calculate(settledBets)).ToList();

            return riskProfiles.OrderByDescending(risk => risk.Risk).FirstOrDefault();
        }
    }
}
