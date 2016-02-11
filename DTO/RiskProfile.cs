namespace DTO
{
    public enum Risk
    {
        Safe = 0,
        Unusual,
        Risky,
        HighlyRisky
    }

    public class RiskProfile
    {
        public string Reason { get; set; }
        public Risk Risk { get; set; }
    }
}
