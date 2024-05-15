import React, { useState } from "react";
import "./Registration.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Registration = () => {
  let location = useLocation();
  console.log(location);
  let [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  let cityList = async () => {
    let data = await axios.post(
      "https://api.vidyamate.in/MachineTest/get_city_list/",
      {
        school_id: location,
        name: credentials.password,
        code: credentials.email,
        insert_by: "2",
      }
    );
    console.log(data);
    console.log(data.status == 200);
    // setCity(data.data.payload);
    toast.success("Fees Updated Succesfully");
  };

  let handlechange = (e) => {
    let { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  return (
    <section>
      <aside>
        <h3>Basic Info</h3>
        <h3>Fees Heads</h3>
        <h3>Classes & Section</h3>
        <h3>Fees Structure</h3>
      </aside>
      <div>
        <label htmlFor="">Fee Head Code</label>
        <input
          type="text"
          name="email"
          id=""
          placeholder="Enter Fee Head Code"
          onChange={handlechange}
        />
        <label htmlFor="">Fee Head Name</label>
        <input
          type="text"
          name="password"
          id=""
          placeholder="Enter Fee Head Name"
          onChange={handlechange}
        />
        <button
          onClick={() => {
            cityList(_);
          }}
        >
          ADD
        </button>
      </div>
      <div>
        <h1>SR NO.</h1>
        <h1>Fee Head Name</h1>
        <h1>Fee Head Code</h1>
        <h1>Action</h1>
      </div>
    </section>
  );
};

export default Registration;
