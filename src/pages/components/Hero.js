import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

// ... other imports

const Hero = () => {
  const text = "Crowdento is an Event management company that excels in crafting unforgettable events. Merging local traditions with modern flair, we orchestrate experiences that resonate. Driven by precision and creativity, we're redefining gatherings in Chennai.";

  const handleScroll = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });// Close mobile menu after clicking a link
  };
  
  
  return (
    <>
    {/* ... other code like Head */}
    <motion.div 
      id="hero" 
      className="h-screen bg-[#2c1262] flex flex-col items-center justify-center relative" // Added relative here
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 2 }}
    >
      <motion.div 
        className="bottom-4 h-screen flex flex-col items-center justify-center relative"
        whileHover={{ scale: 1.2, rotate: 360000 }}
        whileTap={{
          scale: 0.8,
          rotate: -360000,
          borderRadius: "100%"
        }}
      >
    <img src="/x.png" alt="Logo" className="md:h-5/6  w-auto" />      </motion.div>
    </motion.div>
    </>
  );
};

export default Hero;
