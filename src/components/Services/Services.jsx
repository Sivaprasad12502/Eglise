import { Favorite, FlashAuto, FlashOn, MenuBook, School, Woman } from "@mui/icons-material";
import React from "react";
import {
  FaUsers,
  FaCalendarAlt,
  FaPrayingHands,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaFemale,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    id: "1",
    icon: <FaUsers />,
    bg: "bg-gradient-to-br from-[#8b2f4f] to-[#6b1f3f]",
    title: "Committee",
    subtitle: "Serve together in leadership",
    to: "/service-members/3",
  },
  {
    id: "2",
    icon: <Favorite/>,
    bg: "bg-gradient-to-br from-indigo-700 to-indigo-900",
    title: "Susrushitha Sangam",
    subtitle: "Ministry of compassion",
    to: "/service-detail/2",
  },
  {
    id: "3",
    icon: <FlashOn/>,
    bg: "bg-gradient-to-br from-rose-700 to-rose-900",
    title: "Youth",
    subtitle: "Building tomorrow's faith",
    to: "/service-detail/2",
  },
  {
    id: "4",
    icon: < School/>,
    bg: "bg-gradient-to-br from-amber-700 to-amber-900",
    title: "Sunday School",
    subtitle: "Growing in faith together",
    to: "/service-detail/2",
  },
  {
    id: "5",
    icon: <MenuBook />,
    bg: "bg-gradient-to-br from-teal-700 to-teal-900",
    title: "MGOCSM",
    subtitle: "Students in Christ",
    to: "/service-detail/2",
  },
  {
    id: "6",
    icon: <Woman />,
    bg: "bg-gradient-to-br from-pink-700 to-pink-900",
    title: "Martha Mariyam",
    subtitle: "Women of faith and service",
    to: "/service-detail/2",
  },
];

const Services = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-3"></div>
          <p className="text-gray-600 text-base md:text-lg font-light">
            Find the right experience for you
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.to}
              className="group focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-4  transition-all"
            >
              <div
                className="relative h-full bg-white  border border-gray-100
                           overflow-hidden transition-all duration-300 ease-out
                           hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 
                           active:scale-98 cursor-pointer min-h-[200px] md:min-h-[240px]"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0  opacity-10 
                              transition-opacity duration-300 group-hover:opacity-20`}
                ></div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col items-center justify-center p-6 md:p-8 h-full">
                  {/* Icon Container */}
                  <div
                    className={`mb-4 md:mb-5 p-4 md:p-5 rounded-full bg-white shadow-md
                                transition-all duration-300 
                                group-hover:shadow-xl group-hover:scale-110`}
                  >
                    {React.cloneElement(service.icon, {
                      className: `text-3xl md:text-4xl text-primary`,
                      // style: {
                      //   background: service.bg.replace('bg-gradient-to-br', 'linear-gradient(to bottom right,'),
                      //   backgroundClip: 'text',
                      //   WebkitBackgroundClip: 'text',
                      //   WebkitTextFillColor: 'transparent',
                      // },
                    })}
                  </div>

                  {/* Service Title */}
                  <h3
                    className="font-serif font-bold text-base md:text-xl text-primary text-center mb-2 leading-tight
                               transition-colors duration-300 group-hover:text-secondary"
                  >
                    {service.title}
                  </h3>

                  {/* Service Subtitle */}
                  <p
                    className="text-xs md:text-sm text-gray-600 text-center leading-relaxed font-light"
                  >
                    {service.subtitle}
                  </p>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/30 to-transparent 
                               rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
