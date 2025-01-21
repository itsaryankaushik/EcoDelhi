// import React from 'react';
import type { WasteHotspot } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';


export function HotspotCard({ location, wasteReduced, recyclingRate, communityParticipation, mapLink }: WasteHotspot) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{location}</h3>
        <Link to={mapLink} target='_blank'>
        <ArrowUpRight className="w-5 h-5 text-green-600" />
        </Link>
      </div>
      <div className="space-y-4  hover:animate-fill-bars" >
        <div>
          <p className="text-sm text-gray-600">Waste Reduced</p>
          <p className="text-lg font-semibold text-gray-900">{wasteReduced}%</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1 ">
            <div 
              className="bg-green-600 rounded-full h-2 transition-width duration-300 " 
              style={{ width: `${wasteReduced}%` }}
            />
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-600">Recycling Rate</p>
          <p className="text-lg font-semibold text-gray-900">{recyclingRate}%</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1 ">
            <div 
              className="bg-blue-600 rounded-full h-2 transition-width duration-300 " 
              style={{ width: `${recyclingRate}%` }}
            />
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-600">Community Participation</p>
          <p className="text-lg font-semibold text-gray-900">{communityParticipation}%</p>
            
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1 ">
            <div 
              className="bg-purple-600 rounded-full h-2 transition-width duration-300 " 
              style={{ width: `${communityParticipation}%` }}
            />
            </div>
        </div>
      </div>
    </div>
  );
}