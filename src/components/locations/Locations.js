import React, { useEffect, useState } from "react";

export const LocationList = () => {
  // define state, when you invoke useState it returns an array
  // it returns an initial value "locations" & it returns a function
  // that modifies our state "setLocations" is the function
  const [locations, setLocations] = useState([]);
  // "hook" useEffect takes 2 arguments a function and an array
  // useEffect is to run code when certain state changes i.e. event listener
  useEffect(() => {
    fetch("http://localhost:8088/locations")
      .then((res) => res.json())
      .then((data) => {
        setLocations(data);
      });
  }, []);

  useEffect(() => {}, [locations]);

  return (
    <>
      {locations.map((locationObject) => {
        return (
          <p key={`location--${locationObject.id}`}>{locationObject.name}</p>
        );
      })}
    </>
  );
};
