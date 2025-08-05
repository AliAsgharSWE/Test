import { QuarterlySales, User } from "../containers/home/types";

export const aggregateQuarterlySales = (users: User[]): QuarterlySales[] => {
  const quarterlyTotals = { Q1: 0, Q2: 0, Q3: 0, Q4: 0 };

  users.forEach(user => {
    user.salesPerMonth.forEach(monthData => {
      const month = monthData.month;
      if (['January', 'February', 'March'].includes(month)) {
        quarterlyTotals.Q1 += monthData.sales;
      } else if (['April', 'May', 'June'].includes(month)) {
        quarterlyTotals.Q2 += monthData.sales;
      } else if (['July', 'August', 'September'].includes(month)) {
        quarterlyTotals.Q3 += monthData.sales;
      } else if (['October', 'November', 'December'].includes(month)) {
        quarterlyTotals.Q4 += monthData.sales;
      }
    });
  });

  return [
    { quarter: 'Q1', sales: quarterlyTotals.Q1 },
    { quarter: 'Q2', sales: quarterlyTotals.Q2 },
    { quarter: 'Q3', sales: quarterlyTotals.Q3 },
    { quarter: 'Q4', sales: quarterlyTotals.Q4 }
  ];
};
