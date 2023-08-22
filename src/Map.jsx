import { MapContainer, TileLayer } from "react-leaflet";
import MarkerComponent from "./MarkerComponent";

const Map = ({ data }) => {
  return (
    <div>
      {data && (
        <MapContainer
          center={[data.latitude, data.longitude]}
          zoom={13}
          zoomControl={false}
          scrollWheelZoom={true}
          className="map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerComponent data={data} />
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
