import Image from "next/image";

// Import image/icon
import pointerLeft from "../assets/about/pointerLeft.svg";
import pointerRight from "../assets/about/pointerRight.svg";
import aboutFrame from "../assets/about/aboutFrame.svg";

const About = () => {
  return (
    <section>
      <div className="max-w-6xl m-auto p-5">
        <div>
          <div className="flex justify-center gap-3">
            <Image src={pointerLeft} alt="pointer left" />
            <h2 className="font-semibold text-[45px] text-[#046F7D]">About</h2>
            <Image src={pointerRight} alt="pointer right" />
          </div>
          <p>
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
        <div>
          <h3>Why We Are Exist?</h3>
          <p>
            In September 2018, in Palu, Central Sulawesi faced disasters
            (tsunami, earthquake, soil liquefaction). More than 2000 people
            killed, many buildings, roads, bridges and other crucial
            infrastructures were destroyed. Currently, around 6,500+ refugees
            lost their home and jobs as well.
          </p>
        </div>
        <div>
          <Image src={aboutFrame} alt="about frame" />
        </div>
      </div>
    </section>
  );
};

export default About;
