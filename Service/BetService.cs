using System.Collections.Generic;
using DTO;

namespace Service
{
    public class BetService: IBetService
    {
        public IList<Bet> GetAll()
        {
            return new List<Bet>
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
            };
        }
    }
}
