// components/RegionDistribution.tsx
import React from "react";
import { RegionData } from "../containers/home/types";

export const RegionDistribution: React.FC<{ data: RegionData[] }> = ({ data }) => {
    const totalCustomers = 1000;

    return (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm w-full">
            <div className="mb-6">
                <h3 className="text-sm text-gray-500 mb-2">Customer Distribution by Region</h3>
                <div className="text-2xl font-bold text-gray-900 mb-1">{totalCustomers} Customers</div>
                <div className="text-sm  mt-1">Current<span className="text-[#16A34A]">+5%</span></div>

            </div>

            <div className="space-y-4">
                {data.map((region) => (
                    <div key={region.region} className="flex items-center gap-3 cursor-pointer">
                        <span className="text-sm text-blue-600 w-10 flex-shrink-0">
                            {region.region}
                        </span>
                        <div className="flex-1 bg-gray-100 h-2 relative">
                            <div
                                className="bg-gray-400 h-2"
                                style={{
                                    width: `${region.percentage}%`
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
