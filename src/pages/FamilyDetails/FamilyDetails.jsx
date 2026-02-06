import React from "react";
import {
  FaHome,
  FaPhone,
  FaUsers,
  FaMapMarkerAlt,
  FaUserTie,
  FaUser,
  FaBirthdayCake,
  FaVenusMars,
  FaHeart,
  FaEnvelope,
  FaStar,
  FaFemale,
  FaMale,
} from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import Back from "../../components/back/Back";

const familyDetails = [
  {
    id: 1,
    familyImage:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zX3Bob3RvX29mX2luZGlhbl9taWRkbGVfYWdlX3BhcmVudHNfYW5kX2NoaWxkcl9hYWNiZjQ5MS04YTQ0LTQyYWYtODc3Yi00ZjZmMTQ0NTRlMDgucG5n.png",
    familInformation: [
      {
        familyName: "Puthenveettil",
        address: "Palarivattom, Kochi",
        totalMembers: 3,
      },
    ],
    HeadOfFamily: [
      {
        name: "Joseph",
        age: 40,
        phone: " 9876543210",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
      },
    ],
    famileMembers: [
      {
        id: 1,
        name: "Mary",
        age: 37,
        realation: "Wife",
        phone: "9876543210",
        gender: "Female",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
      },
      {
        id: 2,
        name: "Sarah",
        age: 12,
        realation: "Daughter",
        phone: "9876543211",
        gender: "Female",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
    ],
  },
];

const FamilyDetails = () => {
  return (
    <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8 ">
      <Back/>
      <div className="max-w-6xl mx-auto">
        {familyDetails.map((family) => (
          <div
            key={family.id}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl"
          >
            {/* Hero Section with Family Image */}
            <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
              <img
                src={family.familyImage}
                alt="Family Portrait"
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
              />
              {/* <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <MdFamilyRestroom className="text-white text-4xl sm:text-5xl drop-shadow-lg" />
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                    {family.familInformation[0].familyName} Family
                  </h1>
                </div>
                <p className="text-white/90 text-sm sm:text-base drop-shadow-md">
                  Welcome to our family profile
                </p>
              </div> */}
            </div>

            <div className="p-4 sm:p-8 lg:p-10 space-y-8">
              {/* Family Information Card */}
              <div className="    ">
                <div className="flex items-center gap-3 mb-6">
                  {/* <div className="bg-indigo-600 p-3 rounded-xl shadow-md">
                    <FaHome className="text-white text-2xl" />
                  </div> */}
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                    Family Information
                  </h2>
                </div>

                {family.familInformation.map((info, index) => (
                  <div key={index} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      <div className="bg-white rounded-md p-1 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="bg-indigo-100 p-2 rounded-lg flex itec justify-center">
                            <FaHome className="text-primary text-xl" />
                          </div>
                          <div>
                            <span className="text-gray-500 text-sm font-medium">
                              Family Name
                            </span>
                            <p className="text-lg font-bold text-gray-800 ">
                              {info.familyName}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-md p-1 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="bg-green-100 p-2 rounded-lg">
                            <FaMapMarkerAlt className="text-orange-500 text-xl" />
                          </div>
                          <div>
                            <span className="text-gray-500 text-sm font-medium">
                              Address
                            </span>
                            <p className="text-lg font-bold text-gray-800 ">
                              {info.address}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-md p-1 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="bg-purple-100 p-2 rounded-lg">
                            <FaUsers className="text-green-500 text-xl" />
                          </div>
                          <div>
                            <span className="text-gray-500 text-sm font-medium">
                              Total Members
                            </span>
                            <p className="text-lg font-bold text-gray-800 ">
                              {info.totalMembers} 
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Head of Family Card */}
              <div className=" p-4 sm:p-8 border rounded-lg md:grid md:place-items-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl ">
                    <FaStar className="text-orange-500 text-2xl" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                    Head of Family
                  </h2>
                </div>

                {family.HeadOfFamily.map((head, index) => (
                  <div key={index} className="">
                    <div className="flex flex-col sm:flex-row items-center  gap-6">
                      {/* Profile Image */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-orange-500 shadow-xl">
                            <img
                              src={
                                head.image ||
                                "https://randomuser.me/api/portraits/men/75.jpg"
                              }
                              alt={head.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Information */}
                      <div className="flex-1 w-full space-y-4">
                        <div className="text-left">
                          <h3 className="text-2xl text-center sm:text-3xl font-bold text-primary mb-1 underline decoration-primary underline-offset-4">
                            {head.name}
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 gap-1 text-center ">
                          <div className="  inline-flex items-center justify-center gap-3  p-2 ">
                            <div className="">
                              <FaBirthdayCake className=" text-lg" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-primary">
                                {head.age} Years old
                              </p>
                            </div>
                          </div>

                          <div className="  inline-flex items-center justify-center gap-3  p-2">
                            <div className="">
                              <FaPhone className="text-green-500 text-lg" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-primary">
                                {head.phone}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Family Members Section */}
              <div className="bg-base rounded-2xl p-6 sm:p-8  ">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    Family Members
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {family.famileMembers.map((member) => (
                    <div
                      key={member.id}
                      className=" shadow-md border-2 border-[#842a4c]/20 p-4 rounded-lg flex flex-col sm:flex-row items-center gap-4 bg-white hover:shadow-lg transition "
                    >
                      {/* Member Image */}
                      <div className="flex justify-center mb-4">
                        <div className="relative">
                          <div className="w-28 h-28 rounded-full overflow-hidden ring-2 ring-[#842a4c] shadow-lg">
                            <img
                              src={
                                member.image ||
                                `https://randomuser.me/api/portraits/${member.gender === "Female" ? "women" : "men"}/44.jpg`
                              }
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Member Info */}
                      <div className="text-center flex flex-col ">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          {member.name}
                        </h3>
                        <div className="inline-flex items-center gap-2 bg-rose-100 px-3 py-1 rounded-full w-min">
                          {/* <FaHeart className="text-rose-600 text-sm" /> */}
                          <span className="text-orange-500 font-semibold text-sm">
                            {member.realation}
                          </span>
                        </div>
                        <div className=" flex flex-wrap gap-2 mt-2 justify-center">
                          <div className="flex items-center gap-1    p-1   rounded-md">
                            <FaBirthdayCake className=" text-sm" />

                            <div className="">
                              <p className="text-sm font-bold text-primary">
                                {member.age} Years old
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-1   rounded-md p-1">
                           {
                            member.gender=="Female" ? <FaFemale/> : <FaMale/>
                           }

                            <div className="">
                              <p className="text-sm font-bold text-primary">
                                {member.gender}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-1    rounded-md p-1">
                            <FaPhone className="text-green-600 text-sm" />

                            <div className="">
                              <p className="text-sm font-bold text-primary">
                                {member.phone}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Member Details */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamilyDetails;
