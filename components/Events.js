import Image from "next/image";

// Import images/icons
import pointerLeft from "../assets/pointerLeft.svg";
import pointerRight from "../assets/pointerRight.svg";
import zoomIcon from "../assets/events/zoom.svg";
import arrowIcon from "../assets/events/arrowBack.svg";

import { DataEvents } from "../data";
import { useState } from "react";

const Events = () => {
  const [eventPassed, setEventPassed] = useState(false);

  const { datas } = DataEvents;
  return (
    <section className="events bg-[#F9FFFF]">
      <div className="max-w-6xl m-auto p-5">
        <div className="flex justify-center gap-3 md:mb-0 mb-5">
          <Image src={pointerLeft} alt="pointer left" width={20} />
          <h2 className="font-semibold md:text-[45px] text-[28px] text-[#046F7D]">
            Events
          </h2>
          <Image src={pointerRight} alt="pointer right" width={20} />
        </div>
        <div className="max-w-4xl m-auto flex flex-col gap-5">
          {datas.map((data, index) => {
            const {
              image_url,
              title,
              desc,
              date,
              time,
              zoom_desc,
              register_desc,
            } = data;
            return (
              <div
                key={index}
                className="border shadow-md flex lg:flex-row md:flex-row flex-col md:h-full h-[550px] justify-between text-[#2A2B30]"
              >
                <div className="flex justify-center md:w-[300px] ">
                  <Image src={image_url} alt="Events" />
                </div>
                <div className="flex flex-col justify-between p-5">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[#E0720C] font-semibold md:text-3xl">
                      {title}
                    </h2>
                    <p className="md:text-base text-[12px]">{desc}</p>
                  </div>
                  <div className="md:text-base text-[12px] md:my-0 my-2">
                    <p>{date}</p>
                    <p>{time}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex gap-2">
                      <div className="md:w-full w-[20px]">
                        <Image src={zoomIcon} alt="zoom" />
                      </div>
                      <span className="font-bold">{zoom_desc}</span>
                    </div>
                    {eventPassed ? (
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{register_desc}</span>
                        <Image src={arrowIcon} alt="arrow" />
                      </div>
                    ) : (
                      <div>
                        <div className="bg-[#EB3C3C] text-white md:font-bold font-semibold md:px-7 px-4 py-2 md:text-base text-xs rounded-[5px] shadow-md">
                          Passed
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center md:my-10 my-7">
          <button className="bg-[#138B9B] font-semibold text-white md:px-8 px-5 md:py-3 py-2 md:text-base text-sm rounded-[5px]">
            View for more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
