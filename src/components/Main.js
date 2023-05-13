import React from "react";
import { RiCalendarEventLine, RiArrowDropDownLine } from "react-icons/ri";
import { GoPrimitiveDot } from "react-icons/go";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Main = () => {
  return (
    <div className="grid grid-cols-4 pl-[50px] pr-[50px] gap-[30px] mt-[25px] pb-[15px]">
      <div className="h-[100px] rounded-[8px] bg-[#DDEFE0] border-l-[4px] border-[#000000] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease flex items-center justify-between">
        <div>
          <p>Total Revenues</p>
          <h1>$2,129,430</h1>
        </div>
        <div>
          <RiCalendarEventLine />
        </div>
      </div>

      <div className="h-[100px] rounded-[8px] bg-[#F4ECDD] border-l-[4px] border-[#000000] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease flex items-center justify-between">
        <div>
          <p>Total Revenues</p>
          <h1>$2,129,430</h1>
        </div>
        <div>
          <RiCalendarEventLine />
        </div>
      </div>

      <div className="h-[100px] rounded-[8px] bg-[#EFDADA] border-l-[4px] border-[#000000] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease flex items-center justify-between">
        <div>
          <p>Total Revenues</p>
          <h1>$2,129,430</h1>
        </div>
        <div>
          <RiCalendarEventLine />
        </div>
      </div>

      <div className="h-[100px] rounded-[8px] bg-[#DEE0EF] border-l-[4px] border-[#000000] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease flex items-center justify-between">
        <div>
          <p>Total Revenues</p>
          <h1>$2,129,430</h1>
        </div>
        <div>
          <RiCalendarEventLine />
        </div>
      </div>

      <div className="flex mt-[22px] w-full gap-[30px]">
        <div className="basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div>
            <h2>Activities</h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <p>May - June 2021</p>
                <RiArrowDropDownLine />
              </div>
              <div className="flex items-center gap-[20px]">
                <div className="flex items-center gap-[20px]">
                  <GoPrimitiveDot className="text-[#E9A0A0]" />
                  <p>Guest</p>
                </div>
                <div className="flex items-center gap-[20px]">
                  <GoPrimitiveDot className="text-[#9BDD7C]" />
                  <p>User</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <LineChart
              width={1000}
              height={359}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#E9A0A0"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#9BDD7C" />
            </LineChart>
          </div>
        </div>
        <div className="basis-[30%]"></div>
      </div>
    </div>
  );
};

export default Main;
