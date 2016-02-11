using System.Web.Http;
using Service;

namespace Risky.Controllers.api
{
    [RoutePrefix("api/bets")]
    public class BetsController : ApiController
    {
        private readonly IBetService _betService;

        public BetsController(IBetService betService)
        {
            _betService = betService;
        }

        [HttpGet]
        [Route("")]
        public IHttpActionResult Bets()
        {
            return Json(_betService.GetAll());
        }
    }
}
