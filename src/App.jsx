import { RouterProvider } from "react-router-dom";
// import "./App.css";

import React from "react";
import { routes } from "./projectRouting/ProjectRoutes";

const App = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
