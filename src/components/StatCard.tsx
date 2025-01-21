// import React from 'react';
import type { StatCard as StatCardType } from '../types';

export function StatCard({ title, value, description, icon: Icon }: StatCardType) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-110">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className= "w-6 h-6 text-green-600" ></div>
        <Icon />
      </div>
      <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}