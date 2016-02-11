using System.Collections.Generic;
using System.IO;
using DTO;

namespace Service.Helpers
{
    public class BetReader
    {
        public IList<Bet> Read(string fileName, bool settled)
        {
            var reader = new StreamReader(File.OpenRead(fileName));
            IList<Bet> bets = new List<Bet>();
            while (!reader.EndOfStream)
            {
                var line = reader.ReadLine();
                var values = line.Split(',');

                bets.Add(new Bet
                {
                    CustomerId = int.Parse(values[0].Trim()),
                    EventId = int.Parse(values[1].Trim()),
                    ParticipantId = int.Parse(values[2].Trim()),
                    Stake = decimal.Parse(values[3].Trim()),
                    Payout = decimal.Parse(values[4].Trim()),
                    PotentialPayout = decimal.Parse(values[4].Trim()),
                    Settled = settled
                });
            }

            return bets;
        }
    }
}
