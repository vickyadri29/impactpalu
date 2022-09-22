import Image from "next/image";

// Import Image and Icon
import imageFrame from "../assets/header/imageFrame.svg";
import scrollDownIcon from "../assets/header/scrollDownIcon.svg";
import waveHeader from "../assets/header/waveHeader.svg";

const HeaderComp = () => {
  return (
    <section>
      <div className="max-w-6xl m-auto py-10 px-5">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4 basis-1/2 text-white">
            <h2 className="md:text-[60px] font-semibold">
              Act as enabler, connector and community .
            </h2>
            <p className="md:text-[23px] mr-10">
              Fostering social entrepreneurship ecosystem .
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
        <button className="flex items-center gap-1 mt-10">
          <Image src={scrollDownIcon} alt="scroll down icon" />
          <p className="text-white">scroll down to explore</p>
        </button>
      </div>
      {/* <Image src={waveHeader} alt="wave header" /> */}
    </section>
  );
};

export default HeaderComp;
