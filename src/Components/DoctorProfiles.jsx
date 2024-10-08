import React from "react";
import { DoctorData } from "./DoctorsData";

const DoctorProfiles = () => {
  return (
    <div className="py-10">
      <div className="flex justify-center items-center text-center">
        <div className="lg:mx-0 mx-10">
          <h2 className="text-3xl">Top Doctors to Book</h2>
          <p className="text-lg py-2">
            Simply browse through our extensive list of trusted doctors.
          </p>
        </div>
      </div>
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 text-center justify-items-center gap-4 py-6">
        {DoctorData.slice(0, 10).map((product) => (
          <div
            key={product.id}
            className="border-2 rounded-xl pb-6 cursor-pointer hover:-translate-y-2 hover:duration-500"
          >
            <div className="">
              <img
                className="bg-[#e3e7fd] rounded-t-lg"
                src={product.img}
                alt="#"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <p className="w-2 h-2 rounded-full bg-[#09b609]"></p>
              <p className="text-sm text-[#09b609]">Available</p>
            </div>
            <div>
              <p>{product.name}</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">{product.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-6">
        <button className="text-gray-600 bg-[#e3e7fd] rounded-2xl cursor-pointer py-2 px-8">
          more
        </button>
      </div>
    </div>
  );
};

export default DoctorProfiles;
