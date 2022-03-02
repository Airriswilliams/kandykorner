import React, { useEffect, useState } from "react";

export const ProductList = () => {
  // define state, when you invoke useState it returns an array
  // it returns an initial value "products" & it returns a function
  // that modifies our state "setProducts" is the function
  const [products, setProducts] = useState([]);
  // "hook" useEffect takes 2 arguments a function and an array
  // useEffect hook gets the array of products from my API
  // useEffect is to run code when certain state changes i.e. event listener
  useEffect(() => {
    fetch(
      "http://localhost:8088/products?_expand=productType&_sort=priceTypeId_order=asc"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  useEffect(() => {}, [products]);

  return (
    <>
      {products.map((productObject) => {
        return (
          <p key={`product--${productObject.id}`}>
            {productObject.name} ${productObject.price}
            <span></span> {productObject.productType.category}
          </p>
        );
      })}
    </>
  );
};
