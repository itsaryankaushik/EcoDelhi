import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { LineChart as LineChartIcon } from 'lucide-react';

interface BarGraphProps {
    data: {
        months: string[];
        total_waste: number[];
        organic_waste: number[];
        plastic_waste: number[];
        paper_waste: number[];
    };
}

export const BarGraph: React.FC<BarGraphProps> = ({ data }) => {
    const chartData = data.months.map((month, index) => ({
        month,
        'Total Waste': data.total_waste[index] ,
        'Organic Waste': data.organic_waste[index],
        'Plastic Waste': data.plastic_waste[index],
        'Paper Waste': data.paper_waste[index],
    }));

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
                <LineChartIcon className="w-6 h-6 text-green-600" />
                <h2 className="text-xl font-semibold text-gray-800">Monthly Waste Analysis</h2>
            </div>
            <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="Total Waste"
                            stroke="#4ade80"
                            dot={{ fill: '#4ade80', r: 4 }}
                            strokeWidth={2}
                        />
                        <Line
                            type="monotone"
                            dataKey="Organic Waste"
                            stroke="#22c55e"
                            dot={{ fill: '#22c55e', r: 4 }}
                            strokeWidth={2}
                        />
                        <Line
                            type="monotone"
                            dataKey="Plastic Waste"
                            stroke="#16a34a"
                            dot={{ fill: '#16a34a', r: 4 }}
                            strokeWidth={2}
                        />
                        <Line
                            type="monotone"
                            dataKey="Paper Waste"
                            stroke="#15803d"
                            dot={{ fill: '#15803d', r: 4 }}
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};  