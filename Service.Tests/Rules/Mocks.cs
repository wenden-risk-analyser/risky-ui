using System.Collections.Generic;

namespace Service.Tests.Rules
{
    public static class Mocks
    {
        public static IList<DTO.Bet> HighWinBets()
        {
            // win percentage = 66.666666
            // average stake 50
            return new List<DTO.Bet>
            {
                new DTO.Bet
                {
                    Settled = true,
                    Payout = 300,
                    Stake = 50
                },
                new DTO.Bet
                {
                    Settled = true,
                    Payout = 200,
                    Stake = 50
                },
                new DTO.Bet
                {
                    Settled = true,
                    Payout = 0,
                    Stake = 50
                }
            };
        }

        public static IList<DTO.Bet> LowWinBets()
        {
            // win percentage = 33.333333
            return new List<DTO.Bet>
            {
                new DTO.Bet
                {
                    Settled = true,
                    Payout = 300
                },
                new DTO.Bet
                {
                    Settled = true,
                    Payout = 0
                },
                new DTO.Bet
                {
                    Settled = true,
                    Payout = 0
                }
            };
        }

        public static IList<DTO.Bet> AverageStake50()
        {
            // average stake = 50
            return new List<DTO.Bet>
            {
                new DTO.Bet
                {
                    Settled = true,
                    Stake = 50
                },
                new DTO.Bet
                {
                    Settled = true,
                    Stake = 50
                },
                new DTO.Bet
                {
                    Settled = true,
                    Stake = 50
                }
            };
        }
    }
}
