import React from 'react'
import  Button  from "@/components/ui/button"
import { useNavigate } from 'react-router-dom'


function Home() {
    const navigate = useNavigate()
  return (

    <div className="header">
        <h1 className='text-orange-600'>Generate Your Trip Planning with AI:</h1> <h1> Personalized Itineraries at Your Fingertips</h1>
        <p>Plan your trips and create custom itenaries tailored to your interests and budget</p>
    
        <Button onClick={()=>navigate("create_trip")} content="Get Started"/>

    </div>
  )
}

export default Home