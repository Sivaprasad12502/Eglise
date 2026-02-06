import React from "react";
import {
  FaUserCircle,
  FaCalendarAlt,
  FaCertificate,
  FaTasks,
  FaAward,
  FaUsers,
} from "react-icons/fa";
import { FiAward, FiFileText } from "react-icons/fi";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { EventNote, Groups, WorkspacePremium } from "@mui/icons-material";

const quickAccess = [
{
  id: 1,
  icon: PersonIcon,
  label: "Accounts",
  color: "text-yellow-500",
  border: "border-yellow-500",
  gradient: "bg-gradient-to-br from-yellow-500/10 to-yellow-500/5",
},
{
  id: 2,
  icon: WorkspacePremium,
  label: "Certificate Downloads",
  color: "text-primary",
  border: "border-primary",
  gradient: "bg-gradient-to-br from-primary/10 to-primary/5",
  to: "/certificates",
},
{
  id: 3,
  icon: EventNote,
  label: "Event Request",
  color: "text-blue-700",
  border: "border-blue-700",
  gradient: "bg-gradient-to-br from-blue-700/10 to-blue-700/5",
  to: "/event-form",
},
{
  id: 4,
  icon: Groups,
  label: "Activities",
  color: "text-green-500",
  border: "border-green-500",
  gradient: "bg-gradient-to-br from-green-500/10 to-green-500/5",
  to: "/activities",
},

];

const QuickAccess = () => {
  return (
    <div className="container mx-auto px-4 mt-[64px]">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
          Quick Access
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto"></div>
      </div>

      <div className="grid grid-cols-4 gap-2 md:gap-6 max-w-6xl mx-auto">
        {quickAccess.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              to={item.to}
              key={item.id}
              className="group focus:outline-none focus-visible:outline-none  rounded-2xl transition-all"
            >
              <div
                className={`relative h-full bg-white rounded-2xl border  ${item.border}
                           overflow-hidden transition-all duration-300 ease-out
                           hover:shadow-2xl hover:shadow-primary/20  
                          
          `}
              >
                <div
                  className={`absolute inset-0 ${item.gradient} opacity-100 
                                transition-opacity duration-300 group-hover:opacity-70 border-2 `}
                                
                ></div>
                <div
                  className="relative z-10 flex flex-col items-center justify-center p-3 text-center "
                
                >
                 <div className={`mb-2 md:mb-5  p-2 md:p-5 rounded-full bg-white shadow-md
                                  transition-all duration-300 
                                  group-hover:shadow-xl group-hover:scale-110
                                  ${item.color}`}>
                    <Icon 
                      className="text-4xl" 
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-sm md:text-xl font-serif font-semibold text-primary  
                                 transition-colors duration-300 group-hover:text-secondary">
                    {item.label}
                  </h3>
                </div>

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/30 to-transparent 
                               rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickAccess;
