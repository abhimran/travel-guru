import React, { useContext } from 'react';
import RoomHeader from '../RoomHeader/RoomHeader';
import './Rooms.css';
import roomData from '../../roomData';
import RoomDetail from '../RoomDetail/RoomDetail';
import { nameContex } from "../../App";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px"
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Rooms = () => {
     const [name, setName, handleClick] = useContext(nameContex);
     const samePlace = roomData.filter(item => item.location === name);

     const [map, setMap] = React.useState(null);

     const onLoad = React.useCallback(function callback(map) {
       const bounds = new window.google.maps.LatLngBounds();
       map.fitBounds(bounds);
       setMap(map);
     }, []);

     const onUnmount = React.useCallback(function callback(map) {
       setMap(null);
     }, []);
    return (
      <div>
        <RoomHeader></RoomHeader>
        <div className="rooms">
          <div className="room-info">
            <p>Date: </p>
            <h3>Stay In {name}</h3>
            <div className="bed-rooms">
              {samePlace.map((room) => (
                <RoomDetail room={room} key={room.id}></RoomDetail>
              ))}
            </div>
          </div>
          <div className="map">
            <LoadScript googleMapsApiKey="">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                <></>
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    );
};

export default Rooms;