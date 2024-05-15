import React from "react";
import "./Form.css";
import { useLocation } from "react-router-dom";
import AsideBar from "./AsideBar";

const Form = () => {
  let data = useLocation();
  console.log(data);
  return (
    <>
      <section className="college">
        <div className="mn">
          <label className="red" htmlFor="">
            Organization <span>*</span>
          </label>
          <br />
          <input type="text" required name="" id="" placeholder="select" />
          <label className="red" htmlFor="">
            School{" "}
          </label>
          <input type="text" name="" id="" placeholder="Enter School Name " />
          <label className="red" htmlFor="">
            U-DISE No{" "}
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Please Enter U-DISE Number"
          />
          <label className="red" htmlFor="">
            Address
          </label>
          <input type="text" name="" id="" placeholder="Enter Address" />
          <label className="red" htmlFor="">
            State
          </label>
          <input type="text" name="" id="" placeholder="Select state" />
          <label className="red" htmlFor="">
            City
          </label>
          <input type="text" name="" id="" placeholder="Select City" />
          <label className="red" htmlFor="">
            Pincode
          </label>
          <input type="text" name="" id="" placeholder="Enter Pincode" />
          <label className="red" htmlFor="">
            Status
          </label>
          <input type="radio" name="" id="" placeholder="" />
          <label className="red" htmlFor="">
            Contact Person
          </label>
          <input type="text" name="" id="" placeholder="Enter Contact person" />
          <label className="red" htmlFor="">
            Contact Number
          </label>
          <input type="text" name="" id="" placeholder="Enter Contact Number" />
          <label className="red" htmlFor="">
            Contact Email
          </label>
          <input type="text" name="" id="" placeholder="Enter Contact Email" />
          <label className="red" htmlFor="">
            School Logo
          </label>
          <input type="image" name="" id="" placeholder="Enter Contact Email" />
          <button type="submit"></button>
        </div>
        <aside>
          <div className="asides">
            <img src="" alt="" />
            <label className="shift" htmlFor="">
              Administration
            </label>
            <input className="shift" type="radio" name="" id="" />
            <label className="shift" htmlFor="">
              Admission
            </label>
            <input className="shift" type="radio" name="" id="" />
            <label className="shift" htmlFor="">
              Attendance
            </label>
            <input className="shift" type="radio" name="" id="" />
            <label className="shift" htmlFor="">
              Communication
            </label>
            <input className="shift" type="radio" name="" id="" />
            <label className="shift" htmlFor="">
              Examination
            </label>
            <input className="shift" type="radio" name="" id="" />
            <label className="shift" htmlFor="">
              Fees
            </label>
            <input className="shift" type="radio" name="" id="" />
            <label className="shift" htmlFor="">
              Hostel
            </label>
            <input className="shift" type="radio" name="" id="" />
            <label className="shift" htmlFor="">
              LMS
            </label>
            <input className="shift" type="radio" name="" id="" />
            <label className="shift" htmlFor="">
              Time Table
            </label>
            <input className="shift" type="radio" name="" id="" />
          </div>
        </aside>
      </section>
    </>
  );
};

export default Form;
