import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="py-20 z-20 px-6 lg:px-24 text-white">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Recent Projects
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* Resume Generator Project */}
        <div
          className="group bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-blue-400/30 transition-all duration-300"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-blue-400" />
            <h2 className="text-xl sm:text-3xl font-bold text-white">
              Resume Generator
            </h2>
          </div>
          <p className="text-[14px] sm:text-lg text-gray-300 mb-6">
            AI-powered web application that creates professional,
            handwritten-style resumes through natural language input. Features
            real-time preview and PDF export capabilities.
          </p>

          <div className="mb-8">
            <h3 className="text-[16px] sm:text-xl font-semibold text-purple-400 mb-4">
              Key Features
            </h3>
            <ul className="space-y-3">
              {[
                "GeminiAI Powered Generator",
                "Handwritten resume template",
                "Real-time preview",
                "PDF export functionality",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                >
                  <span className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="https://resume-generator-gamma-one.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2 bg-blue-600/20 border border-blue-400 rounded-lg hover:bg-blue-400/30 transition-colors group"
          >
            <span className="mr-2">Live Preview</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* ChatBot Project */}
        <div
          className="group bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-purple-400/30 transition-all duration-300"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-purple-400" />
            <h2 className="text-xl sm:text-3xl font-bold text-white">
              AI ChatBot
            </h2>
          </div>
          <p className="text-[14px] sm:text-lg text-gray-300 mb-6">
            Intelligent conversational agent with email automation capabilities.
            Features real-time interaction monitoring and contextual response
            generation.
          </p>

          <div className="mb-8">
            <h3 className="text-[16px] sm:text-xl font-semibold text-blue-400 mb-4">
              Key Features
            </h3>
            <ul className="space-y-3">
              {[
                "GroqAI integration",
                "Email automation",
                "Real-time interaction analytics",
                "Contextual memory",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="https://chatbot-one-teal-95.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2 bg-purple-600/20 border border-purple-400 rounded-lg hover:bg-purple-400/30 transition-colors group"
          >
            <span className="mr-2">Live Preview</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Other Projects Section */}
      <div className="max-w-7xl mx-auto mt-20">
        <h2
          className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center"
          data-aos="fade-up"
        >
          Other Notable Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Real-time Video Calling",
              description:
                "WebRTC-based video conferencing solution with screen sharing",
              tech: "React · WebRTC · Node.js · Socket.io",
              link: "#",
              name: "Video-Call",
            },
            {
              title: "E-commerce Platform",
              description:
                "Full-stack shopping platform with payment integration, live oder tracking and admin dashboard",
              tech: "React · Node.js · Cloudinary · MongoDB",
              link: "#",
              name: "DressAura-Ecommerce",
            },
            {
              title: "Chat Application",
              description:
                "Real-time messaging system with authentication and user profiles",
              tech: "Socket.io · MongoDB · React · Node.js",
              link: "#",
              name: "LiveChat",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              <p className="text-blue-400 text-xs font-mono mb-4">
                {project.tech}
              </p>
              <a
                href={`https://github.com/ayushghimire077/${project.name}`}
                className="text-sm text-purple-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* GitHub Section */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <p className="text-gray-400 mb-4">Explore more projects on GitHub:</p>
          <a
            href="https://github.com/ayushghimire077"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group"
          >
            <svg
              className="w-5 h-5 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-white">ayushghimire077</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
