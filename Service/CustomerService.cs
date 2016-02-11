using System.Collections.Generic;
using System.Linq;
using DTO;
using Service.Helpers;

namespace Service
{
    public class CustomerService: ICustomerService
    {
        private readonly IBetService _betService;
        private readonly CustomerRiskProfile _customerRiskProfile;

        public CustomerService(IBetService betService, CustomerRiskProfile customerRiskProfile)
        {
            _betService = betService;
            _customerRiskProfile = customerRiskProfile;
        }

        public IList<Customer> GetAll()
        {
            // customers retrieved from bet data
            var bets = _betService.GetAll();
            var custIds = bets.Select(bet => bet.CustomerId).Distinct();

            return (from id in custIds
                    select new Customer
                    {
                        Id = id,
                        RiskProfile = _customerRiskProfile.Get(bets.Where(bet => bet.CustomerId == id).ToList())
                    }).Distinct().ToList();
        }
    }
}
