import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles

const Project = () => {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-20 z-20 px-6 lg:px-24 text-white">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Recent Projects
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* Ecommerce Project */}
        <div
          className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-blue-400/30 transition-all duration-300"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h2 className="text-xl sm:text-3xl font-bold text-white mb-6">
            Ecommerce Website
          </h2>
          <p className="text-[14px] sm:text-lg text-gray-300 mb-6">
            Full-featured modern ecommerce platform with secure authentication
            and order tracking.
          </p>

          <div className="mb-8">
            <h3 className="text-[16px] sm:text-xl font-semibold text-purple-400 mb-4">
              Key Features
            </h3>
            <ul className="space-y-3">
              {[
                "JWT Authentication",
                "Password Management",
                "Email Verification",
                "Order Tracking",
                "Payment Integration",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                >
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Live Chat Project */}
        <div
          className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-purple-400/30 transition-all duration-300"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <h2 className="text-lg sm:text-3xl font-bold text-white mb-6">
            Live Chat Application
          </h2>
          <p className="text-[14px] sm:text-lg text-gray-300 mb-6">
            Real-time messaging platform with modern features and responsive
            design.
          </p>

          <div className="mb-8">
            <h3 className="text-[16px] sm:text-xl font-semibold text-blue-400 mb-4">
              Key Features
            </h3>
            <ul className="space-y-3">
              {[
                "Real-time Messaging",
                "User Authentication",
                "Message History",
                "Delete Conversation",
                "Store Messages DB",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
