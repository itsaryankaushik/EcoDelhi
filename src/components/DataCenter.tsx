

export const wasteDistributionData = {
    waste_types: ["Organic", "Plastic", "Paper", "Metal", "Glass", "E-Waste"],
    waste_percentages: [40, 25, 15, 10, 7, 3]
};

export const monthlyWasteData = {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    total_waste: [400, 380, 420, 410, 390, 370, 400, 390, 410, 420, 430, 450],
    organic_waste: [120, 110, 130, 125, 115, 105, 120, 115, 125, 130, 135, 140],
    plastic_waste: [80, 75, 85, 80, 78, 70, 75, 72, 78, 80, 82, 85],
    paper_waste: [60, 58, 65, 62, 60, 55, 60, 58, 62, 65, 68, 70]
};

// export const Piedata = {
//   labels: ['Organic', 'Recyclable', 'Non-Recyclable'],
//   datasets: [
//     {
//       data: [45, 30, 25],
//       backgroundColor: [
//         'rgba(75, 192, 192, 0.8)',
//         'rgba(54, 162, 235, 0.8)',
//         'rgba(255, 99, 132, 0.8)',
//       ],
//       borderColor: [
//         'rgba(75, 192, 192, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 99, 132, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };


export const wasteHotspots = [
    { position: [28.6139, 77.2090], name: 'Central Delhi', wasteLevel: 'High' },
    { position: [28.7041, 77.1025], name: 'North Delhi', wasteLevel: 'Medium' },
    { position: [28.5355, 77.3910], name: 'East Delhi', wasteLevel: 'High' },
    { position: [28.5244, 77.1855], name: 'South Delhi', wasteLevel: 'Medium' },
    { position: [28.6304, 77.0809], name: 'West Delhi', wasteLevel: 'Low' },
];

export const leaderboard = [
  { rank: 1, name: 'Vishy Sir', points: 2500, badge: '🏆 Champion' },
  { rank: 2, name: 'Amit Kumar', points: 2350, badge: '🌟 Expert' },
  { rank: 3, name: 'Neha Singh', points: 2200, badge: '🌱 Pioneer' },
  { rank: 4, name: 'Rajesh Verma', points: 2100, badge: '💪 Warrior' },
  { rank: 5, name: 'Meera Patel', points: 2000, badge: '🌿 Guardian' },
  { rank: 6, name: 'Meena Singh', points: 1900, badge: '🔥 Achiever' },
  { rank: 7, name: 'Arpita Sharma', points: 1850, badge: '⚡ Conqueror' },
  { rank: 8, name: 'Anushka', points: 1700, badge: '🌟 Rising Star' },
  { rank: 9, name: 'Priya Sharma', points: 1600, badge: '🌼 Contributor' },
  { rank: 10, name: 'Rohit Mehta', points: 1500, badge: '🌸 Participant' },
];
