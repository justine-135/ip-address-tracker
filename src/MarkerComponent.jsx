import { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
const MarkerComponent = ({ data }) => {
  const map = useMap();

  useEffect(() => {
    map.setView([data.latitude, data.longitude], 13);
  }, [data]);
  return (
    <div>
      <Marker position={[data.latitude, data.longitude]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </div>
  );
};

export default MarkerComponent;
