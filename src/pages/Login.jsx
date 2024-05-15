import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let [credentials, setCredentials] = useState({
    email: "",
    password: "",
    firebase_token: "fja8943kjdfur3",
    access_url: "localhost",
  });

  let access_token = "";
  let navigate = useNavigate();
  let createUser = async () => {
    let data = await axios.post(
      "https://api.vidyamate.in/MachineTest/user_login/",
      {
        email: credentials.email,
        password: credentials.password,
        firebase_token: "fja8943kjdfur3",
        access_url: "localhost",
      }
    );
    access_token = data.data.temp_dict.token;
    console.log(access_token);
    // if (data.request.status == 200) {
    //   navigate("./home");
    // }

    if (access_token !== "") {
      localStorage.setItem("userName", data.data.temp_dict.email);
      navigate("/home", { state: data.data.temp_dict.email });
    }
  };
  let handlechange = (e) => {
    let { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    createUser();
  };
  console.log(credentials);
  return (
    <section className="sec">
      <form className="loginCard" onSubmit={handleSubmit}>
        <h1>Login to Your Account</h1>
        <input
          type="text"
          name="email"
          placeholder="Email"
          id=" "
          onChange={handlechange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          id=""
          onChange={handlechange}
        />
        <button type="submit">Sign in</button>
      </form>
    </section>
  );
};

export default Login;
