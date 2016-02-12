using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Service.Helpers;

namespace Service.Tests.Rules.Bet
{
    using DTO;

    [TestClass]
    public class HighStakeRisk
    {
        private readonly Service.Rules.Bet.HighStakeRisk _risk = new Service.Rules.Bet.HighStakeRisk();
        private readonly BetRiskProfile _betRisk = new BetRiskProfile();

        [TestMethod]
        public void Should_Return_Safe_Risk_Profile_For_No_Bet_History()
        {
            var profile = _risk.Calculate(new Bet { Stake = 60 }, new List<Bet>());

            Assert.AreEqual(profile.Risk, Risk.Safe);
        }

        [TestMethod]
        public void Should_Return_Safe_Risk_Profile_For_Average_Stake()
        {
            var profile = _risk.Calculate(new Bet { Stake = 60 }, Mocks.AverageStake50());

            Assert.AreEqual(profile.Risk, Risk.Safe);
        }

        [TestMethod]
        public void Should_Return_Safe_Risk_Profile_For_Unusual_Limit_Stake()
        {
            var profile = _risk.Calculate(new Bet { Stake = 500 }, Mocks.AverageStake50());

            Assert.AreEqual(profile.Risk, Risk.Safe);
        }

        [TestMethod]
        public void Should_Return_Unusual_Risk_Profile_For_Unusual_Stake()
        {
            var profile = _risk.Calculate(new Bet { Stake = 501 }, Mocks.AverageStake50());

            Assert.AreEqual(profile.Risk, Risk.Unusual);
        }

        [TestMethod]
        public void Should_Return_Unusual_Risk_Profile_For_High_Risk_Limit_Stake()
        {
            var profile = _risk.Calculate(new Bet { Stake = 1500 }, Mocks.AverageStake50());

            Assert.AreEqual(profile.Risk, Risk.Unusual);
        }

        [TestMethod]
        public void Should_Return_High_Risk_Risk_Profile_For_Very_High_Stake()
        {
            var profile = _risk.Calculate(new Bet { Stake = 1501 }, Mocks.AverageStake50());

            Assert.AreEqual(profile.Risk, Risk.HighlyRisky);
        }

        // test combination with customer profile
        [TestMethod]
        public void Should_Return_High_Risk_Risk_Profile_For_Very_High_Stake_And_Risky_Customer()
        {
            var profile = _betRisk.Get(new Bet { Stake = 1501 }, Mocks.HighWinBets());

            Assert.AreEqual(profile.Risk, Risk.HighlyRisky);
        }

        [TestMethod]
        public void Should_Return_Risky_Risk_Profile_For_Unusal_Stake_And_Risky_Customer()
        {
            var profile = _betRisk.Get(new Bet { Stake = 1500 }, Mocks.HighWinBets());

            Assert.AreEqual(profile.Risk, Risk.Risky);
        }
    }
}
