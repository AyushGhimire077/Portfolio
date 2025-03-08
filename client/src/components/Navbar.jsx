import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import myQR from '../assets/myQr.jpeg'

const Navbar = () => {

  const [isShow, setIsShow] = useState(true);
  const [showScanner, setShowScanner] = useState(false)
  
  const handleRemove=() => {
    setIsShow(!isShow);
    setShowScanner(false)
  }
  

  return (
    <nav className="fixed top-0 w-full px-6 lg:px-28 py-4 flex items-center justify-between backdrop-blur-lg bg-[#0F0F0F]/95 border-b border-[#252525] z-50">
      <h1
        onClick={() => window.scrollTo(0, 0)}
        className="text-3xl cursor-pointer font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
      >
        AG
      </h1>
      <div className="flex gap-12">
        {isShow && (
        <button onClick={()=>setShowScanner(!showScanner)} class="bg-gray-800 text-white py-2 px-5 rounded-lg font-semibold text-base hover:bg-gray-700 focus:outline-none transform hover:scale-105 transition-all duration-300 shadow-md">
          Donate via eSewa
        </button>
        )}

        {showScanner && (
          <div className="fixed top-[14%] right-[10%] w-[400px] h-[400px] flex items-center justify-center bg-black bg-opacity-50 z-50">
            <img src={myQR} alt="QR Code" className="w-auto h-auto" />
          </div>
        )}

        <button className="p-2 rounded-lg hover:bg-[#1A1A1A] transition-colors duration-200">
          <span className="text-2xl text-white text-normal cursor-pointer" onClick={handleRemove} > {isShow ? <FaTimes /> : <FaBars/>}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
