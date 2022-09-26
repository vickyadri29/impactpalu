import Image from "next/image";

// Import Images/icons
import waveIpImages from "../assets/ipImages/waveIpImages.svg";
import img1 from "../assets/ipImages/img1.png";
import img2 from "../assets/ipImages/img2.png";
import img3 from "../assets/ipImages/img3.png";
import waveIpImages2 from "../assets/ipImages/waveIpImages2.svg";

const IpImages = () => {
  return (
    <section className="relative bg-ipImage h-full">
      <Image src={waveIpImages} alt="wave" />
      <div className="max-w-6xl m-auto p-5">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between">
            <Image src={img1} alt="img1" />
            <Image src={img2} alt="img2" />
          </div>
          <Image src={img3} alt="img3" />
        </div>
      </div>
      <Image src={waveIpImages2} alt="wave 2" />
    </section>
  );
};

export default IpImages;
