import React from "react";
import { useParams } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaChurch,
  FaHandsHelping,
  FaBible,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import Back from "../../components/back/Back";

const serviceData = [
  {
    id: 1,

    title: "Parish sushrushtha Sangam",

    about:
      "He works closely with parish members to strengthen faith-based initiatives, promote unity, and encourage active participation in church lifeHe works closely with parish members to strengthen faith-based initiatives, promote unity, and encourage active participation in church life",
    image:
      "https://www.shutterstock.com/image-photo/young-nun-christian-cross-bible-260nw-2250399535.jpg",
    name: "MR. Thomas Varghese",
    role: "coordinator",
    phone: "9843893840",
  },
  {
    id: 2,

    title: "Parish sushrushtha Sangam",

    about:
      "He works closely with parish members to strengthen faith-based initiatives, promote unity, and encourage active participation in church lifeHe works closely with parish members to strengthen faith-based initiatives, promote unity, and encourage active participation in church life",
    image:
      "https://www.shutterstock.com/image-photo/young-nun-christian-cross-bible-260nw-2250399535.jpg",
    name: "MR. Thomas Varghese",
    role: "coordinator",
    phone: "9843893840",
  },
];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceData.find((item) => item.id === Number(id));

  if (!service) {
    return (
      <div className="p-6 text-center text-gray-500">Service not found</div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-5" >
      <Back/>
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Header Section */}
        <div className="bg-gradient-to-br from-[#842a4c] via-[#a8295d] to-[#842a4c] rounded-3xl shadow-xl overflow-hidden mb-8">
          <div className="p-4 md:p-12">
            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {service.title}
              </h1>
              <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
            </div>

            {/* Icons Row */}
            <div className="flex items-center justify-center gap-6 md:gap-12">
              {/* Church Icon */}
              <div className="bg-white/20 backdrop-blur-sm p-4 md:p-6 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <FaChurch className=" text-2xl sm:text-4xl md:text-6xl text-white" />
              </div>

              {/* Center Image */}
              <div className="relative">
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-white/30 overflow-hidden shadow-2xl">
                  <img
                    src="https://cbx-prod.b-cdn.net/COLOURBOX63463006.jpg?width=800&height=800&quality=70"
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white text-[#842a4c] rounded-full p-2 shadow-lg">
                  <FaHandsHelping className="text-xl md:text-2xl" />
                </div>
              </div>

              {/* Bible Icon */}
              <div className="bg-white/20 backdrop-blur-sm p-4 md:p-6 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <FaBible className="text-2xl sm:text-4xl md:text-6xl text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* About Section - Left Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 md:p-8">
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[rgba(132,42,76,0.1)]">
                  <FaInfoCircle className="text-xl text-[#842a4c]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#842a4c]">
                    About 
                  </h2>
                  <div className="w-16 h-1 bg-[#842a4c] rounded-full mt-1"></div>
                </div>
              </div>

              {/* About Content */}
              <div className="bg-[rgba(132,42,76,0.05)] border-l-4 border-[#842a4c] rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed text-base">
                  {service.about}
                </p>
              </div>

              {/* Additional Info Cards */}
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-4 border border-blue-200">
                  <div className="flex items-center gap-3 mb-2">
                    <FaHandsHelping className="text-blue-600 text-xl" />
                    <h3 className="font-semibold text-gray-800">Our Mission</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Serving the parish community with faith and dedication
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-4 border border-purple-200">
                  <div className="flex items-center gap-3 mb-2">
                    <FaChurch className="text-purple-600 text-xl" />
                    <h3 className="font-semibold text-gray-800">Community</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Building stronger connections through service
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Coordinator Section - Right Column */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 sticky top-20">
              {/* Coordinator Header */}
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-[#842a4c] mb-1">
                  Service Coordinator
                </h3>
                <div className="w-16 h-1 bg-[#842a4c] rounded-full mx-auto"></div>
              </div>

              {/* Coordinator Card */}
              <div className="flex flex-col items-center">
                {/* Image */}
                <div className="relative mb-4">
                  <div className="w-28 h-28 rounded-full border-4 border-[#842a4c] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-[#842a4c] text-white rounded-full p-2 shadow-lg">
                    <FaUser className="text-sm" />
                  </div>
                </div>

                {/* Name & Role */}
                <h4 className="text-xl font-bold text-gray-800 text-center mb-2">
                  {service.name}
                </h4>
                <span className="inline-block bg-[#842a4c] text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                  {service.role}
                </span>

                {/* Contact */}
                <div className="w-full bg-[rgba(132,42,76,0.05)] rounded-xl p-4 border border-[#842a4c]/20">
                  <div className="flex items-center justify-center gap-2 text-gray-700">
                    <div className="bg-green-100 p-2 rounded-full">
                      <FaPhone className="text-green-600 text-sm" />
                    </div>
                    <span className="font-semibold">{service.phone}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mt-6 bg-gradient-to-br from-[rgba(132,42,76,0.05)] to-[rgba(132,42,76,0.1)] rounded-xl p-4 border border-[#842a4c]/10">
                <div className="flex items-start gap-3">
                  <FaInfoCircle className="text-[#842a4c] text-lg mt-1 flex-shrink-0" />
                  <div>
                    {/* <h5 className="font-bold text-gray-800 mb-1">Responsibilities</h5> */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Coordinates volunteers and oversees service activities to ensure smooth operations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
