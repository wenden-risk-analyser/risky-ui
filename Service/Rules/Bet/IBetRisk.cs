using System.Collections.Generic;

namespace Service.Rules.Bet
{
    using DTO;

    public interface IBetRisk
    {
        RiskProfile Calculate(Bet bet, IList<Bet> settledBets);
    }
}
