import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useInView } from "react-intersection-observer";
import "react-circular-progressbar/dist/styles.css";

const skills = [
  { name: "Creativity", percentage: 80 },
  { name: "Communication", percentage: 65 },
  { name: "Problem Solving", percentage: 75 },
  { name: "Teamwork", percentage: 85 },
];

const Skill = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [animationValues, setAnimationValues] = useState(
    skills.map(() => 0)
  );

  useEffect(() => {
    if (inView) {
      const intervalIds = [];
      skills.forEach((skill, index) => {
        let currentPercentage = 0;
        const intervalId = setInterval(() => {
          if (currentPercentage < skill.percentage) {
            currentPercentage++;
            setAnimationValues((prev) => {
              const newValues = [...prev];
              newValues[index] = currentPercentage;
              return newValues;
            });
          } else {
            clearInterval(intervalId);
          }
        }, 10);
        intervalIds.push(intervalId);
      });

      return () => intervalIds.forEach(clearInterval);
    }
  }, [inView]);

  return (
    <div id="skills" className="relative overflow-hidden min-h-[600px] flex flex-col justify-center items-center px-4 sm:px-8">
      {/* Hero Section */}
      <div className="container pb-8">
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl font-bold font-patua_one mb-4 text-gray-900"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            My <span className="text-[#12867F]">Skills</span>
          </h2>
          <p
            className="text-lg sm:text-xl text-[#4E635C] font-patua_one max-w-xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            I focus on building and designing reliable e-commerce websites, using modern tools and frameworks to create smooth and visually engaging user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        {/* Skills List */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4">
          {[
            "PHP Programming",
            "Laravel Framework",
            "PhpMyAdmin",
            "JavaScript Programming",
            "Bootstrap",
            "jQuery",
            "Shopify",
            "Three.js",
            "Tailwind CSS",
            "CSS",
            "HTML",
            "Figma",
            "React",
            "Node.js",
            "GraphiQL",
          ].map((skill, index) => (
            <div
              key={index}
              className="relative group rounded-full border border-[#12867F] px-6 py-2 transition-transform text-[#4E635C] duration-300 hover:scale-105 hover:bg-[#12867F] hover:text-white"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={`${300 + index * 50}`}
              aria-label={`Skill: ${skill}`}
            >
              <h2 className="text-sm sm:text-base font-patua_one text-[#4E635C] group-hover:text-white">
                {skill}
              </h2>
              {/* Tooltip */}
              <span className="absolute hidden group-hover:block bg-gray-700 text-white text-xs rounded-lg px-2 py-1 left-1/2 transform -translate-x-1/2 mt-2">
                Average skill in {skill}
              </span>
            </div>
          ))}
        </div>

          {/* Circular Progress Section */}
          <div
            ref={ref}
            className="w-full flex flex-wrap justify-center gap-8"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            {skills.map((skill, index) => (
              <div key={index} className="w-24 sm:w-32 text-center">
                <CircularProgressbar
                  value={animationValues[index]}
                  text={`${animationValues[index]}%`}
                  styles={buildStyles({
                    textColor: "#12867F",
                    pathColor: "#12867F",
                    trailColor: "#e5e7eb",
                    textSize: "14px",
                  })}
                />
                <p className="mt-2 font-medium text-[#4E635C] font-patua_one">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
