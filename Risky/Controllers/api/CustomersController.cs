using System.Web.Http;
using Service;

namespace Risky.Controllers.api
{
    [RoutePrefix("api/customers")]
    public class CustomersController : ApiController
    {
        private readonly ICustomerService _customerService;

        public CustomersController(ICustomerService customerService)
        {
            _customerService = customerService;
        }

        [HttpGet]
        [Route("")]
        public IHttpActionResult Customers()
        {
            return Json(_customerService.GetAll());
        }
    }
}
