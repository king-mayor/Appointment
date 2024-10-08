import React from "react";
import speciality1 from "../assets/speciality1.svg";
import speciality2 from "../assets/speciality2.svg";
import speciality3 from "../assets/speciality3.svg";
import speciality4 from "../assets/speciality4.svg";
import speciality5 from "../assets/speciality5.svg";
import speciality6 from "../assets/speciality6.svg";
import { SpecialData } from "../SpecialityData";
const Speciality = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl">Find by Speciality</h2>
        <p className="py-2 lg:w-1/2 w-full lg:px-0 px-10 text-lg">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
      </div>
      {/* {speciality slider} */}
      <div className="container mx-auto grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 justify-items-center gap-4 py-6">
        <div className="cursor-pointer hover:-translate-y-4 hover:duration-500">
          <img className="w-24 h-24" src={speciality1} alt="img" />
          <p className="text-md py-1">General Physician</p>
        </div>
        <div className="cursor-pointer hover:-translate-y-4 hover:duration-500">
          <img className="w-24 h-24" src={speciality2} alt="img" />
          <p className="text-md py-1">Gynecologist</p>
        </div>
        <div className="cursor-pointer hover:-translate-y-4 hover:duration-500">
          <img className="w-24 h-24" src={speciality3} alt="img" />
          <p className="text-md py-1">Dermatologist</p>
        </div>
        <div className="cursor-pointer hover:-translate-y-4 hover:duration-500">
          <img className="w-24 h-24" src={speciality4} alt="img" />
          <p className="text-md py-1">Pediatricians</p>
        </div>
        <div className="cursor-pointer hover:-translate-y-4 hover:duration-500">
          <img className="w-24 h-24" src={speciality5} alt="img" />
          <p className="text-md py-1">Neurologist</p>
        </div>
        <div className="cursor-pointer hover:-translate-y-4 hover:duration-500">
          <img className="w-24 h-24" src={speciality6} alt="img" />
          <p className="text-md py-1">Gastroentrologist</p>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
