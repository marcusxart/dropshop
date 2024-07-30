import { useEffect, useState } from "react";
import {io} from "socket.io-client"


export default function App() {
const [location, setLocation]= useState({lat:"",long:""})

let socket;

 

 const error =(err)=>{
  console.log(err)
 }
  useEffect(()=>{

    socket = io("http://localhost:5000")

    const setIntervall=setInterval(()=>{
      navigator.geolocation.getCurrentPosition((position)=>{
      socket.emit("location",{  latitude:position.coords.latitude,
        longitude: position.coords.longitude})
      },error,{enableHighAccuracy:true,maximumAge:0})
    },8000)

    return ()=>{
      clearInterval(setIntervall)
    }
   
  },[])
  return <h1 className="text-3xl font-bold underline">jii</h1>;
}
