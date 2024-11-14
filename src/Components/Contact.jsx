import React, { useEffect } from "react";
import Contactimg from "../assets/contact-img.png";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import { ScaleLoader } from "react-spinners";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen w-full">
          <ScaleLoader color="blue" size={36} />
        </div>
      ) : (
        <div>
          {/* {Navbar} */}
          <div className="">
            <Navbar />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-center pt-20 ">
              CONTACT US
            </h2>
            <div className="flex md:flex-row flex-col md:justify-center md:items-center items-start gap-10 py-20 lg:px-0 px-10">
              <div className="1st">
                <img className="lg:w-96 w-full" src={Contactimg} alt="about#" />
              </div>
              <div className="">
                <h2 className="text-md font-semibold">OUR OFFICE</h2>
                <div className="py-4">
                  <p className="text-gray-600 text-md">00000 Willms Station</p>
                  <p className="text-gray-600 text-md">
                    Suite 000, Washington, USA
                  </p>
                </div>
                <div className="py-4">
                  <p className="text-gray-600 text-md">Tel: (000) 000-0000</p>
                  <p className="text-gray-600 text-md">
                    Email: mayorodegbaro@gmail.com
                  </p>
                </div>

                <h2 className="text-md font-semibold">CAREERS AT PRESCRIPTO</h2>
                <p className="text-gray-600 text-md py-6">
                  Learn more about our teams and job openings.
                </p>
                <button className="border-2 border-gray-300 py-2 px-8 hover:bg-[black] hover:text-gray-100 outline-none">
                  Explore Jobs
                </button>
              </div>
            </div>
          </div>
          {/* {Footer} */}
          <div>
            <Footer />
          </div>
          {/* {Scroll to top} */}
          <div>
            <ScrollToTop />
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
