import React, { useContext, useEffect, useState } from "react";
import Card from "@/components/Card";
import InputBox from "@/components/InputBox";
import Button from "@/components/ui/button";
import bachelor from "../assets/bachelor.png";
import family from "../assets/family.png";
import friendship from "../assets/friendship.png";
import couple from "../assets/couple.png";
import { chatSession } from "@/Aimodel";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import tripcontext from "@/context/tripcontext";

function CreateTrip() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(0);
  const [people, setPeople] = useState("");
  const [budget, setBudget] = useState("");
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const {setTripData}=useContext(tripcontext)

  const person = [
    { img: bachelor, name: "Single" },
    { img: couple, name: "Couple" },
    { img: friendship, name: "Friends" },
    { img: family, name: "Family" },
  ];

  const budgettype = ["Low", "Moderate", "High"];

  const validateform = () => {
    if (!destination || !days || days < 1 || days > 15 || !people || !budget) {
      return false;
    }
    return true;
  };
  const handlesubmit = async(e) => {
    e.preventDefault();
    if (validateform()) {
      setLoading(true)

      const prompt = `Generate Travel Plan for Location:${destination},for ${days} Days for ${people} with a ${budget} budget,Give me a Hotels options list with HotelName,Hotel address,Price, hotel image url,geo coordinates,rating,descriptions and suggest itinerary with placeName,Place Details,Place Image Url, Geo Coordinates,ticket Pricing,rating,Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.`;
        const result = await chatSession.sendMessage(prompt)
        setTripData(result.response.text())
        setLoading(false)
        navigate("/trip_details")
    }
  };
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-3xl my-3 font-bold text-center">
        Provide Some Basic Details to Get Started
      </h1>
      <form onSubmit={handlesubmit} autoComplete="off">
        <InputBox
          label="Enter your Destination"
          type="text"
          onChange={(value) => setDestination(value)}
        />
        <InputBox
          label="How many days are you planning your trip?"
          type="number"
          onChange={(value) => setDays(value)}
        />

        <p className="mt-2">With whom are you planning your adventure?</p>
        <div className="flex flex-wrap justify-center">
          {person.map((element, index) => (
            <Card
              key={index}
              onClick={(selectedPeople) => setPeople(selectedPeople)}
              img={element.img}
              name={element.name}
              className={`${
                people == element.name
                  ? "border-[2px] border-black"
                  : "border-[1px] border-gray-500"
              }`}
            />
          ))}
        </div>

        <p className="mt-2">What is your budget?</p>
        <div className="flex flex-wrap justify-center">
          {budgettype.map((element, index) => (
            <Card
              key={index}
              onClick={(selectedBudget) => setBudget(selectedBudget)}
              name={element}
              className={`${
                budget == element
                  ? "border-[2px] border-black"
                  : "border-[1px] border-gray-500"
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-4">
          <Button type="submit" content={loading? <AiOutlineLoading3Quarters className="text-xl animate-spin" />: "Generate"} />
        </div>
      </form>
    </div>
  );
}

export default CreateTrip;
