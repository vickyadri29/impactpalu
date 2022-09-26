import Image from "next/image";
import { Link } from "react-scroll";

import { useEffect, useState } from "react";

// Import Icon
import logo from "../assets/navbar/logo.svg";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const styleNavbar = scroll
    ? {
        // When scrolled
        background:
          "fixed left-0 right-0 m-auto z-10 bg-[#008FA2] transition-all ease-out duration-100 drop-shadow-md",
      }
    : {
        // When at top
        background:
          "fixed left-0 right-0 m-auto z-10 bg-transparent transition-all ease-out duration-100 drop-shadow-md",
      };

  const changeBgNav = () => {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    changeBgNav();
    window.addEventListener("scroll", changeBgNav);
  }, []);

  return (
    <section className={styleNavbar.background}>
      <div className="max-w-6xl m-auto">
        <nav className="flex justify-between items-center p-5">
          <Image src={logo} alt="logo" />

          <div className="flex items-center">
            <ul className="flex gap-10 text-white font-medium">
              <Link to="about" smooth={true} duration={500}>
                <li className="cursor-pointer hover:text-blue-50">About</li>
              </Link>
              <li className="cursor-pointer hover:text-blue-50">Programs</li>
              <li className="cursor-pointer hover:text-blue-50">Partner</li>
              <li className="cursor-pointer hover:text-blue-50">Events</li>
              <li className="cursor-pointer hover:text-blue-50">Contact</li>
            </ul>
          </div>
          <button className="bg-white hover:bg-[#f8f8f8] px-6 py-3 text-[#046F7D] font-medium hover:shadow-md transition-all duration-200 ease-in">
            Apply Now
          </button>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
