import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxZoom = 2;
      const newScale = Math.min(1 + scrollY * 0.003, maxZoom);
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-24 -mt-9 sm:pt-24 pb-12">
      <div className="grid lg:grid-cols-2 z-10 items-center w-full max-w-7xl sm:pl-10 mx-auto">
        <div className="space-y-4 sm:space-y-8">
          <h1
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="sm:text-5xl md:text-6xl text-4xl font-bold text-white leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Aayush
            </span>{" "}
            Ghimire
          </h1>
          <p className="text-[16px] typewriter w-fit overflow-hidden md:text-2xl text-purple-300/90">
            MERN Stack | Full Stack Developer
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => window.open("https://wa.me/9810534413", "_black")}
              data-aos="fade-up"
              data-aos-duration="1000"
              className="hire-btn"
            >
              Hire Me
            </button>
            <button
              data-aos="fade-right"
              data-aos-duration="800"
              onClick={() => window.open('/MyResume.pdf', "_blank")}
              className="px-8 py-3 bg-gray-800 text-white rounded-2xl hover:bg-gray-700 focus:outline-none transform hover:scale-105 transition-all duration-300"
            >
              View CV
            </button>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="hidden sm:inline-block absolute bg-[#0F0F0F] -z-10 left-[2%]"
        >
          <img
            className="  w-full h-[500px] object-contain opacity-40 "
            src={logo}
            alt="Aayush Ghimire"
            style={{ transform: `scale(${scale})` }}
          />
        </div>
      </div>

      <div className="flex z-10 flex-col gap-5 fixed right-[5%] sm:right-[3%] justify-center items-center">
        <a
          href="https://www.linkedin.com/in/ayushghimiree"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-xl sm:text-2xl text-white hover:text-gray-500 transition-all" />
        </a>
        <a
          href="https://github.com/AyushGhimire077"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-xl sm:text-2xl text-white hover:text-gray-500 transition-all" />
        </a>
        <button className="text-xl sm:text-2xl text-white hover:text-gray-500 transition-all">
          <a
            href="https://x.com/aayushghimiree"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </button>
      </div>

      <div className="absolute top-[86%] right-[20%] h-6">
        <p>
          <FaArrowDown className="text-xl sm:text-3xl text-teal-500 hover:text-gray-500 transition-all" />
        </p>
      </div>
    </section>
  );
};

export default Hero;
