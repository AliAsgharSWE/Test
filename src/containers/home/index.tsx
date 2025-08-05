import React from 'react';
import { userData } from './data';
import { Header } from '@/src/components/Header';
import { SalesChart } from '@/src/components/SalesChart';
import { RegionDistribution } from '@/src/components/RegionDistribution';
import { Table } from '@/src/components/Table';
import { aggregateQuarterlySales } from '@/src/utils/AggregateQuarterlySales';
import { calculateRegionDistribution } from '@/src/utils/CalculateRegionDistribution';


const Dashboard: React.FC = () => {
  const quarterlySalesData = aggregateQuarterlySales(userData);
  const regionDistributionData = calculateRegionDistribution(userData);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="px-6 py-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h2>
          <p className="text-gray-600 text-sm">Overview of your sales performance and customer interactions.</p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Sales Performance</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <SalesChart data={quarterlySalesData} />
            <RegionDistribution data={regionDistributionData} />
          </div>
        </div>

        <div>
          <Table users={userData} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
