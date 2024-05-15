// import Registration from "./../components/Registration";
import Home from "./../pages/Home";
import Dashboard from "./../components/Dashboard";
import Masters from "./../components/Masters";
import Organisation from "../components/Organisation";
import AcademicSessions from "./../components/AcademicSessions";
import SchollRegistration from "./../components/SchollRegistration";
import Users from "./../components/Users";
import Login from "./../pages/Login";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./../pages/Layout";
import Form from "./../components/Form";
import Registration from "../components/Registration";

export let routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
        children: [
          {
            path: "/home",
            element: <Dashboard />,
          },
          {
            path: "/home/masters",
            element: <Masters />,
          },
          {
            path: "/home/organisation",
            element: <Organisation />,
          },
          {
            path: "/home/AccademicSessions",
            element: <AcademicSessions />,
          },
          {
            path: "/home/SchollRegistration",
            element: <SchollRegistration />,
          },
          {
            path: "/home/users",
            element: <Users />,
          },
        ],
      },
      {
        path: "/addSchool",
        element: <Form />,
      },
      {
        path: "/updateFee",
        element: <Registration />,
      },
    ],
  },
]);
