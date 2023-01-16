import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Ability = React.lazy(() => import("./views/ability/Ability"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/ability", name: "Ability", element: Ability },
];

export default routes;
