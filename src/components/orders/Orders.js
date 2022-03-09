import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getAllOrders } from "../ApiManager";

export const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getAllOrders().then((purchasesArray) => {
      setOrders(purchasesArray);
    });
  }, []);

  return (
    <>
      {orders.map((order) => {
        return (
          <div key={`order--${order.id}`}>
            {order?.product.name} <br /> {order?.product.price}
            <hr />
          </div>
        );
      })}
    </>
  );
};
