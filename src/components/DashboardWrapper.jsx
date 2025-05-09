import React from "react";
import Dashboard from "./Dashboard";
import "react-device-frameset/styles/marvel-devices.min.css";
import { DeviceFrameset } from "react-device-frameset";

export const DashboardWrapper = () => {
  return (
    <div className="dashboard-wrapper">
      <h2 style={{ color: "#fff", marginBottom: "30px" }}>Dashboard en acción</h2>
      <DeviceFrameset device="macbook" color="black" className="device">
        <Dashboard />
      </DeviceFrameset>
    </div>
  );
};
