import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-BNCDj_dh.svg";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className="">
        <div className="flex lg:justify-around justify-between py-2 fixed z-50 right-0 left-0 bg-[white]">
          <div className="1st">
            <img className="" src={logo} alt="logo" />
          </div>
          <div className="2nd lg:flex lg:flex-row items-center gap-4 hidden">
            <Link
              to="/"
              className="uppercase text-md text-gray-950 font-medium"
            >
              home
            </Link>
            <Link
              to="/alldoctors"
              className="uppercase text-md text-gray-950 font-medium"
            >
              all doctors
            </Link>
            <Link
              to="/about"
              className="uppercase text-md text-gray-950 font-medium"
            >
              about
            </Link>
            <Link
              to="/contact"
              className="uppercase text-md text-gray-950 font-medium"
            >
              contact
            </Link>
            <Link
              to="/adminlogin"
              className="text-md capitalize cursor-pointer border-2 border-gray-200 px-3 py-1 rounded-3xl"
            >
              admin panel
            </Link>
          </div>
          {/* {Mobile Menu} */}
          <div className="lg:hidden">
            {menu && (
              <div className="flex flex-col justify-center items-center bg-primary z-50 fixed right-0 left-0 top-20 w-full py-10">
                <Link
                  to="/"
                  className="uppercase text-md text-gray-50 font-medium py-2 hover:bg-[#e04f36] hover:px-6  rounded-xl"
                >
                  home
                </Link>
                <Link
                  to=""
                  className="uppercase text-md text-gray-50 font-medium py-2 hover:bg-[#e04f36] hover:px-6  rounded-xl"
                >
                  all doctors
                </Link>
                <Link
                  to="/about"
                  className="uppercase text-md text-gray-50 font-medium py-2 hover:bg-[#e04f36] hover:px-6  rounded-xl"
                >
                  about
                </Link>
                <Link
                  to="/contact"
                  className="uppercase text-md text-gray-50 font-medium py-2 hover:bg-[#e04f36] hover:px-6  rounded-xl"
                >
                  contact
                </Link>
                <Link
                  to="/adminlogin"
                  className="text-md capitalize cursor-pointer border-2 border-gray-200 px-3 py-1 rounded-3xl text-gray-200 my-2"
                >
                  admin panel
                </Link>
                <Link to="/account" className="my-4">
                  <button className="text-sm px-4 py-3 rounded-3xl font-light bg-[white] text-blue-600">
                    Create account
                  </button>
                </Link>
              </div>
            )}
          </div>
          <div className="lg:hidden" onClick={toggleMenu}>
            {menu ? (
              <IoMdClose className="text-3xl text-blue-600 cursor-pointer" />
            ) : (
              <IoMdMenu className="text-3xl text-blue-600 cursor-pointer" />
            )}
          </div>
          <div className="lg:flex hidden">
            <Link to="/account">
              <button className="text-sm px-4 py-3 rounded-3xl font-light bg-primary text-gray-50">
                Create account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
