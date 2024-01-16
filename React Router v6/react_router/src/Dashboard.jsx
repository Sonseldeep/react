import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();
  let data = {
    name: "Ram",
  };
  return (
    <>
      <h1> Dashboard</h1>

      <button
        onClick={() => {
          navigate("/logout", { state: data });
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Dashboard;
