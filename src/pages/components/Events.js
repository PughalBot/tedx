import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <>
    <Head>
    <meta name="description" content="TEDxSriSairamEngineeringCollege is a local manifestation of the TEDx movement, driven by a passionate and dynamic team of students, faculty members, and staff at Sri Sairam Engineering College. Our mission is to amplify the voice of innovative thinkers and creative minds within our community. We believe that ideas have the power to shape the world, and our event serves as a platform for these ideas to flourish."/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:image' content="/x.png"/>
        <link rel='icon' href='/x.png' />
        <title>TedxSriSairamEngineeringCollege</title>
    </Head>
    <motion.section 
      id="services" 
      className="h-screen bg-[#2c1262] flex flex-col pt-16 md:pt-24 justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <h1 className="font-hj text-5xl md:text-6xl font-medium text-white">Get Your tickets</h1>
      <p className="font-js text-[#db1068] text-xs md:text-xl text-center w-11/12 md:w-4/6 pt-2 pb-4">Ready to embark on a journey of profound ideas? Secure your spot at our upcoming TEDx event by clicking the RSVP button below.</p>
      <Link href="https://rzp.io/l/XGtfPcNaB">
      <button className="px-4 py-2 bg-[#db1068] text-center rounded-full font-bold text-lg text-white font-sg">
      RSVP NOW!!
      </button>
      </Link>
      </motion.section>
      </>
  );
};

export default About;
