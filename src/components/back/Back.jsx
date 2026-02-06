import React from "react";
import { FaChevronLeft } from "react-icons/fa";

const Back = () => {
  return (
    <div >
      <button
        onClick={() => window.history.back()}
        className="p-2 rounded-full bg-bglight mb-5"
      >
        <FaChevronLeft className="size-6 fill-primary" />
      </button>
    </div>
  );
};

export default Back;
