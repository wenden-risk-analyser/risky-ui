using System.Collections.Generic;

namespace Service.Rules.Customer
{
    using DTO;

    public interface ICustomerRisk
    {
        RiskProfile Calculate(IList<Bet> settledBets);
    }
}
