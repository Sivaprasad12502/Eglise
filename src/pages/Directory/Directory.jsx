import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

import { FaPerson } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight, FaLocationArrow,FaSearch, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const ward = [
  {
    id: "W-001",
    zone: "North-Zone",
    members: "Families",
  },
  {
    id: "W-0012",
    zone: "North-Zone",
    members: "Families",
  },
  {
    id: "W-0013",
    zone: "North-Zone",
    members: "Families",
  },
  {
    id: "W-0014",
    zone: "North-Zone",
    members: "Families",
  },
  {
    id: "W-002",
    zone: "North-Zone",
    members: "Families",
  },
  {
    id: "W-003",
    zone: "North-Zone",
    members: "Families",
  },
  {
    id: "W-004",
    zone: "North-Zone",
    members: "Families",
  },
];

const Directory = () => {
  return (
    <div className="p-2  container mx-auto">
      <div className="flex items-center gap-2  w-full bg-primary p-2 sticky top-[67px] z-10 mb-6">
        <button
          onClick={() => window.history.back()}
          className="p-2 rounded-full bg-white/40 "
        >
          <FaChevronLeft className="size-6 fill-white" />
        </button>
        <div className="flex justify-center w-full">
          <div className="w-full md:w-1/2 bg-base p-2 flex  items-center gap-1 shadow-md border-2 rounded-2xl mt-1 ">
            <FaSearch className="fill-gray-500" />
            <input
              type="text"
              className="w-full outline-none focus:outline-none "
              placeholder="Search wards"
            />
          </div>
        </div>
      </div>
      <div className="flex  justify-between mt-2 ">
        <div
          className="bg-bglight flex items-center px-2
        py-1 rounded-lg"
        >
          <span className="text-primary font-bold"> Total Wards: 12</span>
        </div>
        <div className="bg-bglight flex gap-1 items-center px-2 py-1 rounded-md">
          <FaUsers className="fill-primary" />
          <span className="text-primary font-bold">320 Families</span>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 justify-items-center gap-2 mt-4 p-4">
        {ward.map((item) => (
          <Link to={`/family/${item.id}`}
          key={item.id}
          className="w-full">
            <div className="shadow-md border-3 border-primary/50 p-3 rounded-md flex flex-col gap-2 items-start bg-white w-full">
              <h1 className="font-bold">{item.id}</h1>
              <div className="flex items-center gap-2 ">
                <FaLocationArrow className="text-gray-300 text-sm" />
                <span className="text-gray-300 text-sm font-bold">{item.zone}</span>
              </div>
              <div className="flex items-center gap-1 justify-start text-primary">
                <FaUsers className="text-sm text-orange-300"/>
                <span className="text-sm text-orange-300 font-bold">{item.members}</span>
              </div>
              <FaChevronRight className="fill-gray-400 ml-auto" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Directory;
