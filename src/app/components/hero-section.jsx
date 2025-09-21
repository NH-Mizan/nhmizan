"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Facebook } from "lucide-react";

// A simple, self-contained component for social media icons
const SocialIcon = () => {
  const socialLinks = [
    {
      href: "https://github.com/NH-Mizan",
      icon: <Github size={24} />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/nh-mizan-63326b2b7/",
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
    },
    {
      href: "https://www.facebook.com/share/1H6uEk7zxc/",
      icon: <Facebook size={24} />,
      label: "Facebook",
    },
  ];

  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

// Custom hook to replicate the typewriter effect
const useTypewriter = ({
  words,
  loop = true,
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 2000,
}) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), delaySpeed);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    loop,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
  ]);

  return [text];
};

// Simple blinking cursor component
const Cursor = ({ cursorStyle = "_" }) => {
  return <span className="animate-ping">{cursorStyle}</span>;
};

// The main Hero Section component
export default function HeroSection() {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "Web Designer",
      "MERN Stack Developer",
      "Laravel Developer",
      "I build clean UI",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-20 px-4 lg:px-20 mt-6">
      {/* Left side content */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 0.8 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-violet-900/80 border border-violet-700 dark:border-violet-600 rounded-full text-xs sm:text-sm text-violet-200 dark:text-violet-300 backdrop-blur-sm hover:bg-violet-800 dark:hover:bg-white/20 transition-all duration-300">
          Welcome to my universe
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-des dark:text-gray-200">
          Hi, I am
        </h1>

        <span className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-pry ml-0 md:ml-10">
         MD Nahid Hasan Mizan
        </span>

        <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-pry dark:text-violet-400 flex justify-center md:justify-start items-center h-8">
          <span className="mr-2">{text}</span>
          <Cursor cursorStyle="_" />
        </h2>

        <p className="mt-3 max-w-xl text-lg sm:text-base text-des italic">
          “ I'm a Frontend-focused MERN Stack Developer passionate about
          building fast, responsive, and scalable web applications. Skilled in
          React.js, Next.js, Express.js, MongoDB, and Firebase, I craft
          intuitive UIs with Tailwind CSS, Shadcn UI, and Bootstrap while
          developing secure, efficient backends. Curious about modern UI/UX and
          performance optimization, I aim to contribute by delivering clean,
          impactful solutions and collaborating effectively in a team
          environment. ”
        </p>
        
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pro mt-8"
        >
          Download Resume <Download size={20} />
        </a>
        <div className="mt-6">
          <SocialIcon />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        className="lg:col-span-2 flex justify-center items-center"
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-violet-500/50"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-2 border-indigo-500/40"
            animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.img
            src="/profile.png"
            alt="nh mizan"
            className="w-full h-full object-cover rounded-full p-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
