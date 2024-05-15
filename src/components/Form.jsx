import React from "react";
import "./Form.css";
import { useLocation } from "react-router-dom";

const Form = () => {
  let data = useLocation();
  console.log(data);
  return (
    <section>
      <aside>
        <div>
          <h3>Basic Info</h3>
          <h3>Fees Heads</h3>
          <h3>Classes and Section</h3>
          <h3>Fees Structure</h3>
        </div>
      </aside>
      <div>
        <label htmlFor="">Organization</label>
        <input type="text" name="" id="" placeholder="select" />
        <label htmlFor="">School </label>
        <input type="text" name="" id="" placeholder="Enter School Name " />
        <label htmlFor="">U-DISE No </label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Please Enter U-DISE Number"
        />
        <label htmlFor="">Address</label>
        <input type="text" name="" id="" placeholder="Enter Address" />
        <label htmlFor="">State</label>
        <input type="text" name="" id="" placeholder="Select state" />
        <label htmlFor="">City</label>
        <input type="text" name="" id="" placeholder="Select City" />
        <label htmlFor="">Pincode</label>
        <input type="text" name="" id="" placeholder="Enter Pincode" />
        <label htmlFor="">Status</label>
        <input type="radio" name="" id="" placeholder="" />
        <label htmlFor="">Contact Person</label>
        <input type="text" name="" id="" placeholder="Enter Contact person" />
        <label htmlFor="">Contact Number</label>
        <input type="text" name="" id="" placeholder="Enter Contact Number" />
        <label htmlFor="">Contact Email</label>
        <input type="text" name="" id="" placeholder="Enter Contact Email" />
        <label htmlFor="">School Logo</label>
        <input type="image" name="" id="" placeholder="Enter Contact Email" />
        <button type="submit"></button>
      </div>
      <aside>
        <div>
          <img src="" alt="" />
          <label htmlFor="">Administration</label>
          <input type="radio" name="" id="" />
          <label htmlFor="">Admission</label>
          <input type="radio" name="" id="" />
          <label htmlFor="">Attendance</label>
          <input type="radio" name="" id="" />
          <label htmlFor="">Communication</label>
          <input type="radio" name="" id="" />
          <label htmlFor="">Examination</label>
          <input type="radio" name="" id="" />
          <label htmlFor="">Fees</label>
          <input type="radio" name="" id="" />
          <label htmlFor="">Hostel</label>
          <input type="radio" name="" id="" />
          <label htmlFor="">LMS</label>
          <input type="radio" name="" id="" />
          <label htmlFor="">Time Table</label>
          <input type="radio" name="" id="" />
        </div>
      </aside>
    </section>
  );
};

export default Form;
