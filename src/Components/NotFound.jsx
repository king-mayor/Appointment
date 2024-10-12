import React from "react";
import { Link } from "react-router-dom";
import notfound from "../assets/notfound.jpg";

const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-10">
        <img className="w-53 h-52" src={notfound} alt="#notfound" />
        <h2 className="text-4xl text-gray-600 font-semibold">
          PAGE NOT FOUND!
        </h2>
        <Link to="/">
          <button className="bg-primary text-gray-200 cursor-pointer py-2 px-8 border-none outline-none my-6">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
