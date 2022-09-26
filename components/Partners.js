import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

// Import images/icons
import pointerLeft from "../assets/pointerLeft.svg";
import pointerRight from "../assets/pointerRight.svg";

import { DataPartners } from "../data";

const Partners = () => {
  const { datas } = DataPartners;

  return (
    <section className="partners">
      <div className="max-w-5xl m-auto p-5">
        <div className="flex flex-col gap-3">
          <div className="flex justify-center gap-3">
            <Image src={pointerLeft} alt="pointer left" width={20} />
            <h2 className="font-semibold text-[45px] text-[#046F7D]">
              Partners
            </h2>
            <Image src={pointerRight} alt="pointer right" width={20} />
          </div>
          <p className="text-[18px] text-center text-[#2A2B30]">
            Here is our partners and supporters
          </p>
        </div>
        <div className="flex justify-center m-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={true}
            loop={true}
            //   className="test"
            slidesPerView="auto"
            breakpoints={{
              // when window width is >= 640px
              300: {
                slidesPerView: "auto",
                spaceBetween: 30,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: "auto",
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: "3",
                pagination: {
                  clickable: "true",
                  dynamicBullets: "true",
                },
              },
            }}
            className="testimoniSlider transition-all min-h-[170px]"
          >
            {datas.map((data, index) => {
              const { image_url, id } = data;
              return (
                <SwiperSlide key={index}>
                  <div key={id} className="flex justify-center">
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
