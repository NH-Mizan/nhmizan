"use client";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    {
      title: "Diploma in Engineering - Computer Science & Technology",
      institution: "Dinajpur Polytechnic Institute, Dinajpur",
      session: "2022 - 2023",
      description:
        "Explored the core areas of computer science, from DSA and OOP to full-stack web development, with a strong focus on creating impactful and scalable applications that bridge theory with real-world solutions.",
    },
    {
      title: "Secondary School Certificate (SSC) - Science",
      institution: "Rumchondropur Govt Model Pilot Hight School, Kaharol , Dinajpur ",
      session: "Passing Year: 2022",
      description:
        "Completed secondary education with a strong foundation in Science, developing critical thinking and communication skills.",
    },
   
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="education"
      className="container mx-auto mb-20 px-4 sm:px-6 lg:px-20 text-white"
    >
      
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-center"
      >
        <div className="flex items-center justify-center gap-4">
          <div className="w-[2px] h-12 bg-violet-500"></div>

          <h2
            id="education-title"
            className="text-4xl lg:text-5xl font-bold text-center text-pry"
          >
            Educational <span className="text-violet-500"> Journey</span>
          </h2>

          <div className="w-[2px] h-12 bg-violet-500"></div>
        </div>

        <p className="text-sm max-w-3xl mx-auto leading-relaxed my-6 text-des">
          My academic path has provided a strong foundation in both technical
          and analytical skills.
        </p>
      </motion.header>

      <motion.div
        className="flex flex-col md:flex-row gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="relative w-full pl-12"
            variants={itemVariants}
          >
       
            <div className="absolute left-4 top-0 h-full w-0.5 bg-violet-500/30"></div>

 
            <div className="absolute left-4 top-0 -translate-x-1/2 flex items-center justify-center w-8 h-8 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full ring-8 ring-gray-950 z-10">
              <GraduationCap className="text-white text-base" />
            </div>

            <div className="h-full p-6 bg-slate-800/50 backdrop-blur-md rounded-xl shadow-lg border border-slate-700 transition-all duration-300 ease-in-out hover:shadow-violet-500/10 hover:border-violet-500/40 hover:scale-[1.02]">
              <span className="text-sm font-semibold text-violet-300 bg-violet-500/20 py-1 px-3 rounded-full inline-block">
                {edu.session}
              </span>

              <h3 className="text-xl font-bold text-slate-100 mt-3">
                {edu.title}
              </h3>
              <p className="text-md text-slate-300 mt-1">{edu.institution}</p>

              {edu.description && (
                <p className="text-slate-400 mt-4 text-sm">{edu.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
