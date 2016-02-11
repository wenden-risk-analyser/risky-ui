using System.Collections.Generic;
using System.Linq;

namespace Service.Rules.Bet
{
    using DTO;

    public class HighStakeRisk : IBetRisk
    {
        public RiskProfile Calculate(Bet bet, IList<Bet> settledBets)
        {
            if (settledBets.Count == 0)
            {
                return Constants.SAFE_PROFILE;
            }

            var avergaStake = settledBets.Average(bets => bets.Stake);

            if (avergaStake > Constants.EXCEPTIONALLY_RISKY_STAKE_FACTOR)
            {
                return new RiskProfile
                {
                    Risk = Risk.HighlyRisky,
                    Reason = "Stake is exceptionally large based on betting history."
                };
            }

            if (avergaStake > Constants.UNUSUAL_STAKE_FACTOR)
            {
                return new RiskProfile
                {
                    Risk = Risk.Unusual,
                    Reason = "Stake is unusually large based on betting history."
                };
            }

            return Constants.SAFE_PROFILE;
        }
    }
}
