import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="programs">
      <div className="relative top-2">
        <Image src={waveProgram} alt="wave" />
      </div>
      <div className="bg-[#ECFEFF] text-[#2A2B30]">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="max-w-6xl m-auto px-5 md:pt-5 md:py-0 py-5"
        >
          <div className="flex justify-center gap-3">
            <Image src={pointerLeft} alt="pointer left" width={20} />
            <h2 className="font-semibold md:text-[45px] text-[28px] text-[#046F7D]">
              Programs
            </h2>
            <Image src={pointerRight} alt="pointer right" width={20} />
          </div>
          <div className="flex justify-center flex-col my-3">
            <div className="flex flex-col items-center my-2 relative">
              <button
                onClick={handleShowPreInc}
                className="relative top-1 bg-[#046F7D] hover:bg-[#046370] text-white rounded-tr-[10px] rounded-tl-[10px] font-semibold md:text-2xl bottom-[100px] md:w-[672px] md:px-0 px-6 md:py-4 py-2 transition-all ease-in duration-200"
              >
                Pre - Incubation
              </button>
              {showPreInc ? (
                <div className="md:max-w-2xl border-4 border-[#046F7D] rounded-[5px] p-5">
                  <p className="text-center md:text-base text-[13px]">
                    <span className="font-semibold">Impact Palu</span>{" "}
                    Incubation Program is a 3-month tailored program to{" "}
                    <span className="font-semibold">
                      grow potential ideation-stage social enterprises
                    </span>{" "}
                    in Palu, Central Sulawesi.
                  </p>
                  <ul className="md:text-base text-[10px] flex justify-evenly gap-10 my-6 text-center">
                    <li className="flex flex-col items-center gap-2">
                      <div className="md:w-full w-[40px]">
                        <Image src={capacity} alt="capacity-building program" />
                      </div>
                      capacity-building program
                    </li>
                    <li className="flex flex-col items-center gap-2">
                      <div className="md:w-full w-[40px]">
                        <Image
                          src={entrepreneur}
                          alt="entrepreneurial journey"
                        />
                      </div>
                      entrepreneurial journey
                    </li>
                    <li className="flex flex-col items-center gap-2">
                      <div className="md:w-full w-[40px]">
                        <Image src={personalDev} alt="personal development" />
                      </div>
                      personal development
                    </li>
                  </ul>
                  <div className="flex md:justify-end justify-center md:mr-6">
                    <Link href={"http://bit.ly/impactincubationform"}>
                      <a target={"_blank"}>
                        <button className="bg-[#046F7D] hover:bg-[#046370] text-white md:px-6 px-3 py-2 font-medium md:text-sm text-[13px] rounded-[5px] transition-all ease-in duration-200">
                          Apply Now
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex justify-center flex-col mt-3">
            <div className="flex flex-col items-center my-2 relative">
              <button
                onClick={handleShowImpact}
                className="relative top-1 bg-[#046F7D] hover:bg-[#046370] text-white rounded-tr-[10px] rounded-tl-[10px] font-semibold md:text-2xl bottom-[100px] md:w-[672px] md:px-0 px-6 md:py-4 py-2 transition-all ease-in duration-200"
              >
                Impact Incubation
              </button>
              {showImpact ? (
                <div className="max-w-2xl border-4 border-[#046F7D] rounded-[5px] px-6 py-5">
                  <p className="text-center md:text-base text-[13px]">
                    A 5-month{" "}
                    <span className="font-semibold">incubation program</span>{" "}
                    designed to help early-stage businesses in Palu and nearby
                    cities improve their business model and grow their impact.
                    By focusing on sustainability and social impact, the program
                    aims to create more social enterprises to support
                    sustainable transitions in Eastern Indonesia.
                  </p>
                  <p className="text-center md:text-base text-[13px]">
                    Take advantage of technical assistance such as{" "}
                    <span className="font-semibold">
                      workshops, 1-on-1 mentoring and access to potential
                      funding and market opportunities
                    </span>
                    .
                  </p>
                  <ul className="md:text-base text-[10px] flex justify-evenly md:gap-20 gap-10 my-6 mx-2 text-center">
                    <li className="flex flex-col items-center gap-2">
                      <div className="md:w-full w-[40px]">
                        <Image
                          src={workshop}
                          alt="Intensive Workshop and Mentoring"
                        />
                      </div>
                      Intensive Workshop and Mentoring
                    </li>
                    <li className="flex flex-col items-center gap-2">
                      <div className="md:w-full w-[40px]">
                        <Image
                          src={funding}
                          alt="Access to potential funding opportunities"
                        />
                      </div>
                      Access to potential funding opportunities
                    </li>
                    <li className="flex flex-col items-center gap-2">
                      <div className="md:w-full w-[40px]">
                        <Image src={demoDay} alt="Demo Day" />
                      </div>
                      Demo Day
                    </li>
                  </ul>
                  <div className="flex md:justify-end justify-center md:mr-6">
                    <Link href={"http://bit.ly/impactincubationform"}>
                      <a target={"_blank"}>
                        <button className="bg-[#046F7D] hover:bg-[#046370] text-white md:px-6 px-3 py-2 font-medium md:text-sm text-[13px] rounded-[5px] transition-all ease-in duration-200">
                          Apply Now
                        </button>
                      </a>
                    </Link>
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
