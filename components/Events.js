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
        <div className="flex justify-center gap-3">
          <Image src={pointerLeft} alt="pointer left" width={20} />
          <h2 className="font-semibold text-[45px] text-[#046F7D]">Events</h2>
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
              <div key={index} className="border flex justify-between text-[#2A2B30]">
                <Image src={image_url} alt="Events" width={300} height={300} />
                <div className="flex flex-col justify-between p-5">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[#E0720C] font-semibold md:text-3xl">
                      {title}
                    </h2>
                    <p className="">{desc}</p>
                  </div>
                  <div>
                    <p>{date}</p>
                    <p>{time}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image src={zoomIcon} alt="zoom" />
                      <span className="font-bold">{zoom_desc}</span>
                    </div>
                    {eventPassed ? (
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{register_desc}</span>
                        <Image src={arrowIcon} alt="arrow" />
                      </div>
                    ) : (
                      <div>
                        <button className="bg-[#EB3C3C] hover:bg-[#DB2E2E] text-white font-bold px-7 py-2 rounded-[5px] shadow-md">Passed</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center my-10">
          <button className="bg-[#138B9B] text-white px-8 py-3 rounded-[5px]">View for more</button>
        </div>
      </div>
    </section>
  );
};

export default Events;
