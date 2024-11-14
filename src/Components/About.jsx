import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Aboutimg from "../assets/About-img.png";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { HashLoader } from "react-spinners";

const About = () => {
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
          <HashLoader color="blue" size={36} />
        </div>
      ) : (
        <div>
          <div className="">
            <Navbar />
          </div>
          <div>
            <div className="flex lg:flex-row flex-col justify-center lg:px-20 px-10 py-28 items-center gap-10">
              <div className="1st lg:w-1/3 w-full">
                <img src={Aboutimg} alt="About#" />
              </div>
              <div className="lg:w-2/4 w-full">
                <h2 className="text-3xl text-black pb-6">ABOUT US</h2>
                <p className="text-gray-600 text-sm py-2">
                  Welcome to Prescripto, your trusted partner in managing your
                  healthcare needs conveniently and efficiently. At Prescripto,
                  we understand the challenges individuals face when it comes to
                  scheduling doctor appointments and managing their health
                  records.
                </p>
                <p className="text-gray-600 text-sm py-2">
                  Prescripto is committed to excellence in healthcare
                  technology. We continuously strive to enhance our platform,
                  integrating the latest advancements to improve user experience
                  and deliver superior service. Whether you're booking your
                  first appointment or managing ongoing care, Prescripto is here
                  to support you every step of the way.
                </p>
                <div>
                  <h2 className="text-xl text-black py-2">Our Vision</h2>
                  <p className="text-gray-600 text-sm">
                    Our vision at Prescripto is to create a seamless healthcare
                    experience for every user. We aim to bridge the gap between
                    patients and healthcare providers, making it easier for you
                    to access the care you need, when you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* {Why choose us} */}
          <div>
            <div className="flex justify-center py-10">
              <h2 className="text-2xl text-black font-semibold">
                WHY CHOOSE US
              </h2>
            </div>
            <div className="container mx-auto grid lg:grid-cols-3 grid-cols-1 lg:px-24 px-10 py-10 text-gray-600">
              <div className="1st border-2 border-gray-200 p-10 cursor-pointer hover:bg-primary  hover:text-white">
                <h2 className="text-md font-semibold">EFFICIENCY:</h2>
                <p className=" text-md py-2">
                  Streamlined appointment scheduling that fits into your busy
                  lifestyle.
                </p>
              </div>
              <div className="1st border-2 border-gray-200 p-10 cursor-pointer  hover:bg-primary hover:text-white">
                <h2 className="text-md font-semibold">CONVENIENCE:</h2>
                <p className="text-md py-2">
                  Access to a network of trusted healthcare professionals in
                  your area.
                </p>
              </div>
              <div className="1st border-2 border-gray-200 p-10 cursor-pointer  hover:bg-primary  hover:text-white">
                <h2 className="text-md font-semibold">PERSONALIZATION:</h2>
                <p className="text-md py-2">
                  Tailored recommendations and reminders to help you stay on top
                  of your health.
                </p>
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

export default About;
