"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Code,
  PenTool,
  Server,
  Cloud,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: <Globe className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Web Development",
    description:
      "Building full-stack applications with modern web standards for a seamless user experience.",
    points: [
      "Custom Web Apps",
      "Progressive Web Apps",
      "Single Page Applications",
    ],
    themeColor: "violet",
  },
  {
    icon: <Smartphone className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Responsive Design",
    description:
      "Crafting mobile-first, adaptive layouts that work flawlessly on all devices and screen sizes.",
    points: [
      "Mobile Optimization",
      "Cross-Browser Compatibility",
      "Touch-Friendly Interfaces",
    ],
    themeColor: "pink",
  },
  {
    icon: <Code className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Frontend Development",
    description:
      "Developing interactive and high-performance UIs using modern frontend frameworks.",
    points: ["React.js & Next.js, Laravel", "Tailwind CSS & Bootstarp ", "API Integration"],
    themeColor: "green",
  },
  {
    icon: <PenTool className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "UI/UX Implementation",
    description:
      "Translating modern Figma designs into pixel-perfect, responsive React components.",
    points: ["Figma to React", "Component Libraries", "Animations & Transitions"],
    themeColor: "orange",
  },
  {
    icon: <Server className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Backend Development",
    description:
      "Creating scalable backend solutions with Node.js, Express.js, MongoDB , Laravel and MySQL.",
    points: ["RESTful API Development", "MongoDB Schema Design", "JWT Authentication"],
    themeColor: "purple",
  },
  {
    icon: <Cloud className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Cloud Deployment",
    description:
      "Seamless deployment and management of full-stack apps on modern cloud platforms.",
    points: ["Vercel & Netlify", "CI/CD Workflows", "Production Optimization"],
    themeColor: "red",
  },
];

// --- সমাধান: প্রতিটি রঙের জন্য স্টাইল ম্যাপ তৈরি করা হয়েছে ---
const themeStyles = {
  violet: {
    border: "border-violet-500/30",
    gradientIndicator: "bg-gradient-to-b from-violet-500 to-violet-400",
    gradientIcon: "bg-gradient-to-br from-violet-500 to-violet-400",
    text: "text-violet-400",
    bg: "bg-violet-500/10",
    shadow: "shadow-violet-500/20",
  },
  pink: {
    border: "border-pink-500/30",
    gradientIndicator: "bg-gradient-to-b from-pink-500 to-pink-400",
    gradientIcon: "bg-gradient-to-br from-pink-500 to-pink-400",
    text: "text-pink-400",
    bg: "bg-pink-500/10",
    shadow: "shadow-pink-500/20",
  },
  green: {
    border: "border-green-500/30",
    gradientIndicator: "bg-gradient-to-b from-green-500 to-green-400",
    gradientIcon: "bg-gradient-to-br from-green-500 to-green-400",
    text: "text-green-400",
    bg: "bg-green-500/10",
    shadow: "shadow-green-500/20",
  },
  orange: {
    border: "border-orange-500/30",
    gradientIndicator: "bg-gradient-to-b from-orange-500 to-orange-400",
    gradientIcon: "bg-gradient-to-br from-orange-500 to-orange-400",
    text: "text-orange-400",
    bg: "bg-orange-500/10",
    shadow: "shadow-orange-500/20",
  },
  purple: {
    border: "border-purple-500/30",
    gradientIndicator: "bg-gradient-to-b from-purple-500 to-purple-400",
    gradientIcon: "bg-gradient-to-br from-purple-500 to-purple-400",
    text: "text-purple-400",
    bg: "bg-purple-500/10",
    shadow: "shadow-purple-500/20",
  },
  red: {
    border: "border-red-500/30",
    gradientIndicator: "bg-gradient-to-b from-red-500 to-red-400",
    gradientIcon: "bg-gradient-to-br from-red-500 to-red-400",
    text: "text-red-400",
    bg: "bg-red-500/10",
    shadow: "shadow-red-500/20",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];
  const activeTheme = themeStyles[activeService.themeColor];

  return (
    <section className="overflow-hidden" aria-labelledby="services-title">
      <div className="container mx-auto px-4 lg:px-20">
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
              id="services-title"
              className="text-4xl lg:text-5xl font-bold text-center text-pry"
            >
              My Expert <span className="text-violet-500"> Services</span>
            </h2>
            <div className="w-[2px] h-12 bg-violet-500"></div>
          </div>
          <p className="text-sm my-6 max-w-3xl mx-auto leading-relaxed">
            I provide a wide range of services to turn your ideas into reality.
            Here's how I can help you succeed.
          </p>
        </motion.header>

        <div className="hidden lg:flex flex-col lg:flex-row gap-10 lg:gap-16 min-h-[450px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-3 lg:w-1/3"
          >
            {services.map((service, index) => (
              <button
                key={service.title}
                onClick={() => setActiveIndex(index)}
                className={`relative text-left w-full p-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 ${
                  activeIndex === index
                    ? `bg-gray-900/50 shadow-lg ${
                        themeStyles[service.themeColor].border
                      }`
                    : "hover:bg-gray-800/60 border border-transparent"
                }`}
              >
                {activeIndex === index && (
                  <motion.div
                    layoutId="active-service-indicator"
                    className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-xl ${
                      themeStyles[service.themeColor].gradientIndicator
                    }`}
                  />
                )}
                <span
                  className={`text-xl font-semibold transition-colors duration-300 pl-4 ${
                    activeIndex === index
                      ? themeStyles[service.themeColor].text
                      : "text-gray-300"
                  }`}
                >
                  {service.title}
                </span>
              </button>
            ))}
          </motion.div>

          <div className="lg:w-2/3 relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`w-full p-8 rounded-2xl border border-gray-700 shadow-xl backdrop-blur-md ${activeTheme.bg}`}
              >
                <div
                  className={`mb-6 inline-block p-4 rounded-full shadow-md border border-white/10 ${activeTheme.gradientIcon}`}
                >
                  {activeService.icon}
                </div>
                <h3 className="text-3xl font-extrabold mb-4 text-white">
                  {activeService.title}
                </h3>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  {activeService.description}
                </p>
                <ul className="space-y-4">
                  {activeService.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i + 0.3 }}
                      className="flex items-start gap-4"
                    >
                      <CheckCircle2
                        className={`w-6 h-6 flex-shrink-0 ${activeTheme.text}`}
                      />
                      <span className="text-lg text-gray-300">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const serviceTheme = themeStyles[service.themeColor];
            return (
              <motion.div
                key={index}
                className="group relative flex flex-col p-6 rounded-2xl backdrop-blur-sm border border-gray-800 transition-all duration-300 hover:border-violet-500 hover:shadow-2xl hover:shadow-violet-500/10 transform hover:-translate-y-2"
                variants={cardVariants}
              >
                <div
                  className={`mb-5 p-4 rounded-xl inline-flex self-start text-white shadow-lg ${serviceTheme.gradientIcon} ${serviceTheme.shadow}`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2
                        className={`w-5 h-5 flex-shrink-0 ${serviceTheme.text}`}
                      />
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}