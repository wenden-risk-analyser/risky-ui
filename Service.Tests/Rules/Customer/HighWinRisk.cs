using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Service.Rules.Customer;

namespace Service.Tests.Rules.Customer
{
    using DTO;

    [TestClass]
    public class UnitTest1
    {
        private readonly HighWinRisk _risk = new HighWinRisk();

        [TestMethod]
        public void Should_Return_Safe_Risk_Profile_For_No_Bet_Customer()
        {
            var profile = _risk.Calculate(new List<Bet>());

            Assert.AreEqual(profile.Risk, Risk.Safe);
        }

        [TestMethod]
        public void Should_Return_Safe_Risk_Profile_For_Low_Win_Customer()
        {
            var profile = _risk.Calculate(Mocks.LowWinBets());

            Assert.AreEqual(profile.Risk, Risk.Safe);
        }

        [TestMethod]
        public void Should_Return_Risky_Risk_Profile_For_High_Win_Customer()
        {
            var profile = _risk.Calculate(Mocks.HighWinBets());
            Assert.AreEqual(profile.Risk, Risk.Risky);
        }
    }
}
