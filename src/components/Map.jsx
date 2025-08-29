import { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function LocationMarker({ onSelect }) {
  const [position, setLocalPosition] = useState(null);

  useMapEvents({
    click(e) {
      setLocalPosition(e.latlng);
      onSelect(e.latlng);
    },
  });

  return position === null ? null : <Marker position={position}></Marker>;
}

export default function MapSelector({ setPosition, name = 'location' }) {
  const [position, setInternalPosition] = useState(null);

  const handleSelect = (latlng) => {
    setInternalPosition(latlng);
    if (setPosition) setPosition(latlng); 
  };

  return (
    <div className="col-12 control">
      <label className="form-label mb-2">انتخاب روی نقشه</label>
      <div style={{ height: '250px', width: '100%' }}>
        <MapContainer
          center={[35.6892, 51.389]}
          zoom={14}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <LocationMarker onSelect={handleSelect} />
        </MapContainer>
      </div>

      {position && (
        <input
          type="hidden"
          name={name}
          value={`${position.lat},${position.lng}`}
        />
      )}
    </div>
  );
}
