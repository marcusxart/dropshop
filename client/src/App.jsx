import { useEffect, useState } from "react";
import {io} from "socket.io-client"


export default function App() {
const [location, setLocation]= useState({lat:"",long:""})

let socket;
 const success=(pos)=>{
 const positions={
  lat:pos.coords.latitude,
  long: pos.coords.longitude
 }
  socket.emit("location", positions)
 }

 const error =(err)=>{
  console.log(err)
 }
  useEffect(()=>{
    navigator.geolocation.watchPosition(success,error,{enableHighAccuracy:true,maximumAge:0})
     socket = io("http://localhost:5000")
   
  },[])
  return <h1 className="text-3xl font-bold underline">{location.lat} {location.long}</h1>;
}
