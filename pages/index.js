import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Import Components
import Navbar from "../components/Navbar";
import HeaderComp from "../components/HeaderComp";

import waveHeader from "../assets/header/waveHeader.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Impact Palu!</title>
      </Head>
      <div className="font-poppins bg-gradient-to-b from-[#046F7D] to-[#008FA2]">
        <Navbar />
        <HeaderComp />
      </div>
      <Image src={waveHeader} alt="wave header" />
    </>
  );
}
