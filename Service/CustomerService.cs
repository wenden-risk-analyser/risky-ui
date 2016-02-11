using System.Collections.Generic;
using DTO;

namespace Service
{
    public class CustomerService: ICustomerService
    {
        public IList<Customer> GetAll()
        {
            return new List<Customer>
            {
                new Customer
                {
                    Id = 1
                }
            };
        }
    }
}
