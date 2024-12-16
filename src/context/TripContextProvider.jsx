import React,{ useState} from "react";
import tripcontext from "./tripcontext";


const TripContextProvider = ({children})=>{
    const [tripData,setTripData]=useState({})
    return(
        <tripcontext.Provider value={{tripData,setTripData}}>
            {children}
        </tripcontext.Provider>
    )
}

export default TripContextProvider