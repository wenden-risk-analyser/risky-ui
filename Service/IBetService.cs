using System.Collections.Generic;
using DTO;

namespace Service
{
    public interface IBetService
    {
        /// <summary>
        /// Get all bets
        /// </summary>
        /// <returns></returns>
        IList<Bet> GetAll();
    }
}
