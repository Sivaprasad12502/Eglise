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
    <div className="min-h-screen w-full  py-8 px-4 sm:px-6  ">
      <Back />
      <div className=" mx-auto">
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

                {family.HeadOfFamily.map((head, index) => (
                  <div key={index} className="max-w-3xl mx-auto">
                    <div className="bg-primary rounded-2xl p-6 sm:p-8 shadow-lg border border-orange-100">
                      <div className="flex flex-col sm:flex-row items-center gap-8">
                        {/* Profile Image with decorative elements */}
                        <div className="flex-shrink-0 relative">
                          <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                          <div className="relative">
                            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden ring-4 ring-orange-500 shadow-2xl border-4 border-white">
                              <img
                                src={
                                  head.image ||
                                  "https://randomuser.me/api/portraits/men/75.jpg"
                                }
                                alt={head.name}
                                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                              />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white p-2 rounded-full shadow-lg">
                              <FaStar className="text-lg" />
                            </div>
                          </div>
                        </div>

                        {/* Information with enhanced styling */}
                        <div className="flex-1 w-full space-y-5">
                          <div className="text-center sm:text-left">
                            <h3 className="text-3xl sm:text-4xl font-bold text-white bg-clip-text mb-2">
                              {head.name}
                            </h3>
                            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full mx-auto sm:mx-0"></div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-300">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-orange-100 to-rose-100 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                  <FaBirthdayCake className="text-orange-500 text-xl" />
                                </div>
                                <div className="text-left">
                                  <p className="text-xs text-gray-500 font-medium mb-1">
                                    Age
                                  </p>
                                  <p className="text-lg font-bold text-primary">
                                    {head.age} Years Old
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-300">
                              <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                  <FaPhone className="text-green-500 text-xl" />
                                </div>
                                <div className="text-left">
                                  <p className="text-xs text-gray-500 font-medium mb-1">
                                    Contact
                                  </p>
                                  <p className="text-lg font-bold text-primary">
                                    {head.phone}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Family Members Section */}
              <div className="bg-base rounded-2xl  sm:p-8  ">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    Family Members
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[300px,300px] justify-center gap-6">
                  {family.famileMembers.map((member) => (
                    <div
                      key={member.id}
                      className="relative shadow-md border-2 border-[#842a4c]/20 p-5 rounded-lg bg-white hover:shadow-lg transition flex flex-col "
                    >
                      {/* Relation badge - TOP RIGHT */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-rose-100 text-orange-500 font-semibold text-sm px-3 py-1 rounded-full">
                          {member.realation}
                        </span>
                      </div>

                      {/* Image */}
                      <div className="flex justify-center mt-2">
                        <div className="w-28 h-28 rounded-full overflow-hidden ring-2 ring-[#842a4c] shadow-lg">
                          <img
                            src={
                              member.image ||
                              `https://randomuser.me/api/portraits/${
                                member.gender === "Female" ? "women" : "men"
                              }/44.jpg`
                            }
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Name */}
                      <h3 className="text-xl font-bold text-gray-800 text-center mt-4">
                        {member.name}
                      </h3>

                      {/* Details */}
                      <div className="mt-4 flex flex-col gap-2 items-center text-sm">
                        <div className="flex items-center gap-2">
                          <FaBirthdayCake className="text-primary" />
                          <span className="font-semibold text-primary">
                            {member.age} Years Old
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {member.gender === "Female" ? (
                            <FaFemale />
                          ) : (
                            <FaMale />
                          )}
                          <span className="font-semibold text-primary">
                            {member.gender}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 col-span-2 justify-center">
                          <FaPhone className="text-green-600" />
                          <span className="font-semibold text-primary">
                            {member.phone}
                          </span>
                        </div>
                      </div>
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
