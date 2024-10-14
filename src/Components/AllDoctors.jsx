import React, { useState } from "react";
import Navbar from "./Navbar";
import { DoctorData } from "./DoctorsData";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const AllDoctors = () => {
  const [menu, setMenu] = useState(false);
  const [products, setProducts] = useState(DoctorData);
  const toggleFilter = () => {
    setMenu(!menu);
  };
  const filterProducts = (item) => {
    const filtered = DoctorData.filter((product) => product.title === item);
    setProducts(filtered);
    console.log(filtered);
  };

  return (
    <div>
      {/* {Navbar} */}
      <Navbar />
      <div className="py-28 flex lg:flex-row flex-col justify-center mx-10 gap-4">
        <div className="1st md:flex md:flex-col gap-2 mx-10 hidden">
          <h2 className="text-gray-600 py-2 text-md">
            Browse through the specialist doctors.
          </h2>
          <button
            className="border-2 border-gray-300 text-gray-600 py-2 px-10 hover:bg-primary hover:text-white"
            onClick={() => filterProducts("General Physician")}
          >
            General Physician
          </button>
          <button
            className="border-2 border-gray-300 text-gray-600 py-2 px-10  hover:bg-primary hover:text-white"
            onClick={() => filterProducts("Gynecologist")}
          >
            Gynecologist
          </button>
          <button
            className="border-2 border-gray-300 text-gray-600 py-2 px-10  hover:bg-primary hover:text-white"
            onClick={() => filterProducts("Dermatologist")}
          >
            Dermatologist
          </button>
          <button
            className="border-2 border-gray-300 text-gray-600 py-2 px-10  hover:bg-primary hover:text-white"
            onClick={() => filterProducts("Pediatrician")}
          >
            Pediatricians
          </button>
          <button
            className="border-2 border-gray-300 text-gray-600 py-2 px-10  hover:bg-primary hover:text-white"
            onClick={() => filterProducts("Neurologist")}
          >
            Neurologist
          </button>
          <button
            className="border-2 border-gray-300 text-gray-600 py-2 px-10  hover:bg-primary hover:text-white"
            onClick={() => filterProducts("Gastroentrologist")}
          >
            Gastroenterologist
          </button>
        </div>
        {/* {Mobile Section} */}
        <div>
          <h2 className="text-gray-600 py-2 text-md font-semibold md:hidden">
            Browse through the doctors specialist.
          </h2>
        </div>
        <div onClick={toggleFilter} className="md:hidden">
          {menu ? (
            <div>
              <button className="bg-primary text-white text-lg py-2 px-6 border-none outline-none cursor-pointer ">
                Filters
              </button>
            </div>
          ) : (
            <div>
              <button className=" text-gray-600 text-lg py-2 px-6 border-2 border-gray-200 outline-none cursor-pointer ">
                Filters
              </button>
            </div>
          )}
        </div>
        {menu && (
          <div className="1st flex flex-col gap-2 mx-10 md:hidden">
            <button
              className="border-2 border-gray-300 text-gray-600 py-2 px-10  hover:bg-primary hover:text-white"
              onClick={() => filterProducts("General Physician")}
            >
              General Physician
            </button>
            <button
              className="border-2 border-gray-300 text-gray-600 py-2 px-10  hover:bg-primary hover:text-white"
              onClick={() => filterProducts("Gynecologist")}
            >
              Gynecologist
            </button>
            <button
              className="border-2 border-gray-300 text-gray-600 py-2 px-10  hover:bg-primary hover:text-white"
              onClick={() => filterProducts("Dermatologist")}
            >
              Dermatologist
            </button>
            <button
              className="border-2 border-gray-300 text-gray-600 py-2 px-10  hover:bg-primary hover:text-white"
              onClick={() => filterProducts("Pediatrician")}
            >
              Pediatricians
            </button>
            <button
              className="border-2 border-gray-300 text-gray-600 py-2 px-10  hover:bg-primary hover:text-white"
              onClick={() => filterProducts("Neurologist")}
            >
              Neurologist
            </button>
            <button
              className="border-2 border-gray-300 text-gray-600 py-2 px-10  hover:bg-primary hover:text-white"
              onClick={() => filterProducts("Gastroentrologist")}
            >
              Gastroenterologist
            </button>
          </div>
        )}

        <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-items-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="border-2 rounded-xl pb-6 cursor-pointer hover:-translate-y-2 hover:duration-500 lg:w-3/2 w-full lg:mx-0 mx-10"
            >
              <div className="">
                <Link to={`/doctor/${product.id}`}>
                  <img
                    className="bg-[#e3e7fd] rounded-t-lg w-full"
                    src={product.img}
                    alt="#"
                  />
                </Link>
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
