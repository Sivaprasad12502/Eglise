import React from "react";
import {
  FaCalendar,
  FaClock,
  FaMapMarkerAlt,
  FaChurch,
  FaAccessibleIcon,
} from "react-icons/fa";
import { FiBell } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative h-[60vh] md:h-[75vh] lg:h-[85vh] w-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 transform scale-105 transition-transform duration-700 hover:scale-110">
        {/* <img
          className="absolute inset-0 w-full h-full object-fill rounded-b-3xl md:rounded-b-[3rem]"
          src="https://images.pexels.com/photos/29771109/pexels-photo-29771109/free-photo-of-stunning-view-of-velankanni-church-facade.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200"
          alt="church"
        /> */}
        <img
          className="absolute inset-0 w-full h-full object-fill rounded-b-3xl md:rounded-b-[3rem]"
          src="./bg.jpg.jpeg"
          alt="church"
        />
      </div>
      {/* <div className="absolute right-0 flex items-center justify-center w-10 h-10 rounded-full bg-base shadow-md cursor-pointer hover:bg-primary/10 transition">
        <FiBell className="text-xl text-primary" />
      </div> */}

      {/* Gradient Overlay - Multiple layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 rounded-b-3xl md:rounded-b-[3rem]" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-b-3xl md:rounded-b-[3rem]" />

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-75" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-end h-full px-4 md:px-8 lg:px-16 py-8 md:py-12">
        {/* Top Section - Optional Icon/Logo */}
        {/* <div className="flex justify-center md:justify-start">
          <div className="bg-primary/50 backdrop-blur-md p-3 rounded-full border border-white/20 shadow-xl animate-fade-in">
            <FaChurch className="text-white text-2xl md:text-3xl" />
          </div>
        </div> */}

        {/* Main Content */}
        <div className="space-y-6 md:space-y-8 animate-slide-up">
          {/* Welcome Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-primary/10  px-4 py-2 rounded-full border-2 border-primary shadow-lg">
            
            <span className="text-xs md:text-sm text-white font-medium tracking-wide">
              Welcome to Our Community
            </span>
          </div> */}

          {/* Main Heading */}
          <div className="space-y-2 md:space-y-3">
            <p className="text-base text-md md:text-xl lg:text-2xl font-bold">Welcome to</p>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl text-white leading-tight drop-shadow-2xl">
              St. Mary&apos;s Parish
            </h1>
            {/* <p className="text-base md:text-lg lg:text-xl text-white/90 font-light max-w-2xl drop-shadow-lg">
              A place of faith, hope, and community where all are welcome
            </p> */}
          </div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl">
            {/* Mass Times Card */}
            {/* <div className="bg-white/10 backdrop-blur-md p-4 md:p-5 rounded-2xl border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-start gap-3">
                <div className="bg-blue-500/20 p-2.5 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <FaClock className="text-blue-300 text-lg" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm md:text-base mb-1">
                    Mass Times
                  </h3>
                  <p className="text-white/80 text-xs md:text-sm">
                    Sunday: 8:00 AM, 10:30 AM
                  </p>
                  <p className="text-white/80 text-xs md:text-sm">
                    Weekdays: 6:30 AM
                  </p>
                </div>
              </div>
            </div> */}

            {/* Location Card */}
            {/* <div className="bg-white/10 backdrop-blur-md p-4 md:p-5 rounded-2xl border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-start gap-3">
                <div className="bg-purple-500/20 p-2.5 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                  <FaMapMarkerAlt className="text-purple-300 text-lg" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm md:text-base mb-1">
                    Location
                  </h3>
                  <p className="text-white/80 text-xs md:text-sm">
                    123 Church Street
                  </p>
                  <p className="text-white/80 text-xs md:text-sm">
                    City, State 12345
                  </p>
                </div>
              </div>
            </div> */}

            {/* Upcoming Events Card */}
            {/* <div className="bg-white/10 backdrop-blur-md p-4 md:p-5 rounded-2xl border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group sm:col-span-2 lg:col-span-1">
              <div className="flex items-start gap-3">
                <div className="bg-amber-500/20 p-2.5 rounded-lg group-hover:bg-amber-500/30 transition-colors">
                  <FaCalendar className="text-amber-300 text-lg" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm md:text-base mb-1">
                    Next Event
                  </h3>
                  <p className="text-white/80 text-xs md:text-sm">
                    Youth Fellowship
                  </p>
                  <p className="text-white/80 text-xs md:text-sm">
                    Friday, 7:00 PM
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
            <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-white text-gray-900 font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10">Join Us This Sunday</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 hidden group-hover:inline-block text-white transition-all">
                Join Us This Sunday
              </span>
            </button>
            <button className="px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 shadow-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div> */}
        </div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
    </div>
  );
};

export default Hero;
