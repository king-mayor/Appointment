import React from "react";
import Appointment from "./Appointment";
import DoctorProfiles from "./DoctorProfiles";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import Speciality from "./Speciality";

const Home = () => {
  return (
    <div className="overflow-x-hidden font-fredoka">
      <Navbar />
      <Header />
      <Speciality />
      <DoctorProfiles />
      <Appointment />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
