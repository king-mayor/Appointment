import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Login = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="py-28">
        <form action="" className="">
          <div className="flex justify-center">
            <div className="border-2 border-gray-200 p-10 shadow-md shadow-slate-200 rounded-2xl">
              <div>
                <h2 className="text-2xl font-semibold text-gray-600">Login</h2>
                <p className="text-gray-600 text-md py-2">
                  Please log in to book appointment
                </p>
              </div>

              <div className="py-2">
                <h2 className="text-gray-600 text-md">Email</h2>
                <input
                  className="border-2 border-gray-200 outline-none w-full pl-2 py-2 rounded-lg"
                  type="text"
                />
              </div>
              <div className="py-2">
                <h2 className="text-gray-600 text-md">Password</h2>
                <input
                  className="border-2 border-gray-200 outline-none w-full pl-2 py-2 rounded-lg"
                  type="password"
                />
              </div>
              <div>
                <button className="text-gray-100 bg-primary font-semibold outline-none border-none cursor-pointer py-2 w-full rounded-lg text-md my-3">
                  login
                </button>
              </div>
              <div className="flex gap-2">
                <p className="text-sm text-gray-600">Create a new account?</p>
                <Link to="/account">
                  <p className="text-sm text-blue-600 cursor-pointer border-b-2 border-blue-600">
                    Click here
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* {Footer} */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
