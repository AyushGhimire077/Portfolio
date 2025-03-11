import React from "react";

const TechStack = () => {
  // Frontend skills
  const frontendSkills = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Redux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://www.vikingsoftware.com/wp-content/uploads/2024/02/TypeScript.png", 
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
  ];

  // Backend skills
  const backendSkills = [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "MySql",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
  ];

  const SkillBox = ({ title, skills }) => (
    <div
      className="bg-gray-800 p-6 mx-4 sm:mx-10 rounded-xl border border-gray-700 shadow-xl transition-all hover:border-blue-500"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h3 className="text-lg sm:text-2xl font-bold text-white mb-6">{title}</h3>
      <div className="grid grid-cols-2 gap-4 z-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg transition-all"
            data-aos="zoom-in"
            data-aos-delay={300 + index * 100}
          >
            <img
             className={`w-11 h-11 sm:w-16 sm:h-16  transition-all`} 
              src={skill.icon}
              alt={skill.name}
            />
            <p className="text-gray-300 text-[15px] sm:text-lg font-medium mt-3.5 sm:mt-4">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 px-6 lg:px-24 text-white">
      <h2
        className="text-2xl sm:text-4xl font-bold pl-[12%] sm:pl-16 mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
        data-aos="zoom-in"
      >
        Tech Stack
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <SkillBox title="Frontend" skills={frontendSkills} />
        <SkillBox title="Backend" skills={backendSkills} />
      </div>
    </section>
  );
};

export default TechStack;
