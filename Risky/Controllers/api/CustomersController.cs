using System.Collections.Generic;
using System.Web.Http;
using DTO;

namespace Risky.Controllers.api
{
    [RoutePrefix("api/customers")]
    public class CustomersController : ApiController
    {
        [HttpGet]
        [Route("")]
        public IHttpActionResult Customers()
        {
            return Json(new List<Customer>
            {
                new Customer
                {
                    Id = 1
                }
            });
        }
    }
}
