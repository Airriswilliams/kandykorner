import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const ProductList = () => {
  // define state, when you invoke useState it returns an array
  // it returns an initial value "products" & it returns a function
  // that modifies our state "setProducts" is the function
  const history = useHistory();
  const [products, setProducts] = useState([]);
  // "hook" useEffect takes 2 arguments a function and an array
  // useEffect hook gets the array of products from my API
  // useEffect is to run code when certain state changes i.e. event listener
  useEffect(() => {
    fetch(
      "http://localhost:8088/products?_expand=productType&_sort=priceTypeId_order=asc"
    )
      .then((res) => res.json())
      .then((productArray) => {
        setProducts(productArray);
      });
  }, []);
  // useEffect(() => {}, [products]);

  const purchaseCandy = (evt) => {
    evt.preventDefault();
    const newCandyorder = {
      productId: parseInt(evt.target.value),
      customerId: parseInt(localStorage.getItem("kandy_customer")),
    };

    const fetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCandyorder),
    };

    return fetch("http://localhost:8088/purchases", fetchOption).then(() => {
      history.push("/orders");
    });
  };

  return (
    <>
      {products.map((productObject) => {
        return (
          <p key={`product--${productObject.id}`}>
            {productObject.name} ${productObject.price}
            <span></span> {productObject.productType.category}
            <button onClick={purchaseCandy} value={productObject.id}>
              purchase
            </button>
          </p>
        );
      })}
    </>
  );
};
