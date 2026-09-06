"use client";

import React from 'react';
import Image from 'next/image';
import { Code2, FileText, FolderGit2, Github, Home, Linkedin, Mail, MessageCircle } from 'lucide-react';

// Centralized configuration for easier updates
const footerConfig = {
  name: "NH Mizan",
  navLinks: [
    { label: "About", href: "#heroSection" },
    { label: "Skills", href: "#skillsSection" },
    { label: "Projects", href: "#projectsSection" },
    { label: "Contact", href: "#contactSection" },
  ],

  socialLinks: [
    { 
      label: 'GitHub', 
      icon: Github, 
      href: 'https://github.com/NH-Mizan' 
    },
    { 
      label: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/nh-mizan-63326b2b7/' 
    },
    { 
      label: 'Mail', 
      icon: Mail, 
      href: 'mailto:nhmizan999@gmail.com' 
    },
  ],
  mobileNav: [
    { label: "Home", href: "#heroSection", icon: Home },
    { label: "Skills", href: "#skillsSection", icon: Code2 },
    { label: "Projects", href: "#projectsSection", icon: FolderGit2 },
    { label: "Contact", href: "#contactSection", icon: MessageCircle },
    { label: "Resume", href: "/resume", icon: FileText },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-20 overflow-hidden border-t border-emerald-400/15 bg-[#03070c]/85 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true">
        <div className="absolute -right-10 top-2 font-mono text-[10px] leading-5 text-emerald-300">{`const build = () => {\n  return "ideas into reality";\n};\n<> / developer / </>`}</div>
      </div>
      <div className="container relative mx-auto px-5 py-10 lg:px-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <a href="#heroSection" className="inline-flex items-center">
              <Image src="/nhmizanlogo.png" width={170} height={42} alt="NH Mizan" className="h-9 w-auto object-contain" />
            </a>
            <p className="mt-3 max-w-sm text-sm text-slate-400">Designing thoughtful digital experiences with clean code and purpose.</p>
          </div>

          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-8">
            <nav className="flex w-full flex-wrap items-center justify-center gap-x-0 gap-y-1 sm:w-auto sm:gap-x-5 sm:gap-y-2" aria-label="Footer navigation">
              {footerConfig.navLinks.map((link, index) => <React.Fragment key={link.label}><a href={link.href} className="px-3 py-2 text-sm text-slate-400 transition-colors hover:text-emerald-300 sm:px-0 sm:py-0">{link.label}</a>{index < footerConfig.navLinks.length - 1 && <span className="text-white/15 sm:hidden" aria-hidden="true">/</span>}</React.Fragment>)}
            </nav>
            <div className="flex items-center justify-center gap-3">
            {footerConfig.socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5 text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-emerald-300/10 hover:text-emerald-300"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
            </div>
          </div>
        </div>

        {/* Bottom: Copyright Information */}
        <div className="mt-8 flex flex-col items-center gap-2 border-t border-white/10 pt-5 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>&copy; {currentYear} {footerConfig.name}. All rights reserved.</p>
          <p className="hidden sm:block">Designed &amp; developed with care.</p>
        </div>
      </div>
      <nav className="fixed inset-x-3 bottom-3 z-50 flex h-[68px] items-center justify-around rounded-2xl border border-white/15 bg-[#07121c]/95 px-1 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden" aria-label="Mobile navigation">
        {footerConfig.mobileNav.map((item) => {
          const Icon = item.icon;
          return <a key={item.label} href={item.href} className="flex min-w-0 flex-1 flex-col items-center gap-1 rounded-xl py-2 text-[10px] font-medium text-slate-400 transition-colors hover:bg-emerald-400/10 hover:text-emerald-300"><Icon size={20} strokeWidth={1.8} /><span>{item.label}</span></a>;
        })}
      </nav>
    </footer>
  );
};

export default Footer;
