import React from "react";
import Navbar from "./Navbar";
import { DoctorData } from "./DoctorsData";
import Footer from "./Footer";
const AllDoctors = () => {
  return (
    <div>
      {/* {Navbar} */}
      <Navbar />
      <div className="py-28 flex lg:flex-row flex-col justify-center mx-10 gap-4">
        <div className="1st flex flex-col gap-2 mx-10">
          <h2 className="text-gray-600 py-2 text-md">
            Browse through the doctors specialist.
          </h2>
          <button className="border-2 border-gray-300 text-gray-600 py-2 px-10">
            General Physician
          </button>
          <button className="border-2 border-gray-300 text-gray-600 py-2 px-10">
            Gynecologist
          </button>
          <button className="border-2 border-gray-300 text-gray-600 py-2 px-10">
            Dermatologist
          </button>
          <button className="border-2 border-gray-300 text-gray-600 py-2 px-10">
            Pediatricians
          </button>
          <button className="border-2 border-gray-300 text-gray-600 py-2 px-10">
            Neurologist
          </button>
          <button className="border-2 border-gray-300 text-gray-600 py-2 px-10">
            Gastroenterologist
          </button>
        </div>
        <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {DoctorData.map((product) => (
            <div
              key={product.id}
              className="border-2 rounded-xl pb-6 cursor-pointer hover:-translate-y-2 hover:duration-500 w-3/2 lg:mx-0 mx-10"
            >
              <div className="">
                <img
                  className="bg-[#e3e7fd] rounded-t-lg w-full"
                  src={product.img}
                  alt="#"
                />
              </div>
              <div className="flex justify-center items-center gap-2">
                <p className="w-2 h-2 rounded-full bg-[#09b609]"></p>
                <p className="text-sm text-[#09b609]">Available</p>
              </div>
              <div className="text-center">
                <p>{product.name}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 text-center">
                  {product.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* {Footer} */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AllDoctors;
