import tripcontext from "@/context/tripcontext";
import React, { useContext, useEffect, useState } from "react";
import placeholder from "../assets/placeholder.jpg";
import { Link } from "react-router-dom";

function TripDetails() {
  const { tripData } = useContext(tripcontext);

  const trip = JSON.parse(tripData);
  const hotels = trip.hotelOptions;
  const itinerary = trip.itinerary;


  return (
    <div className="h-screen md:px-24 lg:px-48 sm:px-12 px-4 ">
      <div className=" h-auto pb-8">
        <img
          src={placeholder}
          alt="Placeholder"
          className="h-[250px] md:h-[350px] w-full rounded pt-4 object-cover"
        />
        <h1 className="font-bold text-3xl mt-4 text-center">
          Hotel Recommendations
        </h1>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hotels.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded p-4 transition-all hover:scale-105">
              <img
                src={placeholder}
                alt={item.hotelName}
                className="h-[150px] w-full object-cover rounded"
              />
              <h2 className="font-bold text-xl mt-2">{item.hotelName}</h2>
              <p className="text-sm text-gray-600">📍{item.hotelAddress}</p>
              <p className="text-sm text-gray-600">💰{item.price}</p>
              <p className="text-sm text-gray-600">⭐{item.rating}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
              <Link
                to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  item.hotelName
                )}`}
                target="_blank"
                className="text-blue-500 underline mt-2 block"
              >
                View on Google Maps
              </Link>
            </div>
          ))}
        </div>

        <h1 className="font-bold text-3xl mt-4 text-center">Itinerary</h1>

        <div className="">
          {itinerary.map((element, index) => (
            <div className=" " key={index}>
              <h2 className="font-bold ml-5 mt-5"> Day: {element.day}</h2>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {element.plan.map((item) => (
                  <div className="bg-white shadow-md rounded p-4 transition-all hover:scale-105">
                    <h3 className="font-medium text-orange-600">{item.time}</h3>
                    <div>
                      <img className="h-[150px] w-full object-cover rounded " src={placeholder} alt="" />
                      <h1 className="font-bold">{item.placeName}</h1>
                    </div>
                    <div>
                      <p>{item.placeDetails}</p>
                      <p>{item.rating}</p>
                      <Link
                        to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          item.placeName
                        )}`}
                        target="_blank"
                        className="text-blue-500 underline mt-2 block"
                      >
                        View on Google Maps
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="font-bold text-center pb-10">Note: Images Displayed are Just Placeholders they don't have any connection with the palce</p>
      </div>
    </div>
  );
}

export default TripDetails;
