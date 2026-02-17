import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt,FaChevronLeft,FaSearch, FaUsers } from "react-icons/fa";
import Back from "../../components/back/Back";

const events = [
  {
    title: "Baptism",
    family:"Joseph Family",
    date: "2024-09-15",
    location: "St. Mary's Church, Kochi",
    description:
      "Annual parish feast with Holy Qurbana, procession, and cultural programs.",
  },
  {
    title: "First Holy Communion",
    family:"Thomas Family",
    date: "2024-09-22",
    location: "Parish Hall",
    description:
      "Monthly youth gathering focusing on faith formation and leadership.",
  },
  {
    title: "Wedding",
    family:"Sebastian & Maria",
    date: "2024-10-05",
    location: "Community Center",
    description:
      "Serving the needy through food distribution and social service.",
  },
  {
    title: "Wedding",
    family:"Sebastian & Maria",
    date: "2024-10-05",
    location: "Community Center",
    description:
      "Serving the needy through food distribution and social service.",
  },
  {
    title: "Wedding",
    family:"Sebastian & Maria",
    date: "2024-10-05",
    location: "Community Center",
    description:
      "Serving the needy through food distribution and social service.",
  },
  {
    title: "Wedding",
    family:"Sebastian & Maria",
    date: "2024-10-05",
    location: "Community Center",
    description:
      "Serving the needy through food distribution and social service.",
  },
  {
    title: "Wedding",
    family:"Sebastian & Maria",
    date: "2024-10-05",
    location: "Community Center",
    description:
      "Serving the needy through food distribution and social service.",
  },
  {
    title: "Wedding",
    family:"Sebastian & Maria",
    date: "2024-10-05",
    location: "Community Center",
    description:
      "Serving the needy through food distribution and social service.",
  },
];

const Events = () => {
  return (
    <div
      className="min-h-screen px-4 py-5 w-full"
      
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
                    placeholder="Search events"
                  />
                </div>
              </div>
            </div>
      <div className="">
        {/* ===== Header ===== */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className="w-14 h-14 flex items-center justify-center rounded-full"
            style={{ backgroundColor: "rgba(132, 42, 76, 0.1)" }}
          >
            <FaCalendarAlt className="text-2xl text-[#842a4c]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#842a4c]">
              Parish Events
            </h1>
            <p className="text-gray-600">
              Stay updated with upcoming parish programs and celebrations
            </p>
          </div>
          
        </div>
        <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-bold text-gray-500">Upcoming Events: {events.length}</span>
            <span className="flex items-center gap-1 text-sm font-bold text-primary bg-slate-50 p-2 rounded-md"><FaCalendarAlt/> This Month</span>
          </div>

        {/* ===== Event List ===== */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition "
            >
              <div className=" flex flex-col  md:justify-between gap-4">
                {/* Event Info */}
                <div className="flex flex-col">
                  <div className="p-2 rounded-t-xl bg-gradient-to-r from-[#842a4c] to-[#b3507d]">
                    <h2 className="text-xl font-bold text-white text-center ">
                    {event.title}
                  </h2>
                  </div>

                  <div className=" flex flex-col items-center gap-2 
                  text-lg   text-gray-600 mt-2 p-6">
                    <span className="flex items-center gap-1 font-bold"><FaUsers/> {event.family}</span>
                    <span className="flex items-center gap-1 text-green-500 text-sm font-normal">
                      <FaCalendarAlt className="text-green-500" />
                      {new Date(event.date).toDateString()}
                    </span>
                    <span className="flex items-center gap-1 text-sm font-semibold">
                      <FaMapMarkerAlt className="text-orange-500" />
                      {event.location}
                    </span>
                  </div>

                  {/* <p className="text-gray-600 mt-3 max-w-3xl">
                    {event.description}
                  </p> */}
                </div>

                {/* CTA */}
                {/* <div className="shrink-0">
                  <button
                    className="px-6 py-2 rounded-lg text-white text-sm font-medium"
                    style={{
                      background:
                        "linear-gradient(135deg, #842a4c, #af1f53)",
                    }}
                  >
                    View Details
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* ===== Empty State (optional) ===== */}
        {events.length === 0 && (
          <EmaptyPage
            icon={<FaCalendarAlt />}
            title="No Events Available"
            description="There are currently no upcoming events. Please check back later."
          />
        )}
      </div>
    </div>
  );
};

export default Events;
