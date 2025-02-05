// import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {wasteHotspots} from '../DataCenter'

// Fix for default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});


export function WasteHeatmap() {
  return (
    <MapContainer
      center={[28.6139, 77.2090]}
      zoom={11}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy;'
      />
      {wasteHotspots.map((hotspot, index) => (
        <Marker key={index} position={hotspot.position as [number, number]}>
          <Popup>
            <div>
              <h3 className="font-semibold">{hotspot.name}</h3>
              <p>Waste Level: {hotspot.wasteLevel}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}