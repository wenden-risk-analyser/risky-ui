using System.Collections.Generic;
using System.Linq;

namespace Service.Rules.Customer
{
    using DTO;

    public class HighWinRisk : ICustomerRisk
    {

        /// <summary>
        /// If a customer has a high win percentage, they are considered risky.
        /// </summary>
        /// <param name="settledBets"></param>
        /// <returns></returns>
        public RiskProfile Calculate(IList<Bet> settledBets)
        {
            if (settledBets.Count == 0)
            {
                return Constants.SAFE_PROFILE;
            }

            var wins = settledBets.Where(bet => bet.Payout > 0);

            if (wins.Count() / (decimal)(settledBets.Count) > Constants.RISKY_WIN_PERCENTAGE / 100)
            {
                return new RiskProfile
                {
                    Risk = Risk.Risky,
                    Reason = "Customer has a high win ratio."
                };
            }

            return Constants.SAFE_PROFILE;
        }
    }
}
