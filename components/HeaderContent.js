import Image from "next/image";
import { Link } from "react-scroll";
// Import Image and Icon
import imageFrame from "../assets/header/imageFrame.svg";
import scrollDownIcon from "../assets/header/scrollDownIcon.svg";
import waveHeader from "../assets/header/waveHeader.svg";

const HeaderContent = () => {
  return (
    <section className="header">
      <div className="bg-gradient-to-b from-[#046F7D] to-[#008FA2] md:pt-36 pt-20 md:pb-0 pb-5">
        <div className="max-w-6xl m-auto md:py-10 px-5">
          <div className="flex md:flex-row flex-col md:justify-between items-center">
            <div className="md:my-0 my-5 flex flex-col items-center justify-center gap-4 basis-1/2 text-white">
              <h2 className="md:text-[60px] text-[34px] md:text-left text-center font-semibold">
                Sustaining Local Change .
              </h2>
              <p className="md:text-[23px] md:mr-10 md:text-left text-center">
                Fostering social entrepreneurship ecosystem in Central Sulawesi
                and beyond .
              </p>
            </div>
            <div className="">
              <Image
                src={imageFrame}
                alt="Image Frame"
                width={450}
                height={300}
              />
            </div>
          </div>
          <Link to="about" smooth={true} duration={500}>
            <button className="flex md:items-center md:m-0 m-auto gap-1 mt-10">
              <Image src={scrollDownIcon} alt="scroll down icon" />
              <p className="text-white md:text-base text-xs">
                scroll down to explore
              </p>
            </button>
          </Link>
        </div>
      </div>
      <div className="relative md:bottom-0 bottom-[1px]">
        <Image src={waveHeader} alt="wave header" />
      </div>
    </section>
  );
};

export default HeaderContent;
