import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

const SignUp = () => {
  return (
    <div className="flex">
      <div className="flex items-center justify-center pl-[171px] pr-[171px] pt-[464px] pb-[472px] basis-[35%] bg-black">
        <h1 className="text-[#FFFFFF] text-[72px] font-montserrat font-bold">
          Board.
        </h1>
      </div>

      <div className="basis-[65%] flex flex-col pt-[260px] pl-[244px] pb-[259px] pr-[253px] items-center bg-[#F5F5F5]">
        <div className="mb-[26px]">
          <h1 className="font-montserrat font-bold text-[36px]">Sign In</h1>
          <p className="font-lato font-normal text-[16px]">
            Sign in to your account
          </p>
        </div>

        <div className="flex items-center gap-[25px] justify-between mb-[25px]">
          <div className=" flex items-center justify-between gap-1 pt-2 pb-[7px] pl-[43px] pr-[19px] w-[180px] h-[30px] bg-[#FFFFFF] rounded-[10px]">
            <FcGoogle />
            <a
              href=""
              className=" font-montserrat font-normal text-xs text-[#858585]"
            >
              Sign in with Google
            </a>
          </div>
          <div className=" flex items-center justify-center gap-1 pt-2 pb-[7px] pl-[43px] pr-[19px] w-[180px] h-[30px] bg-[#FFFFFF] rounded-[10px]">
            <AiFillApple />
            <a
              href=""
              className=" font-montserrat font-normal text-xs text-[#858585] "
            >
              Sign in with Apple
            </a>
          </div>
        </div>

        <div className="flex flex-col bg-[#FFFFFF] w-[385px] h-[317px] pl-[30px] pt-[30px] pr-[30px] mb-5 pb-[30px] rounded-[20px]">
          <label
            htmlFor=""
            className=" mb-[10px] font-lato font-normal text-base"
          >
            Email address
          </label>
          <input
            type="email"
            className="bg-[#F5F5F5] rounded-[10px] h-10 mb-5 pl-[15px] font-lato font-normal text-base"
            value={"johndoe@gmail.com"}
          />
          <label
            htmlFor=""
            className=" mb-[10px] font-lato font-normal text-base"
          >
            Password
          </label>
          <input
            type="password"
            className="bg-[#F5F5F5] rounded-[10px] h-10 mb-5 pl-[15px] font-lato font-normal text-base"
            value={"12345678"}
          />
          <a
            href=""
            className="text-[#346BD4] mb-5 font-lato font-normal text-base"
          >
            Forgot password?
          </a>
          <button
            type="submit"
            className=" text-[#FFFFFF] font-montserrat font-bold text-base rounded-[10px] bg-[#000000] w-full pl-[112.58px] pr-[110.46px] pt-[9px] pb-[9.29px]"
          >
            Sign In
          </button>
        </div>

        <div>
          <p className="text-[#858585] font-lato font-normal text-base">
            Don't have an account?
            <span>
              <a
                href=""
                className="text-[#346BD4] font-lato font-normal text-base"
              >
                <span> </span> Register here
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
