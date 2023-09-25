import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
    <div className="bg-[#2c1262] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Contact />
    </div>
    </>
  );
}
