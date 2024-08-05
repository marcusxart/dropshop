import { useEffect, useState } from "react";
import {io} from "socket.io-client"
import {useJsApiLoader, GoogleMap, Marker} from "@react-google-maps/api"

export default function App() {
const {isLoaded,error,isLoading}= useJsApiLoader({})


 const err=(err)=>{
  console.log(err)
 }
 
  useEffect(()=>{

    const socket = io("http://localhost:5000")
    let update

    const setIntervall=setInterval(()=>{

     navigator.geolocation.getCurrentPosition((position)=>{
      update={lat:position.coords.latitude, long:position.coords.longitude}
     },err,{enableHighAccuracy: true,maximumAge:0})
        socket.volatile.emit("location", update)

    },7000)

    return ()=>{
      clearInterval(setIntervall)
    }
   
  },[])


   if (error) {
    return <div>error loading</div>
   }

  return <h1 className="text-3xl font-bold underline">jii
  <div>
   {isLoaded &&(<GoogleMap></GoogleMap>)}
  </div>
  </h1>;
}
