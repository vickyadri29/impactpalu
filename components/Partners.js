import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images/icons
import pointerLeft from "../assets/pointerLeft.svg";
import pointerRight from "../assets/pointerRight.svg";

import { DataPartners } from "../data";

const Partners = () => {
  const { datas } = DataPartners;

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="partners">
      <div className="max-w-5xl m-auto p-5">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex flex-col gap-3"
        >
          <div className="flex justify-center gap-3">
            <Image src={pointerLeft} alt="pointer left" width={20} />
            <h2 className="font-semibold md:text-[45px] text-[28px] text-[#046F7D]">
              Partners
            </h2>
            <Image src={pointerRight} alt="pointer right" width={20} />
          </div>
          <p className="md:text-[18px] text-[13px] text-center text-[#2A2B30]">
            Here is our partners and supporters
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex justify-center m-auto"
        >
          <Swiper
            modules={[ Pagination]}
            // navigation={true}
            pagination={true}
            loop={true}
            //   className="test"
            slidesPerView="auto"
            breakpoints={{
              // when window width is >= 640px
              300: {
                slidesPerView: "auto",
                spaceBetween: 30,
                pagination: {
                  clickable: "true",
                  dynamicBullets: "true",
                },
              },
              // when window width is >= 768px
              768: {
                slidesPerView: "auto",
                spaceBetween: 30,
                pagination: {
                  clickable: "true",
                  dynamicBullets: "true",
                },
              },
              1024: {
                slidesPerView: "3",
                pagination: {
                  clickable: "true",
                  dynamicBullets: "true",
                },
              },
            }}
            className="testimoniSlider transition-all md:min-h-[170px] min-h-[145px]"
          >
            {datas.map((data, index) => {
              const { image_url } = data;
              return (
                <SwiperSlide key={index}>
                  <div className="flex justify-center">
                    <Image
                      src={image_url}
                      alt="Partners"
                      width={120}
                      height={120}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partners;
