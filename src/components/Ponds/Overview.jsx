import { MapContainer, Marker, Popup, TileLayer, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Overview=()=>{
      const staticMarkerPosition = [19.827158, 85.76940];
      const customIcon = new L.Icon({
        iconUrl: require("leaflet/dist/images/marker-icon.png"),
        iconSize: [30, 45],
        iconAnchor: [15, 45],
      });
    return(
        <>
         <div className="container-fluid border "
          style={{
            width: "99%",
            height: "70vh" ,
            borderRadius: "15px",
          }}>
        <MapContainer
          center={staticMarkerPosition}
          zoom={55}
          scrollWheelZoom={true}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "15px",
          }}
        >
          <LayersControl position="topright">
            <LayersControl.BaseLayer name="Map">
              <LayersControl.BaseLayer checked name="Satellite">
              <TileLayer url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}&scale=2" />
            
              </LayersControl.BaseLayer>
              <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
          </LayersControl>

          <Marker position={staticMarkerPosition} icon={customIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>

        </MapContainer>
        
       
        
        </div>
        
        </>
    )
}
export default Overview;