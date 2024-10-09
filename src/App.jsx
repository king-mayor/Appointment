import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Account from "./Components/Account";
import AdminLogin from "./Components/AdminLogin";
import AllDoctors from "./Components/AllDoctors";
import Contact from "./Components/Contact";
import DoctorsLogin from "./Components/DoctorsLogin";
import Home from "./Components/Home";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/doctorslogin" element={<DoctorsLogin />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/alldoctors" element={<AllDoctors />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
