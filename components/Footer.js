import Image from "next/image";
import Link from "next/link";

// Import Images/Icons
import logo1 from "../assets/footer/logo1.svg";
import logo2 from "../assets/footer/logo2.svg";
import linkedin from "../assets/footer/linkedin.svg";
import instagram from "../assets/footer/instagram.svg";

const Footer = () => {
  return (
    <section className="contact bg-gradient-to-b from-[#E8FFFF] to-[#F9FFFF]">
      <div className="max-w-5xl m-auto p-5">
        <div className="flex md:flex-row flex-col md:gap-0 gap-5 md:justify-between">
          <div>
            <Image src={logo1} alt="logo" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[#046F7D] md:text-3xl text-2xl font-semibold">
              Contact
            </h3>
            <ul className="text-[#2A2B30] md:text-base text-sm">
              <li>Mail: hello@impactpalu.id</li>
              <li>Phone: +62 813 9871 2212</li>
              <li>Address: Social Innovation Space at Dekopinwil</li>
              <li>JL RA Kartini No 17 Palu</li>
              <li>Sulawesi Tengah 94111</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[#046F7D] md:text-3xl text-2xl font-semibold">
              Social Media
            </h3>
            <div className="flex gap-3">
              <Link href="https://www.instagram.com/impactpalu/">
                <a target={"_blank"}>
                  <Image src={instagram} alt="instagram" width={35} />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/company/impact-palu/">
                <a target={"_blank"}>
                  <Image src={linkedin} alt="linkedin" width={35} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="max-w-5xl m-auto py-3 px-5">
        <div className="flex justify-between items-center gap-5">
          <p className="text-[#046F7D] md:text-base text-[10px]">
            Copyright 2022 © Impact Palu | Created by{" "}
            <Link href={"https://hammercode.org/"}>
              <a target={"_blank"}>
                <span className="font-semibold">HammerCode</span>
              </a>
            </Link>
          </p>
          <div className="md:w-20 w-10">
            <Image src={logo2} alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
