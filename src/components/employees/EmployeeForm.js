import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const EmployeeForm = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8088/locations")
      // get or "fetch" locations from api
      .then((res) => res.json())
      // parse the response as json
      // then take that parsed data and pass it at locationsArray
      .then((locationArray) => {
        setLocations(locationArray);
        // invoke setLocations function and pass locationArray as an argument
      });
  }, []);

  const [employee, updateEmployee] = useState();
  const history = useHistory();

  const sendEmployee = (event) => {
    event.preventDefault();
    const newEmployee = {
      name: employee.name,
      locationId: employee.locationId,
      manager: employee.manager,
      fullTime: employee.fullTime,
      hourlyRate: employee.hourlyRate,
    };

    // once Hire employee button is clicked, we need a function to perform Post operation
    // function that uses state variable to create a new obj to post to API

    // send chosenEmployee obj to API
    // find id of employee added
    const fetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //   save the body of the request which is the chosenEmployee obj
      body: JSON.stringify(newEmployee),
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

        {
          <fieldset>
            <div className="form-group">
              <label htmlFor="location">Location: </label>
              <select
                name="location"
                onChange={(e) => {
                  const copy = { ...employee };
                  copy.locationId = parseInt(e.target.value);
                  updateEmployee(copy);
                }}
                defaultValue="0"
              >
                <option value="0" disabled hidden>
                  Select Location...
                </option>
                {locations.map((location) => {
                  return (
                    <option
                      key={`location--${location.id}`}
                      value={`${location.id}`}
                    >
                      {`${location.address}`}
                    </option>
                  );
                })}
              </select>
            </div>
          </fieldset>
        }
        {
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
        }

        {
          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Full Time:</label>
              <input
                type="checkbox"
                onChange={(evt) => {
                  const copy = { ...employee };
                  // "checked" is seeing whether the full-time box is checked or not
                  copy.fullTime = evt.target.checked;
                  updateEmployee(copy);
                }}
              />
            </div>
          </fieldset>
        }

        {
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
                  copy.hourlyRate = evt.target.value;
                  updateEmployee(copy);
                }}
              />
            </div>
          </fieldset>
        }
        {
          <button className="btn btn-primary" onClick={sendEmployee}>
            Finish Hiring
          </button>
        }
      </form>
    </>
  );
};
