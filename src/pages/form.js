import { useState } from "react";
import { motion } from "framer-motion";

function FormPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-8 max-w-md mx-auto mt-16 bg-white shadow-lg rounded required">
      <form action="https://docs.google.com/forms/d/e/1FAIpQLScTAT3t-z4a_spCLHZjQnjBf1_4wYdCK-XYKcwF7xmCfKfG9A/formResponse" >
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input type="text" name="entry.1512446941" className="w-full p-2 border rounded required" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Year</label>
          <select name="entry.586898713" className="w-full p-2 border rounded required">
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="III">IV</option>
            
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Department</label>
          <select name="entry.374063172" className="w-full p-2 border rounded required">
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
        <div className="mb-4">
          <label className="block mb-2">Section</label>
          <select name="entry.1292046826" className="w-full p-2 border rounded required">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input type="email" name="entry.663978457" className="w-full p-2 border rounded required" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Phone</label>
          <input type="text" name="entry.116614212" className="w-full p-2 border rounded required" />
        </div>
        
        {/* ... More fields for section, email, phone ... */}
        <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded required">
          Submit
        </button>
      </form>
    </motion.div>
  );
}

export default FormPage;
