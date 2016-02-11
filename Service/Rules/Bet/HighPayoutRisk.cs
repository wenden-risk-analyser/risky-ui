using System.Collections.Generic;

namespace Service.Rules.Bet
{
    using DTO;

    public class HighPayoutRisk : IBetRisk
    {
        public RiskProfile Calculate(Bet bet, IList<Bet> settledBets)
        {
            if (bet.PotentialPayout > Constants.RISKY_PAYOUT_AMOUNT)
            {
                return new RiskProfile
                {
                    Risk = Risk.Risky,
                    Reason = "Potential payout is too high."
                };
            }

            return Constants.SAFE_PROFILE;
        }
    }
}
