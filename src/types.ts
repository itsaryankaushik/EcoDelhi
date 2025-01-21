export interface WasteHotspot {
  id: number;
  location: string;
  wasteReduced: string;
  recyclingRate: string;
  communityParticipation: string;
  mapLink: string;
}

export interface StatCard {
  title: string;
  value: string;
  description: string;
  icon: React.ComponentType;
}