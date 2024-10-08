import React from "react";

import logo from "../assets/logo-BNCDj_dh.svg";
const Footer = () => {
  return (
    <>
      <div className="lg:flex lg:flex-row flex-col justify-center lg:items-center items-start lg:mx-24 mx-10 py-20 gap-10">
        <div className="1st">
          <img className="" src={logo} alt="logo" />
          <p className="lg:text-md text-sm text-gray-600 py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="lg:flex lg:flex-row flex-col w-1/2 gap-20">
          <div className="lg:py-0 py-6">
            <h2 className="font-semibold text-lg">COMPANY</h2>
            <p className="text-md text-gray-600 py-1">home</p>
            <p className="text-md text-gray-600 py-1">About Us</p>
            <p className="text-md text-gray-600 py-1">Delivery</p>
            <p className="text-md text-gray-600 py-1">Privacy Policy</p>
          </div>
          <div className="lg:py-0 py-6">
            <h2 className="font-semibold text-lg">GET IN TOUCH</h2>
            <p className="text-md text-gray-600 py-1">+0-000-000-000</p>
            <p className="text-md text-gray-600 py-1">
              mayorodegbaro@gmail.com
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center lg:px-0 px-10">
        <p className="lg:text-md text-sm text-gray-600 py-6">
          Copyright 2024 @mayorodegbaro@gmail.com - All Right Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
