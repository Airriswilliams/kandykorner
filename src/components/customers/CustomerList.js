import React, { useEffect, useState } from "react";
import { getAllCustomers, getAllOrders } from "../ApiManager";
// function purpose is to render a string of how many customers we have
// and strings of each customer name

export const CustomerList = () => {
  // useState is referred to as a hook and when you invoke useState it returns an array
  // it returns an initial value "customers" & it returns a function
  // that modifies our state "setCustomers" is the function
  // useState capturing and storing new state specifically for customers in the CustomerList function
  const [customers, setCustomer] = useState([]);
  const [purchases, updatePurchases] = useState([]);
  // "hook" useEffect takes 2 arguments a function and an array
  // useEffect is to run code when certain state changes i.e. event listener
  useEffect(() => {
    getAllCustomers()
      .then(setCustomer)
      .then(getAllOrders)
      .then((data) => {
        updatePurchases(data);
      });
  }, []);

  useEffect(() => {
    const totalPurchases = customers.map((customer) => {
      customer.numberOfPurchases = purchases.filter(
        (purchase) => customer.id === purchase.customerId
      ).length;
      return customer;
    });

    totalPurchases.sort((a, b) => {
      return b.numberOfPurchases - a.numberOfPurchases;
    });

    setCustomer(totalPurchases);
  }, [purchases]);

  return (
    <>
      <h2>Kandy Customer</h2>
      {/* for each customerObject in the customers array it will be returned as JSX */}
      {/* first map through customers array then filter out each purchase made by customer */}

      {customers.map((customer) => {
        return (
          <p key={`customer--${customer.id}`}>
            {customer.name}

            {/* check to see of customer.id === customerId in purchases array, if it does return then return the length in purchases. */}
            {
              purchases.filter(
                (purchase) => customer.id === purchase.customerId
              ).length
            }
          </p>
        );
      })}
    </>
  );
};
// keys are basically id's but are "keys" in react
