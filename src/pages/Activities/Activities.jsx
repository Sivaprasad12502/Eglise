import React from "react";
import {
  FaPrayingHands,
  FaHandsHelping,
  FaBible,
  FaUsers,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { FaChevronLeft,FaSearch } from "react-icons/fa";
import Back from "../../components/back/Back";

const activities = [
  {
    id: 1,
    title: "Curbana 2026",
    type: "festival",
    description:
      "Regular prayer services and Holy Qurbana that strengthen the spiritual life of parish members.",
    location: "parish Grounds",
    icon: <FaPrayingHands />,
  },
  {
    id: 2,
    title: "Curbana 2026",
    type: "festival",
    description:
      "Regular prayer services and Holy Qurbana that strengthen the spiritual life of parish members.",
    location: "parish Grounds",
    icon: <FaPrayingHands />,
  },
  {
    id: 3,
    title: "Curbana 2026",
    type: "festival",
    description:
      "Regular prayer services and Holy Qurbana that strengthen the spiritual life of parish members.",
    location: "parish Grounds",
    icon: <FaPrayingHands />,
  },
  {
    id: 4,
    title: "Curbana 2026",
    type: "festival",
    description:
      "Regular prayer services and Holy Qurbana that strengthen the spiritual life of parish members.",
    location: "parish Grounds",
    icon: <FaPrayingHands />,
  },
  {
    id: 5,
    title: "Curbana 2026",
    type: "festival",
    description:
      "Regular prayer services and Holy Qurbana that strengthen the spiritual life of parish members.",
    location: "parish Grounds",
    icon: <FaPrayingHands />,
  },
  {
    id: 6,
    title: "Curbana 2026",
    type: "festival",
    description:
      "Regular prayer services and Holy Qurbana that strengthen the spiritual life of parish members.",
    location: "parish Grounds",
    icon: <FaPrayingHands />,
  },
  {
    id: 7,
    title: "Curbana 2026",
    type: "festival",
    description:
      "Regular prayer services and Holy Qurbana that strengthen the spiritual life of parish members.",
    location: "parish Grounds",
    icon: <FaPrayingHands />,
  },
];

const Activities = () => {
  return (
    <div
      className="min-h-screen px-4 pb-5"
      
    >
     <div className="flex items-center gap-2 w-full bg-primary p-2 sticky top-[67px] z-10 mb-6">
             <button
               onClick={() => window.history.back()}
               className="p-2 rounded-full bg-white/40 "
             >
               <FaChevronLeft className="size-6 fill-white" />
             </button>
             <div className="flex justify-center w-full">
               <div className="w-full md:w-1/2 bg-base p-2 flex items-center gap-1 shadow-md border-2 rounded-2xl mt-1">
                 <FaSearch className="fill-gray-500" />
                 <input
                   type="text"
                   className="w-full outline-none focus:outline-none "
                   placeholder="Search activities"
                 />
               </div>
             </div>
           </div>
      <div className="max-w-6xl mx-auto">
        {/* ===== Header ===== */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#842a4c]">
            Parish Activities
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            Our parish is actively involved in spiritual, social, and community
            activities that nurture faith and fellowship.
          </p>
        </div>

        {/* ===== Activities Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300 flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#842a4c] to-[#b3507d]">
                <span className="text-3xl text-white p-3 rounded-full bg-white/20 flex items-center justify-center">
                  {activity.icon}
                </span>
                <div className="flex flex-col items-center">
                  <h3 className="text-lg font-semibold text-white">
                    {activity.title}
                  </h3>
                  <span className="bg-white/25 text-white text-xs font-bold px-3 py-1 rounded-full mt-1">
                    {activity.type}
                  </span>
                </div>
                <span className="text-sm font-semibold text-primary bg-white p-2 rounded-md
                ">
                  Upcoming
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col gap-3">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {activity.description}
                </p>

                <div className="flex flex-wrap gap-4 text-gray-600 items-center">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-[#842a4c]" /> 10 Apr 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock className="text-[#842a4c]" /> 9:00 AM - 8:00 PM
                  </span>
                </div>

                <p className="flex items-center gap-1 text-gray-500 text-xs mt-2">
                  <FaLocationPin className="text-[#842a4c]" />{" "}
                  {activity.location}
                </p>

                <p className="flex items-center gap-1 text-gray-600 font-medium">
                  <FaUsers className="text-[#842a4c]" /> Organised by: <strong className="text-primary">Parish Council</strong>
                 
                </p>

                {/* Optional CTA Button */}
                {/* <button className="mt-4 self-start px-4 py-2 bg-[#842a4c] text-white text-sm font-medium rounded-lg hover:bg-[#6f2340] transition">
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* ===== Quote Section ===== */}
        {/* <div
          className="mt-16 rounded-2xl p-10 text-center"
          style={{
            background: "linear-gradient(135deg, #842a4c, #af1f53)",
          }}
        >
          <p className="text-white text-lg md:text-xl font-medium max-w-3xl mx-auto">
            “Let us not love with words or speech but with actions and in
            truth.”
          </p>
          <span className="block mt-3 text-white/80">– 1 John 3:18</span>
        </div> */}
      </div>
    </div>
  );
};

export default Activities;
