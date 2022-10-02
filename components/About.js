import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// Import image/icon
import pointerLeft from "../assets/pointerLeft.svg";
import pointerRight from "../assets/pointerRight.svg";
import aboutFrame from "../assets/about/aboutFrame.svg";

const About = () => {
  return (
    <section className="about">
      <div className="max-w-6xl m-auto px-5 md:pt-10 pt-5">
        <div className="flex flex-col gap-5">
          <div className="flex justify-center gap-3">
            <Image src={pointerLeft} alt="pointer left" width={20} />
            <h2 className="font-semibold md:text-[45px] text-[28px] text-[#046F7D]">About</h2>
            <Image src={pointerRight} alt="pointer right" width={20} />
          </div>
          <p className="md:text-[18px] text-[13px] text-center text-[#2A2B30]">
            <span className="font-semibold">Impact Palu</span> is a local
            incubator aims to grow social entrepreneurship ecosystem in Central
            Sulawesi. We act as{" "}
            <span className="font-semibold">
              enabler, connector and community platform
            </span>{" "}
            to accelerate social innovation towards inclusive and sustainable
            social impact in eastern part of Indonesia.{" "}
          </p>
        </div>
        <div className="flex flex-col items-center md:mt-12 mt-7 gap-5 text-[#2A2B30]">
          <h3 className="font-semibold md:text-[22px] text-[20px]">Why We Are Exist?</h3>
          <p className="md:text-[18px] text-[13px] text-center">
            At <span className="font-semibold">Impact Palu</span>, we believe that social enterprises will
            develop a sustainable solution for social and environmental problems
            in Palu and beyond. By supporting aspiring social entrepreneurs with
            capacity building programs and connecting them with pertinent
            stakeholders to achieve a greater impact.
          </p>
        </div>
        <div className="md:mx-10">
          <Image src={aboutFrame} alt="about frame"  />
        </div>
      </div>
    </section>
  );
};

export default About;
