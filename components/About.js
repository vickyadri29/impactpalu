import Image from "next/image";

// Import image/icon
import pointerLeft from "../assets/pointerLeft.svg";
import pointerRight from "../assets/pointerRight.svg";
import aboutFrame from "../assets/about/aboutFrame.svg";

const About = () => {
  return (
    <section className="about">
      <div className="max-w-6xl m-auto px-5 pt-10">
        <div className="flex flex-col gap-5">
          <div className="flex justify-center gap-3">
            <Image src={pointerLeft} alt="pointer left" width={20} />
            <h2 className="font-semibold text-[45px] text-[#046F7D]">About</h2>
            <Image src={pointerRight} alt="pointer right" width={20} />
          </div>
          <p className="text-[18px] text-center text-[#2A2B30]">
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
        <div className="flex flex-col items-center mt-12 gap-5 text-[#2A2B30]">
          <h3 className="font-semibold text-[22px]">Why We Are Exist?</h3>
          <p className="text-[18px] text-center">
            <span className="font-semibold">In September 2018,</span> in Palu,
            Central Sulawesi faced disasters{" "}
            <span className="font-semibold">
              (tsunami, earthquake, soil liquefaction)
            </span>
            . More than 2000 people killed, many buildings, roads, bridges and
            other crucial infrastructures were destroyed. Currently, around
            6,500+ refugees lost their home and jobs as well.
          </p>
        </div>
        <div className="mx-10">
          <Image src={aboutFrame} alt="about frame" height={400}/>
        </div>
      </div>
    </section>
  );
};

export default About;
