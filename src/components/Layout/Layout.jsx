import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Back from "../back/Back";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="relative container mx-auto  mt-[64px] flex flex-col items-center justify-center scrollbar-hide">
        
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
