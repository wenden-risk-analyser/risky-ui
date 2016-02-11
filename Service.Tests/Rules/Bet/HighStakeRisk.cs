using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Service.Tests.Rules.Bet
{
    using DTO;

    [TestClass]
    public class HighStakeRisk
    {
        private readonly Service.Rules.Bet.HighStakeRisk _risk = new Service.Rules.Bet.HighStakeRisk();

        [TestMethod]
        public void Should_Return_Safe_Risk_Profile_For_Low_Win_Bet()
        {
            var profile = _risk.Calculate(new Bet(), Mocks.HighWinBets());

            Assert.AreEqual(profile.Risk, Risk.Safe);
        }
    }
}
