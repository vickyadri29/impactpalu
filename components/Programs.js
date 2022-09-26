import { useState } from "react";
import Image from "next/image";

// Import Image/icon
import pointerLeft from "../assets/pointerLeft.svg";
import pointerRight from "../assets/pointerRight.svg";
import waveProgram from "../assets/programs/waveProgram.svg";
import capacity from "../assets/programs/capacity.svg";
import entrepreneur from "../assets/programs/entrepreneur.svg";
import personalDev from "../assets/programs/personalDev.svg";
import workshop from "../assets/programs/workshop.svg";
import funding from "../assets/programs/funding.svg";
import demoDay from "../assets/programs/demoDay.svg";

const Programs = () => {
  const [showPreInc, setShowPreInc] = useState(false);
  const [showImpact, setShowImpact] = useState(false);

  const handleShowPreInc = () => {
    setShowPreInc((show) => !show);
  };

  const handleShowImpact = () => {
    setShowImpact((show) => !show);
  };

  return (
    <section className="">
      <div className="relative top-2">
        <Image src={waveProgram} alt="wave" />
      </div>
      <div className="bg-[#ECFEFF] text-[#2A2B30]">
        <div className="max-w-6xl m-auto px-5">
          <div className="flex justify-center gap-3">
            <Image src={pointerLeft} alt="pointer left" width={20} />
            <h2 className="font-semibold text-[45px] text-[#046F7D]">
              Programs
            </h2>
            <Image src={pointerRight} alt="pointer right" width={20} />
          </div>
          <div className="flex justify-center flex-col my-3">
            <div className="flex flex-col items-center my-2 relative">
              <button
                onClick={handleShowPreInc}
                className="relative top-1 bg-[#046F7D] hover:bg-[#046370] text-white rounded-tr-[10px] rounded-tl-[10px] font-semibold text-2xl bottom-[100px] md:w-[672px] py-4 transition-all ease-in duration-200"
              >
                Pre - Incubation
              </button>
              {showPreInc ? (
                <div className="max-w-2xl border-4 border-[#046F7D] rounded-[5px] p-5">
                  <p className="text-center">
                    <span className="font-semibold">Impact Palu</span>{" "}
                    Incubation Program is a 3-month tailored program to{" "}
                    <span className="font-semibold">
                      grow potential ideation-stage social enterprises
                    </span>{" "}
                    in Palu, Central Sulawesi.
                  </p>
                  <ul className="flex justify-evenly gap-10 my-6 text-center">
                    <li className="flex flex-col gap-2">
                      <Image src={capacity} alt="capacity-building program" />
                      capacity-building program
                    </li>
                    <li className="flex flex-col gap-2">
                      <Image src={entrepreneur} alt="entrepreneurial journey" />
                      entrepreneurial journey
                    </li>
                    <li className="flex flex-col gap-2">
                      <Image src={personalDev} alt="personal development" />
                      personal development
                    </li>
                  </ul>
                  <div className="flex justify-end mr-6">
                    <button className="bg-[#046F7D] hover:bg-[#046370] text-white px-6 py-2 font-medium rounded-[5px] transition-all ease-in duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex justify-center flex-col mt-3">
            <div className="flex flex-col items-center my-2 relative">
              <button
                onClick={handleShowImpact}
                className="relative top-1 bg-[#046F7D] hover:bg-[#046370] text-white rounded-tr-[10px] rounded-tl-[10px] font-semibold text-2xl bottom-[100px] md:w-[672px] py-4 transition-all ease-in duration-200"
              >
                Impact Incubation
              </button>
              {showImpact ? (
                <div className="max-w-2xl border-4 border-[#046F7D] rounded-[5px] px-6 py-5">
                  <p className="text-center">
                    Our acceleration program is a 5-month incubation focused to{" "}
                    <span className="font-semibold">support early-stage</span>{" "}
                    impact startups with minimum MVP
                  </p>
                  <ul className="flex justify-evenly gap-20 my-6 mx-2 text-center">
                    <li className="flex flex-col gap-2">
                      <Image
                        src={workshop}
                        alt="Intensive Workshop and Mentoring"
                      />
                      Intensive Workshop and Mentoring
                    </li>
                    <li className="flex flex-col gap-2">
                      <Image
                        src={funding}
                        alt="Access to potential funding opportunities"
                      />
                      Access to potential funding opportunities
                    </li>
                    <li className="flex flex-col gap-2">
                      <Image src={demoDay} alt="Demo Day" />
                      Demo Day
                    </li>
                  </ul>
                  <div className="flex justify-end mr-6">
                    <button className="bg-[#046F7D] hover:bg-[#046370] text-white px-6 py-2 font-medium rounded-[5px] transition-all ease-in duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
