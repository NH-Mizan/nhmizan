"use client";
import React, { useEffect } from "react";

import OrbitingSkills from "./orbiting-skill";
import MarqueeSkills from "./marque-skill";

export default function SkillsSection() {
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 30s linear infinite;
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <div className="container mx-auto pt-10 px-6 lg:px-24">
        <div className="flex items-center justify-center gap-4">
          <div className="w-[3px] h-12 bg-violet-500"></div>

          <h2 className="text-4xl lg:text-5xl text-pry font-bold text-center">
            My Best <span className="text-violet-500">Skills</span> &{" "}
            <span className="text-violet-500">Technologies</span>
          </h2>

          <div className="w-[2px] h-12 bg-violet-500"></div>
        </div>

        <div className="flex flex-col items-center justify-center gap-12 lg:gap-8">
         

          <OrbitingSkills />

          <MarqueeSkills />
        </div>
      </div>
    </section>
  );
}
