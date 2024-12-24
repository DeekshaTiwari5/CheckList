module.exports = [
  {
    id: 1,
    description: "Valuation Fee Paid",
    check: (data) => data.isValuationFeePaid === true,
  },
  {
    id: 2,
    description: "UK Resident",
    check: (data) => data.isUkResident === true,
  },
  {
    id: 3,
    description: "Risk Rating Medium",
    check: (data) => data.riskRating === "Medium",
  },
  {
    id: 4,
    description: "LTV Below 60%",
    check: (data) => {
      const ltv = (data.loanRequired / data.purchasePrice) * 100;
      return ltv < 60;
    },
  },
];
