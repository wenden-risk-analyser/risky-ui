﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Bet
    {
        public int CustomerId { get; set; }
        public int EventId { get; set; }
        public int ParticipantId { get; set; }
        public decimal Stake { get; set; }
        public bool Settled { get; set; }
        public decimal PotentialPayout { get; set; }
        public decimal Payout { get; set; }
    }
}