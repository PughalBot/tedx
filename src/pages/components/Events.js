import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <>
    <Head>
        <meta name="description" content="Crowdento is an Event management company that excels in crafting unforgettable events. Merging local traditions with modern flair, we orchestrate experiences that resonate. Driven by precision and creativity, we're redefining gatherings in Chennai."/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        
        <link rel='icon' href='/cc1.png' />
        <title>Crowdento Events</title>
    </Head>
    <motion.section 
      id="services" 
      className="h-screen bg-[#2c1262] flex flex-col pt-16 md:pt-24 justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <h1 className="font-hj text-5xl md:text-6xl font-medium text-white">Get Your tickets</h1>
      <p className="font-js text-[#db1068] text-xs md:text-xl text-center w-11/12 md:w-4/6 pb-4">Ready to embark on a journey of profound ideas? Secure your spot at our upcoming TEDx event by clicking the RSVP button below.</p>
      <button className="px-4 py-2 bg-[#db1068] text-center rounded-full font-bold text-lg text-white font-sg">
      RSVP NOW!!
      </button>
      </motion.section>
      </>
  );
};

export default About;
