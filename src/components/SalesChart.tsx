// components/SalesChart.tsx
import React from "react";
import { QuarterlySales } from "../containers/home/types";
import { formatCurrency } from "../utils/formatCurrency";

export const SalesChart: React.FC<{ data: QuarterlySales[] }> = ({ data }) => {
  const maxValue = Math.max(...data.map((d) => d.sales));
  const totalSales = data.reduce((sum, quarter) => sum + quarter.sales, 0);

  return (
    <div className="bg-white p-6 rounded-lg border border-[#E5EAF1] shadow-sm w-full">
      <div className="mb-8">
        <h3 className="text-sm font-medium text-[#111827] mb-2">Quarterly Sales</h3>
        <div className="text-[28px] font-bold text-[#111827]">{formatCurrency(totalSales)}</div>
        <div className="text-sm  mt-1">Last Quarter<span className="text-[#16A34A]">+15%</span></div>
      </div>

      <div className="flex items-end justify-between h-40 mb-4 gap-8">
        {data.map((item) => (
          <div key={item.quarter} className="flex flex-col items-center flex-1 text--blue-600">
            <div
              className="w-full bg-[#E5E7EB] rounded-sm transition-all hover:bg-[#D1D5DB]"
              style={{
                height: `${(item.sales / maxValue) * 120}px`,
                minHeight: '8px',
                maxWidth: '20px'
              }}
              title={`${item.quarter}: ${formatCurrency(item.sales)}`}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between text-xs text-[#6B7280] gap-8">
        {data.map((item) => (
          <div key={item.quarter} className="text-center flex-1" style={{ maxWidth: '80px' }}>
            {item.quarter}
          </div>
        ))}
      </div>
    </div>
  );
};
