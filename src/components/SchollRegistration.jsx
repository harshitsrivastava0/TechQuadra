import React, { useEffect, useState } from "react";
import "./SchollRegistration.css";
import { Link } from "react-router-dom";
import axios from "axios";

const SchollRegistration = () => {
  let [school, setSchool] = useState([]);
  let [state, setState] = useState([]);
  let [city, setCity] = useState([]);
  let createUser = async () => {
    let data = await axios.get(
      "https://api.vidyamate.in/MachineTest/get_school_designation_list/"
    );
    console.log(data);
    setSchool(data.data.school_list);
  };

  let stateList = async () => {
    let data = await axios.get(
      "https://api.vidyamate.in/MachineTest/get_state_list/"
    );
    setState(data.data.payload);
  };

  let cityList = async () => {
    let data = await axios.get(
      "https://api.vidyamate.in/MachineTest/get_city_list/"
    );
    console.log(data);
    // setCity(data.data.payload);
  };
  useEffect(() => {
    createUser();
    stateList();
    cityList();
  }, []);
  return (
    <section className="sechoolreg">
      <article>
        <div>School Registration</div>
        <Link to={"/home/SchollRegistration"}>School List</Link>
        <Link to={"/addSchool"} state={{ state, city }}>
          Add School
        </Link>
      </article>
      <table>
        {school?.map((ele, ind, arr) => {
          return (
            <tr>
              <td>{ind + 1}</td>
              <td>{}</td>
              <td>{ele.organization}</td>
              <td>{ele.contact_number}</td>
              <td>{ele.contact_email}</td>
              <td>{ele.state}</td>
              <td>{ele.city}</td>
              <td>{ele.status}</td>
              <td>
                <button>delete</button>{" "}
                <Link to={"/updateFee"} state={ele.id}>
                  update
                </Link>
              </td>
            </tr>
          );
        })}
      </table>
    </section>
  );
};

export default SchollRegistration;
