import React from "react";
import AsideBar from "./../components/AsideBar";
import { Outlet } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section className="homePage">
      <AsideBar></AsideBar>
      <Outlet></Outlet>
    </section>
  );
};

export default Home;
