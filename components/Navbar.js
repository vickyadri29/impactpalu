import Image from "next/image";
import { Link } from "react-scroll";
import { CgMenuRight, CgClose } from "react-icons/cg";

import { useEffect, useState } from "react";

// Import Icon
import logo from "../assets/navbar/logo.svg";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [openNav, setOpenNav] = useState(false);

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

  const handleOpenNav = () => {
    setOpenNav((show) => !show);
  };

  useEffect(() => {
    changeBgNav();
    window.addEventListener("scroll", changeBgNav);
  }, []);

  return (
    <section className={styleNavbar.background}>
      <div className="max-w-6xl m-auto">
        <nav className="flex justify-between items-center p-5">
          <Link to="" smooth={true} duration={500}>
            <div className="md:w-[100px] w-[25px]">
              <Image src={logo} alt="logo" className="cursor-pointer" />
            </div>
          </Link>
          {/* Nav Dekstop */}
          <div className="md:flex hidden gap-10">
            <div className="flex items-center">
              <ul className="flex gap-10 text-white font-medium">
                <Link to="about" smooth={true} duration={500}>
                  <li className="cursor-pointer hover:text-blue-50">About</li>
                </Link>
                <Link to="programs" smooth={true} duration={500}>
                  <li className="cursor-pointer hover:text-blue-50">
                    Programs
                  </li>
                </Link>
                <Link to="events" smooth={true} duration={500}>
                  <li className="cursor-pointer hover:text-blue-50">Events</li>
                </Link>
                <Link to="partners" smooth={true} duration={500}>
                  <li className="cursor-pointer hover:text-blue-50">
                    Partners
                  </li>
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                  <li className="cursor-pointer hover:text-blue-50">Contact</li>
                </Link>
              </ul>
            </div>
            <a
              href="http://bit.ly/impactincubationform"
              target={"_blank"}
              rel="noreferrer"
            >
              <button className="bg-white hover:bg-[#f8f8f8] px-6 py-3 text-[#046F7D] font-medium hover:shadow-md transition-all duration-200 ease-in">
                Apply Now
              </button>
            </a>
          </div>
          {/* Nav Mobile */}
          <div
            className="md:hidden absolute right-0 mx-5 text-white"
            onClick={handleOpenNav}
          >
            {openNav ? <CgClose size={30} /> : <CgMenuRight size={30} />}
            <div
              className={`${
                openNav ? "left-0" : "-left-full"
              }  fixed bottom-0 w-full max-w-[200px] h-full transition-all duration-500 ease-out`}
            >
              <div className="h-screen bg-white flex flex-col items-center justify-center gap-10">
                <ul className="flex flex-col gap-10 text-black font-medium">
                  <Link to="about" smooth={true} duration={500}>
                    <li
                      onClick={handleOpenNav}
                      className="cursor-pointer  focus:border-b-2 focus:border-b-black hover:text-blue-50"
                    >
                      About
                    </li>
                  </Link>
                  <Link to="programs" smooth={true} duration={500}>
                    <li
                      onClick={handleOpenNav}
                      className="cursor-pointer hover:text-blue-50"
                    >
                      Programs
                    </li>
                  </Link>
                  <Link to="events" smooth={true} duration={500}>
                    <li
                      onClick={handleOpenNav}
                      className="cursor-pointer hover:text-blue-50"
                    >
                      Events
                    </li>
                  </Link>
                  <Link to="partners" smooth={true} duration={500}>
                    <li
                      onClick={handleOpenNav}
                      className="cursor-pointer hover:text-blue-50"
                    >
                      Partners
                    </li>
                  </Link>
                  <Link to="contact" smooth={true} duration={500}>
                    <li
                      onClick={handleOpenNav}
                      className="cursor-pointer hover:text-blue-50"
                    >
                      Contact
                    </li>
                  </Link>
                </ul>
                <a
                  href="http://bit.ly/impactincubationform"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button
                    onClick={handleOpenNav}
                    className="bg-white hover:bg-[#f8f8f8] px-6 py-3 text-[#046F7D] font-medium hover:shadow-md transition-all duration-200 ease-in"
                  >
                    Apply Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
