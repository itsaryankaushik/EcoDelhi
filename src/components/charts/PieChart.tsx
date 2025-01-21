import React from 'react';
import { PieChart as RechartsePieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { Recycle } from 'lucide-react';

interface PieChartProps {
    data: {
        waste_types: string[];
        waste_percentages: number[];
    };
}

const COLORS = ['#4ade80', '#22c55e', '#16a34a', '#15803d', '#166534', '#14532d'];

export const PieChart2: React.FC<PieChartProps> = ({ data }) => {
    const chartData = data.waste_types.map((name, index) => ({
        name,
        value: data.waste_percentages[index],
    }));

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
                <Recycle className="w-6 h-6 text-green-600" />
                <h2 className="text-xl font-semibold text-gray-800">Waste Distribution</h2>
            </div>
            <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <RechartsePieChart>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </RechartsePieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};