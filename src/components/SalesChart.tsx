import { QuarterlySales } from "../containers/home/types";
import { formatCurrency } from "../utils/formatCurrency";

// Sales Chart Component
export const SalesChart: React.FC<{ data: QuarterlySales[] }> = ({ data }) => {
  const maxValue = Math.max(...data.map(d => d.sales));
  const totalSales = data.reduce((sum, quarter) => sum + quarter.sales, 0);

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-800">Quarterly Sales</h3>
        <div className="text-3xl font-semibold text-gray-900 mt-1">{formatCurrency(totalSales)}</div>
        <div className="text-sm text-green-600 mt-1">Last Quarter +15%</div>
      </div>

      <div className="flex items-end justify-between h-32 mb-4">
        {data.map((item) => (
          <div
            key={item.quarter}
            className="flex flex-col items-center"
            style={{ width: "60px" }}
          >
            <div
              className="w-full bg-gray-200 rounded-sm mb-2 hover:bg-gray-300 transition-all duration-300"
              style={{
                height: `${(item.sales / maxValue) * 100}%`,
                minHeight: "8px",
              }}
              title={`${item.quarter}: ${formatCurrency(item.sales)}`}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between text-sm text-gray-500">
        {data.map((item) => (
          <div key={item.quarter} className="text-center" style={{ width: '60px' }}>
            {item.quarter}
          </div>
        ))}
      </div>
    </div>
  );
};


