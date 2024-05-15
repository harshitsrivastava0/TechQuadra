import React from "react";
import { Link } from "react-router-dom";
import "./AsideBar.css";

const AsideBar = () => {
  let links = [
    {
      path: "/home",
      element: "Dashboard",
    },
    {
      path: "/home/masters",
      element: "Masters",
    },
    {
      path: "/home/organisation",
      element: "Organisation",
    },
    {
      path: "/home/AccademicSessions",
      element: "AcademicSessions",
    },
    {
      path: "/home/SchollRegistration",
      element: "SchollRegistration",
    },
    {
      path: "/home/users",
      element: "Users",
    },
  ];
  return (
    <section className="Asidebar">
      {links.map((ele, index, arr) => {
        return (
          <Link className="dash" to={ele.path}>
            {ele.element}
          </Link>
        );
      })}
    </section>
  );
};

export default AsideBar;
