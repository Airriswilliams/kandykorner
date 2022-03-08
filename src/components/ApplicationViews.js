// this module works in tandem with the NavBar
// the "Routes" are listening for an event
import React from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { ProductList } from "./products/ProductList";
import { LocationList } from "./locations/LocationsList";
import { EmployeeList } from "./employees/EmployeeList";
import { EmployeeForm } from "./employees/EmployeeForm";
import { CustomerList } from "./customers/CustomerList";
import { OrderList } from "./orders/Orders";

// purpose of this component is to render the individual pages that were selected by navBar
// links, click on the links and the following gets triggered.
// Route acts sort of as an event listener that will trigger a component when a certain
// url is shown in the DOM

export const ApplicationViews = () => {
  return (
    <>
      <Route path="/products">
        <ProductList />
      </Route>

      <Route path="/locations">
        <LocationList />
      </Route>

      <Route path="/customers">
        <CustomerList />
      </Route>

      <Route exact path="/employees">
        <EmployeeList />
      </Route>

      <Route path="/employees/create">
        <EmployeeForm />
      </Route>

      <Route exact path="/orders">
        <OrderList />
      </Route>
    </>
  );
};
