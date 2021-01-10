import React, {useState} from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import axios from "axios"


const MapContainer = () => {
    
    const [ selected, setSelected ] = useState({});

    const onSelect = (artwork) => {
        setSelected(artwork);
      }
    

  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: -37.813600, lng: 144.963100
  }

    // axios.get("data.json")//update to be actual endpoint once backend api working
    //     .then(res=>createMarkers(res.data))
    //     .catch(console.log)

    // const createMarkers = (data)=>{
    //     const artworks = JSON.parse(data);
    //     artworks.map(artwork=>{
    //         return (
    //             <Marker key={artwork.name} position={item.geom}/>
    //             )
    //     })
    // }

  const artworks = [
    {
      name: "Port Phillip Monument",
      geom: { 
        lat: -37.8056957854241,
        lng: 144.907291041632 
      },
    },
    {
      name: "Blowhole",
      geom: { 
        lat: -37.8220182164578,
        lng: 144.946871022845
      },
    },
    {
      name: "Federation Bells",
      geom: { 
        lat: -37.8186738864394,
        lng: 144.974167165492
      },
    },
    {
      name: "Location 4",
      geom: { 
        lat: 41.3797,
        lng: 2.1682
      },
    },
    {
      name: "Location 5",
      geom: { 
        lat: 41.4055,
        lng: 2.1915
      },
    }
  ];
  
  return (
     <LoadScript
       googleMapsApiKey={process.env.REACT_APP_GOOGLE_API}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
          >
          {
             artworks.map(artwork => {
               return (
               <Marker key={artwork.name} position={artwork.geom} onClick={() => onSelect(artwork)}
               />
               )
             })
          }
          {/* infoWindows */}
          {
            selected.geom && 
            (
            <InfoWindow
            position={selected.geom}
            clickable={true}
            onCloseClick={() => setSelected({})}
            >
            <p>{selected.name}</p>
            </InfoWindow>
            )
          }
          </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;
