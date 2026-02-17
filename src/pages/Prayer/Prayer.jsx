import React from "react";
import { FaPrayingHands, FaUser } from "react-icons/fa";
import Back from "../../components/back/Back";
import { FaPerson } from "react-icons/fa6";
import {
  FiHeart,
  FiInfo,
  FiMapPin,
  FiSend,
  FiShare,
  FiUser,
} from "react-icons/fi";
import {
  FavoriteBorder,
  InfoOutlined,
  LocationOnOutlined,
  PersonOutline,
  Send,
} from "@mui/icons-material";

const Prayer = () => {
  return (
    <div className="min-h-screen px-4 py-5 flex flex-col justify-center w-full">
      <Back />
      <div className="w-full ">
        {/* ===== Header ===== */}
        <div className="text-center mb-10">
          <div
            className="w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4"
            style={{ backgroundColor: "rgba(132, 42, 76, 0.1)" }}
          >
            <FaPrayingHands className="text-3xl text-[#842a4c]" />
          </div>

          <h1 className="text-3xl font-bold text-[#842a4c]">Prayer Request</h1>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Share your prayer intentions with us. Your requests will be
            remembered in our prayers.
          </p>
        </div>

        {/* ===== Form Card ===== */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-4xl mx-auto">
          <form className="space-y-6">
            {/* Name */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                Your Name
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <PersonOutline
                    className={`w-5 h-5 transition-colors text-orange-500 hover:text-primary `}
                  />
                </div>
                <input
                  type="text"
                  name="username"
                  className={`w-full pl-12 pr-4 py-3.5 rounded-xl border transition-all duration-300 outline-none focus:border-primary `}
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                Your Address
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <LocationOnOutlined
                    className={`w-5 h-5 transition-colors text-orange-500 hover:text-primary `}
                  />
                </div>
                <input
                  type="text"
                  name="address"
                  className={`w-full pl-12 pr-4 py-3.5 rounded-xl border transition-all duration-300 outline-none focus:border-primary `}
                  placeholder="Enter your address"
                  required
                />
              </div>
            </div>

            {/* Prayer Type */}
            {/* <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Prayer Request For
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#842a4c]"
              >
                <option value="">Select a prayer intention</option>
                <option>Health & Healing</option>
                <option>Family & Marriage</option>
                <option>Education & Exams</option>
                <option>Employment & Career</option>
                <option>Peace & Guidance</option>
                <option>Thanksgiving</option>
                <option>Others</option>
              </select>
            </div> */}

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Prayer Intention
              </label>
              <div className="relative">
                <div className="absolute left-4 top-6 -translate-y-1/2 text-gray-400">
                  <FavoriteBorder
                    className={`w-5 h-5 transition-colors text-orange-500 hover:text-primary `}
                  />
                </div>
                <textarea
                  rows="4"
                  placeholder="Write your prayer intention..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#842a4c]"
                />
              </div>
            </div>
            <div className="flex gap-2 border border-primary p-3 rounded-lg bg-bglight">
              <span className="text-primary">
                <InfoOutlined />
              </span>
              <p className="text-sm font-light">
                Your Prayer request will be shared with our parish community. We
                respect your privacy and handle all request with care.
              </p>
            </div>

            {/* Submit */}
            <div className="text-center flex justify-center pt-4">
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-3 rounded-lg text-white font-medium transition"
                style={{
                  background: "linear-gradient(135deg, #842a4c, #af1f53)",
                }}
              >
                <Send className=" size-5 text-white" />
                Submit Prayer Request
              </button>
            </div>
          </form>
        </div>

        {/* ===== Footer Note ===== */}
        {/* <p className="text-center text-sm text-gray-500 mt-6">
          All prayer requests are kept confidential and handled with care.
        </p> */}
      </div>
    </div>
  );
};

export default Prayer;
