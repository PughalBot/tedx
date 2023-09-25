import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu toggle

  const handleScroll = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <div className=" font-hj  p-2 mx-4 md:p-2 sticky rounded-full top-1 z-10 bg-[#db1068] border-white border-2">
      <div className="flex justify-between">
        {/* Desktop navbar items */}
        <ul className={`flex space-x-4 w-full text-lg pl-4 pr-4 md:pl-8 md:pr-8 justify-between md:flex`}>
          <li>
            <button onClick={() => handleScroll("hero")} className="text-xl md:text-3xl text-white">Home</button>
          </li>
          <li>
            <button onClick={() => handleScroll("about")} className="text-xl md:text-3xl text-white">About</button>
          </li>
          <li>
            <button onClick={() => handleScroll("services")} className="text-xl md:text-3xl text-white">RSVP</button>
          </li>
          <li>
            <button onClick={() => handleScroll("contact")} className="text-xl md:text-3xl text-white">Contact</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
