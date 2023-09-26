import { motion } from "framer-motion";
import Head from "next/head";

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
      id="about" 
      className="h-fit bg-[#1a154b] flex flex-col pt-16 md:pt-24 space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <h1 className="font-na text-2xl  md:text-5xl pl-4 md:pl-10 text-[#F7FFF7]">About TEDx</h1>
      <div className="grid grid-cols-1 gap-6 md:gap-6 pb-6 p-4 md:pl-10 md:pr-10">
        <p className="text-justify md:text-2xl font-js text-white">TEDx represents a global phenomenon, a testament to the power of ideas, and a platform that transcends boundaries. Born out of the renowned TED (Technology, Entertainment, Design) conference, TEDx is a worldwide program that empowers local communities and organizations to independently host events that emulate the spirit of TED Talks. TEDx events are designed to create environments where diverse groups of people can gather, share their stories, exchange ideas, and inspire change.</p>
        <p className="text-justify md:text-2xl font-js text-white">At the heart of every TEDx event are the speakers. These thought leaders, visionaries, and experts come together to deliver impactful talks that explore a wide array of topics and subjects. From science and technology to the arts and humanities, TEDx speakers have the unique ability to captivate audiences, spark conversations, and leave lasting impressions.</p>
      </div>

      <h1 className="font-na text-2xl md:text-5xl pl-4 md:pl-10 text-[#F7FFF7]">About TEDx SriSairamEngineeringCollege</h1>
      <div className="grid grid-cols-1 gap-6 md:gap-10 pb-6 p-4 md:pl-10 md:pr-10">
        <p className="text-justify md:text-2xl font-js text-white">TEDxSriSairamEngineeringCollege is a local manifestation of the TEDx movement, driven by a passionate and dynamic team of students, faculty members, and staff at Sri Sairam Engineering College. Our mission is to amplify the voice of innovative thinkers and creative minds within our community. We believe that ideas have the power to shape the world, and our event serves as a platform for these ideas to flourish.</p>
        <p className="text-justify md:text-2xl font-js text-white">Our journey began with the aspiration to foster a culture of curiosity and discovery. Through TEDxSriSairamEngineeringCollege, we aim to provide a stage for individuals who have a unique perspective on the world, who are pushing boundaries, and who are devoted to making a difference. Our event is more than just a gathering; it's an embodiment of our commitment to learning, exploration, and transformation. We are thrilled to announce that this year marks our 9th edition of TEDx, having previously hosted renowned speakers such as Rukmini Vijaykumar, Hip Hop Adhi, Madan Gowri, Arivu, Anukreethy Vas, Sathyaprakash, Rithika Singh, and many more.</p>
      </div>

      <h1 className="font-na text-2xl md:text-5xl pl-4 md:pl-10 text-[#F7FFF7]">Our Theme - "Shaping the Future"</h1>
      <div className="grid grid-cols-1 gap-6 md:gap-10 pb-6 p-4 md:pl-10 md:pr-10">
        <p className="text-justify md:text-2xl font-js text-white">The theme for TEDxSriSairamEngineeringCollege is "Shaping the Future." We chose this theme because we firmly believe that the future is not a predetermined path but a canvas upon which we can all leave our mark. It is a theme that invites us to explore the limitless potential that exists within each of us to actively shape the world around us.</p>
        <p className="text-justify md:text-2xl font-js text-white mb-6">Our event will be a deep dive into the multifaceted aspects of "Shaping the Future." It's a theme that encompasses the exploration of emerging technologies that will revolutionize industries, the pursuit of sustainability to protect our planet, the commitment to social justice to create a fairer society, and the dedication to education to empower future generations. Through engaging talks and insightful discussions, we aim to inspire and empower our audience to be proactive architects of the future.</p>
      </div>

      
      </motion.section>
      </>
  );
};

export default About;
