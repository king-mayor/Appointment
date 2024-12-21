import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
const ScrollToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };
  return (
    <div>
      {show && (
        <div
          className="text-5xl font-bold text-blue-600 hover:text-blue-800 fixed bottom-5 right-5 cursor-pointer"
          onClick={scrollTop}
        >
          <FaArrowCircleUp />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
