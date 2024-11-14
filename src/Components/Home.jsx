import React, { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import Appointment from "./Appointment";
import DoctorProfiles from "./DoctorProfiles";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import Speciality from "./Speciality";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <ScaleLoader color="blue" size={36} />
        </div>
      ) : (
        <div className="overflow-x-hidden font-fredoka">
          <Navbar />
          <Header />
          <Speciality />
          <DoctorProfiles />
          <Appointment />
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </>
  );
};

export default Home;
