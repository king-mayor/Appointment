import React from "react";
import appointment from "../assets/appointment_img.png";
const Appointment = () => {
  return (
    <div>
      <div className="bg-primary flex justify-center items-center rounded-2xl lg:mx-28 mx-10 lg:pt-10 px-10 lg:py-0 py-4">
        <div className="1st">
          <h2 className="lg:text-5xl md:text-3xl text-2xl text-white py-4">
            Book Appointment With 100+ Trusted Doctors
          </h2>
          <button className="bg-[white] text-gray-600 rounded-3xl cursor-pointer py-4 px-10">
            Create account
          </button>
        </div>
        <div className="2nd w-2/3 md:flex hidden">
          <img src={appointment} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
