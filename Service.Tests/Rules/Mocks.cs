using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;

namespace Service.Tests.Rules
{
    public static class Mocks
    {
        public static IList<Bet> HighWinBets()
        {
            // win percentage = 66.666666
            return new List<Bet>
            {
                new Bet
                {
                    Settled = true,
                    Payout = 300
                },
                new Bet
                {
                    Settled = true,
                    Payout = 200
                },
                new Bet
                {
                    Settled = true,
                    Payout = 0
                }
            };
        }

        public static IList<Bet> LowWinBets()
        {
            // win percentage = 33.333333
            return new List<Bet>
            {
                new Bet
                {
                    Settled = true,
                    Payout = 300
                },
                new Bet
                {
                    Settled = true,
                    Payout = 0
                },
                new Bet
                {
                    Settled = true,
                    Payout = 0
                }
            };
        }
    }
}
