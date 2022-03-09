export const getAllCustomers = () => {
  return fetch("http://localhost:8088/customers").then((res) => res.json());
};

export const getAllEmployees = () => {
  return fetch("http://localhost:8088/employees").then((res) => res.json());
};

export const getAllLocations = () => {
  return fetch("http://localhost:8088/locations").then((res) => res.json());
};

export const getAllProducts = () => {
  return fetch(
    "http://localhost:8088/products?_expand=productType&_sort=productTypeId&_order=desc"
  ).then((res) => res.json());
};

export const getAllOrders = () => {
  return fetch(
    `http://localhost:8088/purchases?_expand=product&customerId=${localStorage.getItem(
      "kandy_customer"
    )}`
  ).then((res) => res.json());
};
