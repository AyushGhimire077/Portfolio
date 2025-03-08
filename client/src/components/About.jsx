import React from "react";

const About = () => {
return (
    <section className="relative z-10 text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl flex flex-col justify-start text-start ml-20 space-y-8">

      <div data-aos='fade-up' data-aos-duration="1000" className="space-y-6 text-lg text-gray-300/90 leading-relaxed">
        <p className="text-3xl font-bold">Hi, I'm Aayush</p>
          <p  >
          <span className="font-semibold text-white"></span>A passionate{' '}
            <span className="font-medium">MERN Stack Developer</span> with hands-on experience in building <br/>full-stack applications. I specialize in modern web frameworks, best practices,<br/> and backend development.
          </p>
          <p >
            I’ve worked on projects like e-commerce platforms, real-time chat applications,<br/> and college websites. My latest project,{' '}
            <span className="font-semibold text-white">MernChat-LiveChat</span>, enables strangers to <br/> chat in real-time with features like authentication, Cloudinary image uploads, and <br/> live typing indicators.
          </p>
          <p>
            I’m currently exploring{' '}
            <span className="font-medium text-purple-400">TypeScript</span> for backend development and looking to collaborate <br/>with frontend developers on exciting projects!
          </p>
        </div>
        <div className="mt-8" data-aos='fade-up' data-aos-duration="1000">
          <a
            href="https://linkedin.com/in/ayushghimiree"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gray-600 text-white px-8 py-3 rounded-full text-lg hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Connect with Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
