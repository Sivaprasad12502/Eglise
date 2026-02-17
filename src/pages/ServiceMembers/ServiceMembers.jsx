import React from "react";
import {
  FaPhone,
  FaChevronLeft,
  FaSearch,
} from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

const data = {
  leaders: [
    {
      id: 1,
      name: "Fr. Thomas",
      role: "Vicar",
      image:
        "https://media.istockphoto.com/id/108162892/photo/priest-holding-bible.jpg?s=612x612&w=0&k=20&c=MTuRk11L3Sayb-NkeAhSXazVCWNrFJYAV2AD9ZJFA20=",
      phone: "9876543210",
    },
    {
      id: 2,
      name: "Fr. Thomas",
      role: "Trustee",
      image:
        "https://media.istockphoto.com/id/108162892/photo/priest-holding-bible.jpg?s=612x612&w=0&k=20&c=MTuRk11L3Sayb-NkeAhSXazVCWNrFJYAV2AD9ZJFA20=",
      phone: "9876543210",
    },
    {
      id: 3,
      name: "Fr. Thomas",
      role: "Secretary",
      image:
        "https://media.istockphoto.com/id/108162892/photo/priest-holding-bible.jpg?s=612x612&w=0&k=20&c=MTuRk11L3Sayb-NkeAhSXazVCWNrFJYAV2AD9ZJFA20=",
      phone: "9876543210",
    },
  ],

  members: [
    {
      id: 1,
      name: "Joseph Mathew",
      role: "Secretary",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      phone: "9876500001",
      address: "Palarivattom, Kochi",
    },
    {
      id: 2,
      name: "Antony Paul",
      role: "Treasurer",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      phone: "9876500002",
      address: "Kaloor, Kochi",
    },
    {
      id: 3,
      name: "Maria Joseph",
      role: "Joint Secretary",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      phone: "9876500003",
      address: "Edappally, Kochi",
    },
    {
      id: 4,
      name: "Sebastian John",
      role: "Committee Member",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      phone: "9876500004",
      address: "Aluva, Kochi",
    },
    {
      id: 5,
      name: "Anita Thomas",
      role: "Committee Member",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      phone: "9876500005",
      address: "Vyttila, Kochi",
    },
    {
      id: 6,
      name: "George Varghese",
      role: "Committee Member",
      image: "https://randomuser.me/api/portraits/men/78.jpg",
      phone: "9876500006",
      address: "Thrippunithura, Kochi",
    },
    {
      id: 7,
      name: "Rani Paul",
      role: "Committee Member",
      image: "https://randomuser.me/api/portraits/women/41.jpg",
      phone: "9876500007",
      address: "Kadavanthra, Kochi",
    },
    {
      id: 8,
      name: "Thomas Abraham",
      role: "Committee Member",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      phone: "9876500008",
      address: "Kakkanad, Kochi",
    },
    {
      id: 9,
      name: "Sneha Mathew",
      role: "Committee Member",
      image: "https://randomuser.me/api/portraits/women/55.jpg",
      phone: "9876500009",
      address: "Fort Kochi",
    },
    {
      id: 10,
      name: "Paul Simon",
      role: "Committee Member",
      image: "https://randomuser.me/api/portraits/men/88.jpg",
      phone: "9876500010",
      address: "Mattancherry, Kochi",
    },
  ],
};

const ServiceMembers = () => {
  return (
    <div className="min-h-screen px-4 w-full">
      {/* ===== Header & Search ===== */}
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
              placeholder="Search members"
            />
          </div>
        </div>
      </div>

      <div className="">
        {/* ===== Header Icon & Title ===== */}
        <div className="flex items-center gap-4 mb-10">
          <div
            className="w-14 h-14 flex items-center justify-center rounded-full md:bg-[rgba(132,42,76,0.1)]"
           
          >
            <FaPerson className="text-2xl text-[#842a4c]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#842a4c]">
              Committee Members
            </h1>
          </div>
        </div>

        {/* ===== LEADERS SECTION ===== */}
        <div className="mb-10">
          <div className="grid gird-colos-1 sm:grid-cols-2 lg:grid-cols-3  gap-2 md:gap-4">
            {data.leaders.map((person) => (
              <div
                key={person.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-row md:flex-row items-center gap-4"
              >
                {/* Image */}
                <div className="relative overflow-hidden border-2 border-[#842a4c] p-1 rounded-full w-32 h-32 md:w-32 md:h-32 flex-shrink-0">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col items-center">
                  <h3 className="text-lg md:text-2xl font-semibold text-[#842a4c]">
                    {person.name}
                  </h3>
                  <p className="text-[#842a4c] text-xs md:text-sm font-bold bg-[rgba(132,42,76,0.1)] inline-block px-3 py-1 mt-2 rounded-lg">
                    {person.role}
                  </p>

                  <div className="flex items-center gap-1 mt-2 text-gray-600">
                    <FaPhone className="text-green-500 text-[12px]" />
                    <span className="text-sm font-medium">{person.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== MEMBERS SECTION ===== */}
        <div>
          <h2 className="text-xl font-semibold text-[#842a4c] mb-4 border-l-4 border-[#842a4c] pl-3">
            Members
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.members.map((person) => (
              <div
                key={person.id}
                className="shadow-md border-2 border-[#842a4c]/20 p-4 rounded-lg flex flex-row items-center gap-4 bg-white hover:shadow-lg transition"
              >
                {/* Image */}
                <div className="relative overflow-hidden border-2 border-[#842a4c] p-1 rounded-full w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{person.name}</h3>
                  {/* <span className="text-xs font-semibold bg-[rgba(132,42,76,0.1)] text-[#842a4c] px-2 py-1 rounded-full">
                    {person.role}
                  </span> */}

                  <div className="flex items-center gap-2 mt-1 text-[#842a4c]">
                    <FaPhone className="text-green-500 text-sm" />
                    <span className="text-sm">{person.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceMembers;
