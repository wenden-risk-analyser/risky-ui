using DTO;

namespace Service
{
    public static class Constants
    {
        public static decimal RISKY_WIN_PERCENTAGE = 60;
        public static decimal EXCEPTIONALLY_RISKY_STAKE_FACTOR = 30;
        public static decimal UNUSUAL_STAKE_FACTOR = 10;
        public static decimal RISKY_PAYOUT_AMOUNT = 1000;

        public static RiskProfile SAFE_PROFILE = new RiskProfile
        {
            Risk = Risk.Safe
        };
    }
}
