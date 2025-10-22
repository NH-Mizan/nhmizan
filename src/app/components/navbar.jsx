"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Home,
  Code,
  FolderGit2,
  Briefcase,
  FileText,
  Github,
  Linkedin,
  Mail,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "heroSection", icon: <Home size={18} />, scroll: true },
    { name: "Skills", path: "skillsSection", icon: <Code size={18} />, scroll: true },
    { name: "Projects", path: "projectsSection", icon: <FolderGit2 size={18} />, scroll: true },
    { name: "Services", path: "servicesSection", icon: <Briefcase size={18} />, scroll: true },
    { name: "Contact", path: "contactSection", icon: <PhoneCall size={18} />, scroll: true },
    { name: "Resume", path: "/resume", icon: <FileText size={18} />, scroll: false },
  ];

  const socialLinks = [
    { name: "GitHub", path: "https://github.com/NH-Mizan", icon: <Github size={18} /> },
    { name: "LinkedIn", path: "https://www.linkedin.com/in/nh-mizan-63326b2b7/", icon: <Linkedin size={18} /> },
    { name: "Email", path: "mailto:nhmizan999@gmail.com", icon: <Mail size={18} /> },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/nhmizanlogo.png" width={200} height={50} alt="Logo" className="object-contain" />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-2">
            {menuItems.map((item) =>
              item.scroll ? (
                <ScrollLink
                  key={item.name}
                  to={item.path}
                  smooth={true}
                  duration={500}
                  className="flex items-center gap-2 px-3 py-2 rounded-full text-sm text-white hover:bg-[#14a468] transition-colors cursor-pointer"
                >
                  {item.icon}
                  {item.name}
                </ScrollLink>
              ) : (
                <Link
                  key={item.name}
                  href={item.path}
                  className="flex items-center gap-2 px-3 py-2 rounded-full text-sm text-white hover:bg-[#14a468] transition-colors"
                >
                  {item.icon}
                  {item.name}
                </Link>
              )
            )}
          </ul>

          {/* Divider */}
          <div className="h-6 w-px bg-white/30 mx-4"></div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => (
              <motion.a
                whileHover={{ scale: 1.2 }}
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#14a468] transition-colors"
              >
                {item.icon}
              </motion.a>  
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-black/70 backdrop-blur-lg border-t border-white/20 px-4 py-2"
      >
        <ul className="flex flex-col gap-2">
          {menuItems.map((item) =>
            item.scroll ? (
              <ScrollLink
                key={item.name}
                to={item.path}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-white hover:bg-violet-500 cursor-pointer"
              >
                {item.icon}
                {item.name}
              </ScrollLink>
            ) : (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-white hover:bg-violet-500"
              >
                {item.icon}
                {item.name}
              </Link>
            )
          )}
        </ul>

     
        <div className="h-px bg-white/30 my-3"></div>
        <div className="flex items-center justify-center gap-6 pb-2">
          {socialLinks.map((item) => (
            <motion.a
              whileHover={{ scale: 1.2 }}
              key={item.name}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-violet-400 transition-colors"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
