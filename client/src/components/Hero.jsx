import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

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
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-24 pt-24 pb-12">
      <div className="grid lg:grid-cols-2 z-10 items-center w-full max-w-7xl pl-10 mx-auto">
        <div className="space-y-8">
          <h1
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Aayush
            </span>{" "}
            Ghimire
          </h1>
          <p className="text-lg typewriter w-fit overflow-hidden md:text-2xl text-purple-300/90">
            MERN Stack | Full Stack Developer
          </p>
          <div>
            <button
              onClick={()=>window.open("https://wa.me/9810534413", "_black")}
              data-aos="fade-up"
              data-aos-duration="1000"
              className="hire-btn"
            >
              Hire Me
            </button>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="absolute dark:bg-[#0F0F0F] opacity-60 -z-10 left-[10px]"
        >
          <img
            className="w-full h-[500px] object-contain rounded-2xl shadow-2xl"
            src={logo}
            alt="Aayush Ghimire"
            style={{ transform: `scale(${scale})` }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 fixed right-[3%] justify-center items-center">
        <a
          href="https://www.linkedin.com/in/aayushghimire/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl text-white hover:text-gray-500 transition-all" />
        </a>
        <a
          href="https://github.com/AyushGhimire077"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl text-white hover:text-gray-500 transition-all" />
        </a>
        <button className="text-2xl text-white hover:text-gray-500 transition-all">
          <a
            href="https://x.com/aayushghimiree"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
