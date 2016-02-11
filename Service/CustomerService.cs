using System.Collections.Generic;
using System.Linq;
using DTO;

namespace Service
{
    public class CustomerService: ICustomerService
    {
        private readonly IBetService _betService;

        public CustomerService(IBetService betService)
        {
            _betService = betService;
        }

        public IList<Customer> GetAll()
        {
            // customers retrieved from bet data
            var custIds = _betService.GetAll().Select(bet => bet.CustomerId).Distinct();

            return (from bet in custIds
                                         select new Customer
                                         {
                                             Id = bet
                                         }).Distinct().ToList();
        }
    }
}
