import React, { useEffect, useState } from "react";
import "./SchollRegistration.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";

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
    <>
      <section className="sechoolreg">
        <article className="imp">
          <div className="Sc">School Registration</div>
          <Link className="add" to={"/home/SchollRegistration"}>
            School List
          </Link>
          <Link className="add1" to={"/addSchool"} state={{ state, city }}>
            Add School
          </Link>
        </article>
        <div className="heading">
          <h6>SR NO. </h6>
          <h6>SCHOOL NAME</h6>
          <h6>CONTACT NO.</h6>
          <h6>EMAIL</h6>
          <h6>STATE</h6>
          <h6>CITY</h6>
          <h6>STATUS</h6>
          <h6>ACTION</h6>
        </div>
        <table>
          {school?.map((ele, ind, arr) => {
            return (
              <tr>
                <td className="sr">{ind + 1}</td>
                <td>{}</td>
                <td className="org">{ele.organization}</td>
                <td className="con">{ele.contact_number}</td>
                <td className="mail">{ele.contact_email}</td>
                <td className="state">{ele.state}</td>
                <td className="city">{ele.city}</td>
                <td className="status">{ele.status}</td>
                <td>
                  <button className="delete">
                    <RiDeleteBin6Line />
                  </button>
                  <Link to={"/updateFee"} state={ele.id}>
                    <TfiWrite className="update" />
                  </Link>
                </td>
              </tr>
            );
          })}
        </table>
      </section>
    </>
  );
};

export default SchollRegistration;
