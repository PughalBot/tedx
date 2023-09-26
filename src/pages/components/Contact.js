import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

const Contact = () => {
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
      id="contact" 
      className="h-fit bg-white pt-16  md:pt-24 flex flex-col items-center  space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 1 }}
    >
      <h1 className="font-hj text-5xl text-[#db1068]">Contact Us</h1>
      <p className="font-js md:text-xl text-center text-[#1a154b] w-11/12 lg:w-2/5">If you have any questions or would like more information about our services, please feel free to contact us. We're here to help!</p>
      
      <div className="grid grid-cols-4 gap-4 md:gap-10 md:pt-10">

        <Link href="tel:+919840457238" target="_blank">
        <div className="flex flex-col items-center ">
          <img src="/phone.png" alt="Phone" className=" w-6 md:w-10 h-auto" />
        </div>
        </Link>

        <Link href="mailto:tedxsairam2023@gmail.com" target="_blank">
        <div className="flex flex-col items-center">
          <img src="/email.png" alt="Phone" className="w-6 md:w-10 h-auto" />
        </div>
        </Link>

        <Link href="https://www.instagram.com/tedx_srisairamengclg_23" target="_blank">
        <div className="flex flex-col items-center">
          <img src="/insta.png" alt="Phone" className="w-6 md:w-10 h-auto" />
        </div>
        </Link>

        <Link href="https://wa.me/919840457238" target="_blank">
        <div className="flex flex-col items-center">
          <img src="/wap.png" alt="Phone" className="w-6 md:w-10 h-auto" />
        </div>
        </Link>
      </div>
      
      
      <div className="w-full bg-white px-2 py-2 items-center flex justify-center">
        <h1 className="text-[#db1068] text-xs md:text-sm font-medium">{`© ${new Date().getFullYear()} TedxSriSairamEngineeringCollege. All Rights Reserved.`}</h1>
      </div>
    </motion.section>
    </>
  );
};

export default Contact;
