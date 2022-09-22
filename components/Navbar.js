import Image from "next/image";

// Import Icon
import logo from "../assets/navbar/logo.svg";

const Navbar = () => {
  return (
    <section className="sticky top-0 z-10">
      <div className="max-w-6xl m-auto">
        <nav className="flex justify-between items-center p-5">
          <Image src={logo} alt="logo" />

          <div className="flex items-center">
            <ul className="flex gap-10 text-white font-medium">
              <li className="cursor-pointer hover:text-blue-50">About</li>
              <li className="cursor-pointer hover:text-blue-50">Programs</li>
              <li className="cursor-pointer hover:text-blue-50">Partner</li>
              <li className="cursor-pointer hover:text-blue-50">Events</li>
              <li className="cursor-pointer hover:text-blue-50">Contact</li>
            </ul>
          </div>
          <button className="bg-white px-6 py-3 text-[#046F7D] font-medium hover:shadow-md transition-all duration-200 ease-in">
            Apply Now
          </button>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
