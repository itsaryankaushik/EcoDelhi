import { HotspotCard } from "../components/HotspotCard";
import { StatCard } from "../components/StatCard";
import { Navbar } from '../components/Navbar';
import { Recycle, Users, Truck, TreePine } from 'lucide-react';
// import React from 'react';

export function Home() {
    const linkvariable =`https://www.google.com/maps/place/Bhalswa,+Delhi/@28.7510023,77.164252,14z/data=!3m1!4b1!4m6!3m5!1s0x390d01b3c21f088b:0x9c5699c97484aa56!8m2!3d28.755097!4d77.1604439!16s%2Fg%2F1ywqfxnxh?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D`
    const hotspots = [
        { id: 1, location: 'Central Delhi', wasteReduced: '50', recyclingRate: '70', communityParticipation: '30' , mapLink:`${linkvariable}` },
        { id: 2, location: 'North Delhi', wasteReduced: '30', recyclingRate: '60', communityParticipation: '20' , mapLink:`${linkvariable}` },
        { id: 3, location: 'East Delhi', wasteReduced: '40', recyclingRate: '65', communityParticipation: '25' , mapLink:`${linkvariable}` },
        { id: 4, location: 'South Delhi', wasteReduced: '35', recyclingRate: '68', communityParticipation: '22' , mapLink:`${linkvariable}` },
        { id: 5, location: 'West Delhi', wasteReduced: '20', recyclingRate: '55', communityParticipation: '15' , mapLink:`${linkvariable}` },
        { id: 6, location: 'Gurgaon', wasteReduced: '45', recyclingRate: '72', communityParticipation: '28' , mapLink:`${linkvariable}` },
        { id: 7, location: 'Noida', wasteReduced: '50', recyclingRate: '75', communityParticipation: '32' , mapLink:`${linkvariable}` },
        { id: 8, location: 'Ghaziabad', wasteReduced: '25', recyclingRate: '58', communityParticipation: '18' , mapLink:`${linkvariable}` },
        { id: 9, location: 'Meerut', wasteReduced: '30', recyclingRate: '60', communityParticipation: '20' , mapLink:`${linkvariable}` },
        { id: 10, location: 'Faridabad', wasteReduced: '40', recyclingRate: '65', communityParticipation: '25' , mapLink:`${linkvariable}` },
        { id: 11, location: 'Rohini', wasteReduced: '40', recyclingRate: '65', communityParticipation: '25' , mapLink:`${linkvariable}` },
        { id: 12, location: 'Sonipat', wasteReduced: '40', recyclingRate: '65', communityParticipation: '25' , mapLink:`${linkvariable}` },
    ];

    const stats = [
        { title: 'Total Waste Collected', value: '11,600 tons', description: 'Total amount of waste collected per day', icon: Truck },
        { title: 'Recycling Rate', value: '22%', description: 'Average recycling rate across all hotspots', icon: Recycle },
        { title: 'Community Volunteers', value: '12,000', description: 'Total number of community volunteers involved', icon: Users },
        { title: 'Cleaned Areas', value: '45', description: 'Total number of areas cleaned', icon: TreePine },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <div 
                className="relative bg-gradient-to-br from-green-600 to-blue-500 text-white py-20"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80')`,
                    // backgroundBlend: 'overlay',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50" />
                <div className="relative max-w-7xl mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-6">
                        Building a Cleaner Delhi,<br />Together
                    </h1>
                    <p className="text-xl mb-8 max-w-2xl">
                        Join our community-driven initiative to transform Delhi's waste management. 
                        Together, we can create a sustainable future for our city.
                    </p>
                    <div className="flex space-x-4">
                        <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Get Started
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Stats Section */}
            <div className="max-w-7xl mx-auto px-4 mt-40 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>
            </div>

            {/* Hotspots Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Major Progress Hotspots
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        See how different areas in Delhi are making significant strides in waste management 
                        through community participation and innovative solutions.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hotspots.map((hotspot) => (
                        <HotspotCard key={hotspot.id} {...hotspot} />
                    ))}
                </div>
            </div>
        </div>
    );
}