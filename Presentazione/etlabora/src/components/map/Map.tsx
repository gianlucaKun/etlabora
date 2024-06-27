import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Location } from '../../model/Types';


interface MapProps {
  locations: Location[];
  activeLocation: Location;
}

const Map: React.FC<MapProps> = ({ locations, activeLocation }) => {
  return (
    <MapContainer center={activeLocation.position} zoom={6} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map(location => (
        <Marker key={location.id} position={location.position} icon={L.icon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png', iconSize: [38, 95], popupAnchor: [-3, -76] })}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
      <Polyline positions={locations.map(location => location.position)} color="blue" />
    </MapContainer>
  );
};

export default Map;
