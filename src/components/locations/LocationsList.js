import React, { useEffect, useState } from "react";
import { getAllLocations } from "../ApiManager";

export const LocationList = () => {
  // define state, when you invoke useState it returns an array
  // it returns an initial value "locations" & it returns a function
  // that modifies our state "setLocations" is the function
  const [locations, setLocations] = useState([]);
  // "hook" useEffect takes 2 arguments a function and an array
  // useEffect hook gets the array of locations from my API
  // useEffect is to run code when certain state changes i.e. event listener
  useEffect(() => {
    console.log("Initial useEffect");
    getAllLocations().then((locationArray) => {
      setLocations(locationArray);
    });
  }, []);

  useEffect(() => {}, [locations]);

  return (
    <>
      {locations.map((locationObject) => {
        return (
          <p key={`location--${locationObject.id}`}>{locationObject.address}</p>
        );
      })}
    </>
  );
};
