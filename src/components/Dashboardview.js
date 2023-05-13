import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import user_img from "../assets/user_img.png";

const Dashboardview = () => {
  return (
    <div className="flex items-center justify-between h-[78px] shadow-lg px-[25px]">
      <div className="flex items-center rounded-[5px]">
        <input
          type="text"
          className="outline-none pl-[13px] rounded-[5px] placeholder:text-[14px] "
          placeholder="Search..."
        />
        <div className="flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
          <FaSearch />
        </div>
      </div>

      <div className="flex items-center gap-[15px] relative">
        <div className="flex items-center gap-[25px] border-r-[1px] pr-[25x]">
          <IoMdNotificationsOutline />
        </div>
        <div>
          <img
            src={user_img}
            alt=""
            className="w-[30px] h-[30px] rounded-full flex items-center justify-center relative"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboardview;
