import React from 'react'
import Sidebar from './Sidebar'
import Dashboardview from "./Dashboardview";
import { Outlet } from "react-router-dom";
import SignUp from "./SignUp";

const Dashboard = () => {
  return (
    <>
      <div>
        <SignUp />
      </div>
      <div className="flex bg-[#DDDDDD]">
        <div className="basis-[12%] ">
          <Sidebar />
        </div>
        <div className="basis-[88%] border">
          <Dashboardview />
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard