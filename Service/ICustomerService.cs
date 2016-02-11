using System.Collections.Generic;
using DTO;

namespace Service
{
    public interface ICustomerService
    {
        /// <summary>
        /// Get all customers
        /// </summary>
        /// <returns></returns>
        IList<Customer> GetAll();
    }
}
