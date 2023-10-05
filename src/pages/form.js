import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

function FormPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setSubmitted(true);
  };

  const handleIframeLoad = () => {
    if (submitted) {
      window.location.href = '/success';
    }
  };


  return (
    <>
    <Head>
        <meta name="description" content="TEDxSriSairamEngineeringCollege is a local manifestation of the TEDx movement, driven by a passionate and dynamic team of students, faculty members, and staff at Sri Sairam Engineering College. Our mission is to amplify the voice of innovative thinkers and creative minds within our community. We believe that ideas have the power to shape the world, and our event serves as a platform for these ideas to flourish."/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:image' content="/x.png"/>
        <link rel='icon' href='/x.png' />
        <title>RSVP Form</title>
    </Head>
    <div className="w-screen h-screen bg-[#2c1262] flex justify-center items-center">
    <img src="/x.png" alt="Logo" className=" opacity-75 md:h-full absolute w-auto" />
    <div className="p-4 bg-white w-11/12 bg-opacity-80 md:w-96 mx-auto shadow-3xl rounded-lg z-10 required">
    <script type="text/javascript">
        {`
          var submitted = ${submitted.toString()};
        `}
      </script>
      <iframe
        name="hiddenConfirm"
        id="hiddenConfirm"
        style={{ display: 'none' }}
        onLoad={handleIframeLoad}
      />
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLScTAT3t-z4a_spCLHZjQnjBf1_4wYdCK-XYKcwF7xmCfKfG9A/formResponse"
        method="post"
        target="hiddenConfirm"
        onSubmit={handleFormSubmit}
      >
        <div className="flex justify-center">
          <img src="/x.png" alt="Logo" className="h-16  w-auto" /> 
        </div> 
        <div className="mb-2">
          <label className="block text-[#db1068] font-js font-bold mb-2">Name</label>
          <input type="text" name="entry.1512446941" className="w-full p-2 rounded required" placeholder="Name"/>
        </div>
        <div className="mb-2">
          <label className="block text-[#db1068] font-js font-bold mb-2">Year</label>
          <select name="entry.586898713" className="w-full p-2 border-[#db1068] rounded required">
            <option value="">Select Year</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="III">IV</option>
            
          </select>
        </div>
        <div className="mb-2">
          <label className="block text-[#db1068] font-js font-bold mb-2">Department</label>
          <select name="entry.374063172" className="w-full p-2 border-[#db1068] rounded required">
            <option value="">Select Department</option>
            <option value="AIDS">AIDS</option>
            <option value="CSBS">CSBS</option>
            <option value="EEE">EEE</option>
            <option value="ECE">ECE</option>
            <option value="IT">IT</option>
            <option value="CSE">CSE</option>
            <option value="MECH">MECH</option>
            <option value="S&H">S&H</option>
            <option value="ICE">ICE</option>
            <option value="EIE">EIE</option>
            <option value="CIVIL">CIVIL</option>
            <option value="CSE with AIML">CSE with AIML</option>
            <option value="CSE with IOT">CSE with IOT</option>
            <option value="MBA">MBA</option>
            <option value="MECH Automation">MECH Automation</option>
            <option value="M.Tech CSE">M.Tech CSE</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block text-[#db1068] font-js font-bold mb-2">Section</label>
          <select name="entry.1292046826" className="w-full p-2 border-[#db1068] rounded required">
            <option value="">Select Section</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block text-[#db1068] font-js font-bold mb-2">Email</label>
          <input type="email" name="entry.663978457" className="w-full p-2 border-[#db1068] rounded required" placeholder="example@example.com" />
        </div>
        <div className="mb-2">
          <label className="block text-[#db1068] font-js font-bold mb-2">Phone</label>
          <input type="text" name="entry.116614212" className="w-full p-2 border-[#db1068] rounded required" placeholder="+91XXXXXXXXX"/>
        </div>
        <div className="mb-2">
          <label className="block text-[#db1068] font-js font-bold mb-2">Pass Type</label>
          <select name="entry.23137580" className="w-full p-2 border-[#db1068] rounded required">
            <option value="">Select Section</option>
            <option value="General Pass">General Pass</option>
            <option value="Gold Pass">Gold Pass</option>
          </select>
        </div>
        <div className="flex justify-center">
        <button type="submit" className="mt-4 bg-[#db1068] font-js text-white font-bold py-2 px-4 rounded required">
          Submit
        </button>
        </div>
      </form>
    </div>
    </div>
    </>
  );
}

export default FormPage;
