// import React from 'react';
import { Trophy, Camera, Recycle, Share2 } from 'lucide-react';
import { Navbar2 } from '../components/Navbar2.tsx';
import { leaderboard } from '../components/DataCenter.tsx';

const features = [
  {
    icon: Camera,
    title: 'Report Issues',
    description: 'Upload pictures and report waste management issues in your area'
  },
  {
    icon: Recycle,
    title: 'Waste Guide',
    description: 'Learn about proper waste segregation and recycling practices'
  },
  {
    icon: Share2,
    title: 'Share Impact',
    description: 'Share your contribution and inspire others to join the movement'
  }
];

export function Community() {
  return (<>
    <Navbar2 />
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Community Hub</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our growing community of eco-warriors making Delhi cleaner and greener.
            Every action counts towards building a sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Leaderboard */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 bg-green-600">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white">Top Contributors</h2>
                  <Trophy className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {leaderboard.map((user) => (
                  <div key={user.rank} className="p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="w-8 text-lg font-semibold text-gray-500">
                          #{user.rank}
                        </span>
                        <div className="ml-4">
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.badge}</p>
                        </div>
                      </div>
                      <span className="font-semibold text-green-600">{user.points} pts</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Features and Education */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  link={`/${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                />
                ))} */}
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <feature.icon className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Education Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Latest Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto">
              <ResourceCard
                title="Planet Rescue 101"
                description="A Community page and Blogs website for Innovations to promote circular economy and sustainable lifestyle."
                  likes={216}
                  link=''
              />
                <ResourceCard
                  title="Waste Segregation Guide"
                  description="Learn how to properly segregate different types of waste at home, helping through proper segregation at source."
                  likes={245}
                  link=''

                />
                <ResourceCard
                  title="E-waste Management"
                  description="Best practices for managing electronic waste from Japan like 2020 Olympics medal from recycled Gold."
                  likes={180}
                  link=''

                  />
                <ResourceCard
                  title="Food Waste Solutions"
                  description="South Korea's innovative RFID-based waste management system."
                  likes={156}
                  link=''

                />
                
                <ResourceCard
                  title="Recyclify"
                  description="It collaborates with companies /brands /producers and enables them to responsibly dispose & recycle their ewaste ."
                  likes={161}
                  link=''

                />
                <ResourceCard
                  title="Infinite Cercle (Cercle X)"
                  description="Waste management and EPR service provider for brands and governments pan India."
                  likes={156}
                  link=''

                />
                <ResourceCard
                  title="ScrapUncle"
                  description="Online junk selling platform for your paper, plastics, metals, ewaste, etc."
                  likes={182}
                  link=''

                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</>
  );
}
//TODO: add links also to resource card
function ResourceCard({ title, description, likes, link }: { title: string; description: string; likes: number; link: string }) {
  return (
    <a href={link} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 block">
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="font-medium text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
        </div>
        <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-green-600 mt-4">
          <span>👍</span>
          <span>{likes} likes</span>
        </button>
      </div>
      
    </a>
  );
}
// function ResourceCard({ title, description, likes }: { title: string; description: string; likes: number }) {
//   return (
//     <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50  ">
//       <h3 className="font-medium text-gray-900 mb-2">{title}</h3>
//       <p className="text-gray-600 text-sm mb-4">{description}</p>
//       <div className="flex items-center text-sm text-gray-500">
//         <button className="flex items-center space-x-1 hover:text-green-600 ">
//           <span>👍</span>
//           <span>{likes} likes</span>
//         </button>
//       </div>
//     </div>
//   );
// }