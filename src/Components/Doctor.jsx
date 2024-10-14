import React from "react";
import { Link, useParams } from "react-router-dom";
import { DoctorData } from "./DoctorsData";
import Navbar from "./Navbar";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Footer from "./Footer";
const Doctor = () => {
  const { id } = useParams();
  const items = DoctorData.find((item) => item.id == id);
  return (
    <div>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>
      <div className="py-28 flex lg:flex-row flex-col  justify-center items-center gap-6 lg:mx-20 mx-10">
        <div className="1st bg-primary px-4 pt-2 rounded-2xl lg:w-1/3 w-full flex justify-center">
          <img src={items.img} alt="#doctor" />
        </div>
        <div className="2nd lg:w-2/3 w-full border-2 border-slate-300 rounded-2xl p-10">
          <div className="flex items-center gap-1">
            <div>
              <h2 className="lg:text-3xl text-2xl font-semibold">
                {items.name}
              </h2>
            </div>
            <div className="lg:text-3xl text-2xl text-blue-600">
              <RiVerifiedBadgeFill />
            </div>
          </div>
          <div className="flex gap-1 py-4">
            <h3 className="lg:text-lg text-md text-gray-600 font-semibold">
              MBBS - {items.title}
            </h3>
            <button className="border-2 border-gray-300 text-gray-600 rounded-2xl px-3 text-sm cursor-pointer outline-none">
              {items.year}
            </button>
          </div>
          <div className="">
            <div className="flex items-center gap-1">
              <h3 className="text-md font-bold">About</h3>
              <p className="text-black text-md">
                <IoMdInformationCircleOutline />
              </p>
            </div>
            <div>
              <p className="lg:text-md text-sm text-gray-600 py-2">
                {items.name} has a strong commitment to delivering comprehensive
                medical care, focusing on preventive medicine, early diagnosis,
                and effective treatment strategies. {items.name} has a strong
                commitment to delivering comprehensive medical care, focusing on
                preventive medicine, early diagnosis, and effective treatment
                strategies.
              </p>
              <div className="flex items-center gap-1 py-2">
                <p className="text-gray-600 text-md font-semibold">
                  Appointment fee:
                </p>
                <h3 className="text-lg font-semibold">${items.fee}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {Appointment Button} */}
      <div className="flex justify-center">
        <Link to="/account">
          <button className="bg-primary text-gray-100 text-md cursor-pointer py-2 px-6 rounded-2xl hover:bg-[#4242b8]">
            Book an appointment
          </button>
        </Link>
      </div>
      {/* {Footer Section} */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Doctor;
