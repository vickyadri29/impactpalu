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
import Events from "../components/Events";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Impact Palu!</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
        />
      </Head>
      <div className="font-poppins">
        <Navbar />
        <HeaderContent />
        <About />
        <Programs />
        <IpImages />
        <Events />
        <Partners />
        <Footer />
      </div>
    </>
  );
}
