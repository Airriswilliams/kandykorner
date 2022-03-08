import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const EmployeeForm = () => {
  const [employee, updateEmployee] = useState({
    name: "",
    locationId: parseInt(employee.locationId),
    manager: false,
    full_time: true,
    hourly_rate: "",
  });
  const history = useHistory();
  // once Hire employee button is clicked, we need a function to perform Post operation
  // function that uses state variable to create a new obj to post to API

  // send chosenEmployee obj to API
  // find id of employee added
  const sendEmployee = (event) => {
    event.preventDefault();
    const fetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //   save the body of the request which is the chosenEmployee obj
      body: JSON.stringify(employee),
    };

    return fetch("http://localhost:8088/employees", fetchOption).then(() => {
      //   the history.push below ??
      history.push("/employees");
    });
  };
  // create hire employee form user will interact w/

  return (
    <>
      <form>
        <h2>New Employee</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              required
              autoFocus
              type="text"
              className="form-control"
              placeholder="Name of Employee"
              onChange={(evt) => {
                const copy = { ...employee };
                copy.name = evt.target.value;
                updateEmployee(copy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Manager:</label>
            <input
              type="checkbox"
              onChange={(evt) => {
                const copy = { ...employee };
                // "checked" is seeing whether the manager box is checked or not
                copy.manager = evt.target.checked;
                updateEmployee(copy);
              }}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Full Time:</label>
            <input
              type="checkbox"
              onChange={(evt) => {
                const copy = { ...employee };
                // "checked" is seeing whether the full-time box is checked or not
                copy.full_time = evt.target.checked;
                updateEmployee(copy);
              }}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Hourly Rate:</label>
            <input
              required
              autoFocus
              type="text"
              className="form-control"
              placeholder="Hourly Rate"
              onChange={(evt) => {
                const copy = { ...employee };
                copy.hourly_rate = evt.target.value;
                updateEmployee(copy);
              }}
            />
          </div>
        </fieldset>
        <button className="btn btn-primary" onClick={sendEmployee}>
          Finish Hiring
        </button>
      </form>
    </>
  );
};
