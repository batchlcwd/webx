import React from "react";
import { Outlet } from "react-router";

function Dashboard() {
  return (
    <div className="text-white p-10">
      <h1>Welcome to user dashboard</h1>
      <Outlet />
    </div>
  );
}

export default Dashboard;
