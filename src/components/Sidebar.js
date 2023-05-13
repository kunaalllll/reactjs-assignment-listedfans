import React from "react";
import { FiPieChart } from "react-icons/fi";
import { BsFillTagsFill } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { TbUserCircle } from "react-icons/tb";
import { AiOutlineSetting } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="bg-[#000000] mt-5 h-screen h-[944px] w-[280px] rounded-[30px] font-montserrat cursor-pointer">
      <div className="px-[15px] py-[30px] mb-7 flex items-center justify-center">
        <h1 className="text-white text-[36px] leading-[20px] ">Board.</h1>
      </div>

      <div className="text-white text-[18px] flex items-center justify-around">
        <FiPieChart />
        <p>Dashboard</p>
      </div>
      <div className="text-white text-[18px] flex items-center justify-around">
        <BsFillTagsFill />
        <p>Transactions</p>
      </div>
      <div className="text-white text-[18px] flex items-center justify-around">
        <TbCalendarTime />
        <p>Schedules</p>
      </div>
      <div className="text-white text-[18px] flex items-center justify-around">
        <TbUserCircle />
        <p>Users</p>
      </div>
      <div className="text-white text-[18px] flex items-center justify-around">
        <AiOutlineSetting />
        <p>Settings</p>
      </div>

      <div className="flex-col text-white">
        <div>
          <p>Help</p>
        </div>
        <div>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
