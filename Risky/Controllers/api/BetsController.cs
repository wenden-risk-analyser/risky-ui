using System.Collections.Generic;
using System.Web.Http;
using DTO;

namespace Risky.Controllers.api
{
    [RoutePrefix("api/bets")]
    public class BetsController : ApiController
    {
        [HttpGet]
        [Route("")]
        public IHttpActionResult Bets()
        {
            return Json(new List<Bet>
            {
                new Bet
                {
                    CustomerId = 1,
                    EventId = 1,
                    ParticipantId = 1,
                    Stake = 300,
                    Payout = 0,
                    Settled = false,
                    PotentialPayout = 900
                }
            });
        }
    }
}
