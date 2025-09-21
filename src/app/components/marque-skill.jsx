import { Icon } from "@iconify/react";
import React from "react";
const marqueeSkills1 = [
  { name: "React", icon: "logos:react", color: "#61DAFB" },
  { name: "Next.js", icon: "logos:nextjs-icon", color: "#FFFFFF" },
  { name: "JavaScript", icon: "logos:javascript", color: "#F7DF1E" },
  { name: "TypeScript", icon: "logos:typescript-icon", color: "#3178C6" },
  { name: "Node.js", icon: "logos:nodejs-icon", color: "#339933" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", color: "#06B6D4" },
  { name: "Firebase", icon: "logos:firebase", color: "#FFCA28" },
  { name: "MongoDB", icon: "logos:mongodb-icon", color: "#47A248" },
];

const marqueeSkills2 = [
  { name: "Express.js", icon: "skill-icons:expressjs-dark", color: "#FFFFFF" },
  { name: "Git", icon: "logos:git-icon", color: "#F05032" },
  { name: "Redux", icon: "logos:redux", color: "#764ABC" },
  { name: "Figma", icon: "logos:figma", color: "#F24E1E" },
  { name: "Vite", icon: "logos:vitejs", color: "#646CFF" },
  { name: "Redux", icon: "logos:redux", color: "#764ABC" },
  { name: "Figma", icon: "logos:figma", color: "#F24E1E" },
];

const Marquee = ({ skills, direction = "forwards" }) => {
  return (
    <div
      className="max-w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)",
      }}
    >
      <div
        className="w-max flex animate-marquee"
        style={{ animationDirection: direction }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center justify-center bg-gray-800/80 border border-gray-700/80 rounded-2xl text-white w-[120px] h-[120px] mx-2 transition-all duration-300 group hover:border-violet-500 hover:rotate-360"
          >
            <Icon
              icon={skill.icon}
              className="w-12 h-12 text-gray-300 group-hover:text-white transition-colors"
            />
            <span className="mt-2 text-xs text-gray-400 group-hover:text-violet-300 transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function MarqueeSkills() {
  return (
    <div className="w-full flex flex-col gap-y-6">
      <Marquee skills={marqueeSkills1} />
      <Marquee skills={marqueeSkills2} direction="reverse" />
    </div>
  );
}
