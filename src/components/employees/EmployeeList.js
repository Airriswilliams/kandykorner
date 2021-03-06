import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const EmployeeList = () => {
  // define state, when you invoke useState it returns an array
  // it returns an initial value "products" & it returns a function
  // that modifies our state "setProducts" is the function
  const [employees, setEmployees] = useState([]);
  const [firedEmployee, updateEmployeeList] = useState([]);
  const history = useHistory();
  // "hook" useEffect takes 2 arguments a function and an array
  // useEffect hook gets the array of employees from my API
  // useEffect is to run code when certain state changes i.e. event listener
  useEffect(() => {
    fetch("http://localhost:8088/employees?_expand=location&_sort=address")
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
      });
  }, [firedEmployee]);

  const deleteEmployee = (id) => {
    fetch(`http://localhost:8088/employees/${id}`, {
      method: "DELETE",
    }).then(() => {
      updateEmployeeList([1]);
    });
  };

  // useEffect(() => {}, [employees]);

  return (
    <>
      <div>
        <button onClick={() => history.push("/employees/create")}>
          Hire Employee
        </button>
      </div>

      {employees.map((employeeObject) => {
        return (
          <div key={`employee--${employeeObject.id}`}>
            {employeeObject.name}
            <br /> {employeeObject.location.address}
            <hr />
            <button
              onClick={() => {
                deleteEmployee(employeeObject.id);
              }}
            >
              Fire Employee
            </button>
          </div>
        );
      })}
    </>
  );
};
