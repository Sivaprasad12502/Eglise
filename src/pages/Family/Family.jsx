import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { FaInfo, FaPhone } from "react-icons/fa6";
import {
  FaChevronCircleRight,
  FaChevronLeft,
  FaHome,
  FaInfoCircle,
  FaUsers,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const items = [
  {
    id: 1,
    name: "Joseph",
    houseName: "Puthenveettil",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGP2M3JQvxe_getEQtF7CDAGvyX3FYOdInA&s",

    members: 5,
  },
  {
    id: 2,
    name: "Joseph",
    houseName: "Puthenveettil",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGP2M3JQvxe_getEQtF7CDAGvyX3FYOdInA&s",

    members: 5,
  },
  {
    id: 5,
    name: "Joseph",
    houseName: "Puthenveettil",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGP2M3JQvxe_getEQtF7CDAGvyX3FYOdInA&s",

    members: 5,
  },
  {
    id: 4,
    name: "Joseph",
    houseName: "Puthenveettil",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGP2M3JQvxe_getEQtF7CDAGvyX3FYOdInA&s",

    members: 5,
  },
  {
    id: 8,
    name: "Joseph",
    houseName: "Puthenveettil",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGP2M3JQvxe_getEQtF7CDAGvyX3FYOdInA&s",

    members: 5,
  },
  {
    id: 3,
    name: "Joseph",
    houseName: "Puthenveettil",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGP2M3JQvxe_getEQtF7CDAGvyX3FYOdInA&s",

    members: 5,
  },
];

const Family = () => {
  return (
    <div className=" px-4 w-full ">
      {/* Sticky Header */}
      <div className="sticky top-[64px] bg-white z-10 pb-4">
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
                     placeholder="Search members"
                   />
                 </div>
               </div>
             </div>
        <div className="flex justify-between p-1">
          <span className="block  font-medium text-primary bg-bglight p-1 rounded-md">
            Total Families: <strong>12</strong>
          </span>
          <span className="flex items-center gap-1 bg-bglight p-1 rounded-md font-bold text-primary">
            <FaHome className="fill-primary"/> 245 Members
          </span>
        </div>
      </div>

      {/* Members List */}
      <div className=" grid gap-y-6 grid-cols-1 w-full ">
        {items.map((item) => (
          <Link
            to={`/family-details/${item.id}`}
            key={item.id}
            className="
              bg-white rounded-2xl shadow-md
              p-4 md:p-5
              transition-all duration-200
              hover:shadow-lg hover:-translate-y-1
              border-3 border-primary/50
            "
          >
            {/* Top Section */}
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-md object-cover border-2 border-[#842a4c]/30"
              />

              {/* Info */}
              <div className="flex-1">
                <h2 className="font-semibold text-lg text-gray-800">
                  {item.name}
                </h2>
                <div className="text-sm text-gray-500 flex items-center gap-2">
                  <FaHome />
                  <span className="text-sm text-gray-500 capitalize">
                    {item.houseName}
                  </span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                  <div className="bg-[#842a4c]/10 p-1 rounded-md flex items-center gap-1">
                    <FaUsers className="text-[#842a4c]" />
                    <span className="font-bold text-primary">
                      {item.members}
                    </span>
                  </div>
                </div>
              </div>
              <FaChevronCircleRight className="text-gray-500" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Family;
