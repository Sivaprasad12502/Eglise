import React from "react";
import Back from "../../components/back/Back";
import { FiCalendar, FiInfo, FiMapPin, FiSend } from "react-icons/fi";
import {
  FaCalendarAlt,
  FaGlassCheers,
  FaUser,
  FaUserFriends,
} from "react-icons/fa";
import {
  FaCakeCandles,
  FaPeopleGroup,
  FaPerson,
  FaUsers,
} from "react-icons/fa6";
import { GiFamilyHouse, GiFamilyTree } from "react-icons/gi";
import { CalendarToday, CelebrationOutlined, EventNote, FamilyRestroom, LocationOn, People, Person, Send } from "@mui/icons-material";

const EventForm = () => {
  return (
    <div className="min-h-screen px-4 py-5 w-full">
      <Back />
      <div className="max-w-4xl mx-auto">
        {/* ===== Header ===== */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#842a4c]">
            Event Registration
          </h1>
          <div
            className="h-1 w-24 mt-2 rounded"
            style={{ backgroundColor: "#af1f53" }}
          />
          <p className="text-gray-600 mt-3 max-w-2xl">
            Please fill in the details below to register for the parish event.
          </p>
        </div>

        {/* ===== Form Card ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <form className="space-y-8">
            {/* ===== Event Details ===== */}
            <section>
              <h2 className="flex items-center gap-2 text-lg font-semibold text-[#842a4c] mb-4">
                <EventNote className="text-orange-500" /> Event Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Event Type"
                  placeholder="e.g., Baptism, Wedding"
                  icon={<CelebrationOutlined />}
                />
                <Input
                  label="Event Location"
                  placeholder="Enter event location"
                  icon={<LocationOn/>}
                />
                <Input label="Event Date" type="date" icon={<CalendarToday />} />
              </div>
            </section>

            {/* ===== Family Details ===== */}
            <section>
              <h2 className="text-lg font-semibold text-[#842a4c] mb-4">
                Family Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Family Name"
                  placeholder="Enter family name"
                  icon={<FamilyRestroom/>}
                />
                <Input
                  label="Main Member"
                  placeholder="Enter main member name"
                  icon={<Person />}
                />
                <Input
                  label=" Member(s)"
                  type="text"
                  placeholder="Enter additional member names"
                  icon={<People />}
                />
                {/* <Input
                  label="Additional Member Names"
                  placeholder="Optional"
                /> */}
              </div>
            </section>
            <div className="flex gap-2 border border-primary p-3 rounded-lg bg-bglight">
              <span className="text-primary">
                <FiInfo/>
              </span>
              <p className="text-sm font-light">
                Your event request will be reviewed by the parish office. You will
                be contacted for confirmation and further details.
              </p>
            </div>

            {/* ===== Submit ===== */}
            <div className="pt-6 border-t flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 px-10 py-3 rounded-lg text-white font-medium transition"
                style={{
                  background: "linear-gradient(135deg, #842a4c, #af1f53)",
                }}
              >  <Send className=" size-5 text-white"/>
                Submit Registration
              </button>
            </div>
          </form>
        </div>

        {/* ===== Footer Note ===== */}
        <p className="text-sm text-gray-500 mt-6">
          * Please ensure all details are correct before submission.
        </p>
      </div>
    </div>
  );
};

/* ===== Reusable Input Component ===== */
const Input = ({ label, type = "text", placeholder, icon }) => (
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">
      {label}
    </label>
    <div className="relative">
      <div className="pointer-events-none text-orange-500 absolute left-3 top-1/2 transform -translate-y-1/2">
        {icon}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="
        w-full px-4 pl-12 py-3 rounded-lg border border-gray-300
        focus:outline-none focus:border-[#842a4c]
        bg-white
         [&::-webkit-calendar-picker-indicator]:opacity-0
+   [&::-webkit-calendar-picker-indicator]:absolute
+   [&::-webkit-calendar-picker-indicator]:right-0
+   [&::-webkit-calendar-picker-indicator]:w-full
+   [&::-webkit-calendar-picker-indicator]:h-full
+   [&::-webkit-calendar-picker-indicator]:cursor-pointer
      "
      />
    </div>
  </div>
);

export default EventForm;
