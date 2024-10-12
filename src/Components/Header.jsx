import React from "react";
import profiles from "../assets/group_profiles.png";
import { FaArrowRight } from "react-icons/fa6";
import header from "../assets/header_img.png";
const Header = () => {
  return (
    <>
      <div className="mx-24">
        <hr />
      </div>
      <div className="bg-primary lg:flex lg:flex-row flex-col items-center justify-center lg:mx-24 mx-10 lg:px-20 px-6 my-20 lg:pt-28 pt-10 rounded-xl">
        <div className="1st">
          <h2 className="lg:text-5xl md:text-4xl text-2xl text-white">
            Book Appointment With Trusted Doctors
          </h2>
          <div className="lg:flex lg:flex-row flex-col gap-4 items-center py-2">
            <div className="1st">
              <img src={profiles} alt="profiles" />
            </div>
            <div>
              <p className="text-md text-white py-4 leading-8">
                Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle-free.
              </p>
            </div>
          </div>
          <button className="text-gray-600 bg-[white] px-6 lg:py-3 py-1 rounded-3xl relative outline-none border-none">
            Book appointment
            <span>
              <FaArrowRight className="absolute right-2 top-3 bottom-3 pl-2" />
            </span>
          </button>
        </div>
        <div className="2nd">
          <img src={header} alt="banner-img" />
        </div>
      </div>
    </>
  );
};

export default Header;
