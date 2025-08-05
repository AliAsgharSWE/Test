import { RegionData } from "../containers/home/types";

export const RegionDistribution: React.FC<{ data: RegionData[] }> = ({ data }) => {
    const totalCustomers = data.reduce((sum, region) => sum + region.customers, 0);

    return (
        <div className="container bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-800">Customer Distribution by Region</h3>
                <p className="text-3xl font-semibold text-gray-900 mt-1">
                    {totalCustomers} Customers
                </p>
                <p className="text-sm text-green-600 mt-1">Current +5%</p>
            </div>

            <div className="space-y-4">
                {data.map((region) => (
                    <div key={region.region} className="flex items-center gap-4">
                        <span className="text-sm font-medium text-gray-700 w-16">{region.region}</span>
                        <div className="flex-1 bg-gray-100 rounded-full h-2">
                            <div
                                className="bg-gray-400 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${region.percentage}%` }}
                                title={`${region.region}: ${region.customers} customers (${region.percentage}%)`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
