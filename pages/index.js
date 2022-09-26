import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Import Components
// import HeaderComps from "../components/HeaderComps";
import Navbar from "../components/Navbar";
import About from "../components/About";
import HeaderContent from "../components/HeaderContent";
import Programs from "../components/Programs";
import IpImages from "../components/IpImages";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Impact Palu!</title>
      </Head>
      <div className="font-poppins">
        <Navbar />
        <HeaderContent />
        <About />
        <Programs />
        <IpImages />
      </div>
    </>
  );
}
