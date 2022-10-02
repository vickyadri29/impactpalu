import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Images/icons
import waveIpImages from "../assets/ipImages/waveIpImages.svg";
import img1 from "../assets/ipImages/img1.png";
import img2 from "../assets/ipImages/img2.png";
import img3 from "../assets/ipImages/img3.png";
import waveIpImages2 from "../assets/ipImages/waveIpImages2.svg";

const IpImages = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="relative bg-ipImage h-full">
      <Image src={waveIpImages} alt="wave" />
      <div className="max-w-6xl m-auto p-5">
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="flex flex-col md:gap-8 gap-5"
        >
          <div className="flex gap-5 justify-between">
            <Image src={img1} alt="img1" />
            <Image src={img2} alt="img2" />
          </div>
          <Image src={img3} alt="img3" />
        </div>
      </div>
      <div className="relative top-2">
        <Image src={waveIpImages2} alt="wave 2" />
      </div>
    </section>
  );
};

export default IpImages;
