// import React from 'react';
import {  Map, TrendingUp } from 'lucide-react';

import { WasteHeatmap } from '../components/maps/WasteHeatmap';
import { Navbar2 } from '../components/Navbar2.tsx';
import { PieChart2 } from '../components/charts/PieChart';
import { BarGraph } from '../components/charts/BarGraph';
import { Leaf } from 'lucide-react';
import { wasteDistributionData, monthlyWasteData } from '../components/DataCenter.tsx'


const metrics = [
  { title: 'Total Waste', value: '1,245', unit: ' lakh tons', change: '+14%' },
  { title: 'Recycling Rate', value: '45', unit: '%', change: '+5%' },
  { title: 'Active Areas', value: '28', unit: 'zones', change: '+2' },
  { title: 'Community Score', value: '8.4', unit: '/10', change: '+0.6' }
];

export function Dashboard() {
  return (
    <div>

<Navbar2 />
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
            <div className="flex items-center gap-3 mb-1">
              <Leaf className="w-8 h-8 text-green-600" />
              <h1 className="text-3xl font-bold text-gray-800">Waste Management Dashboard</h1>
            </div>
          <p className="mt-2 text-gray-600 ml-12">Overview of waste management metrics and trends</p>
          </div>
          <div className="container mx-auto px-4 py-8">
          
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <PieChart2 data={wasteDistributionData} />
              <BarGraph data={monthlyWasteData} />
            </div>
          </div>
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-500">{metric.title}</h3>
              <div className="mt-2 flex items-baseline">
                <p className="text-3xl font-semibold text-gray-900">{metric.value}</p>
                <p className="ml-2 text-sm text-gray-600">{metric.unit}</p>
              </div>
              <div className="mt-2">
                <span className="text-sm font-medium text-green-600">{metric.change}</span>
                <span className="text-sm text-gray-500"> from last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Waste Collection Trends */}
          

         

          {/* Heatmap */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Waste Generation Heatmap</h3>
              <Map className="w-5 h-5 text-gray-400" />
            </div>
            <WasteHeatmap />
          </div>

          {/* Performance Metrics */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Performance Metrics</h3>
              <TrendingUp className="w-5 h-5 text-gray-400" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-600">Collection Efficiency</h4>
                <p className="text-2xl font-semibold text-green-600">92%</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-600">Processing Rate</h4>
                <p className="text-2xl font-semibold text-blue-600">85%</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-600">Segregation Rate</h4>
                <p className="text-2xl font-semibold text-purple-600">78%</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-600">Recovery Rate</h4>
                <p className="text-2xl font-semibold text-yellow-600">65%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}