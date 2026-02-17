import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";

import Directory from "./pages/Directory/Directory";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Donate from "./pages/Donate/Donate";
import Login from "./pages/Login/Login";
import Prayer from "./pages/Prayer/Prayer";
import Events from "./pages/Events/Events";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import ServiceMembers from "./pages/ServiceMembers/ServiceMembers";
import Family from "./pages/Family/Family";
import FamilyDetails from "./pages/FamilyDetails/FamilyDetails";
import Certficates from "./pages/Certificates/Certficates";
import Activities from "./pages/Activities/Activities";
import EventForm from "./pages/EventForm/EventForm";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(true)
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn}><Layout /></ProtectedRoute>}>
          <Route path="/" element={<Home />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/donate" element={<Donate/>} />
          <Route path="/prayer" element={<Prayer/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/certificates" element={<Certficates/>} />
          <Route path="/activities" element={<Activities/>} />
          <Route path="/event-form" element={<EventForm/>} />
          <Route path="/service-detail/:id" element={<ServiceDetail/>} />
          <Route path="/service-members/:id" element={<ServiceMembers/>} />
          <Route path="/family/:wardId" element={<Family/>} />
          <Route path="/family-details/:familyId" element={<FamilyDetails/>} />
        </Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
      </Routes>
    </>
  );
}

export default App;
