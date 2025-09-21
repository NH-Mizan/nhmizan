// You can place this file at `app/resume/page.jsx`

import { Download, Github, Linkedin, Mail, Phone, MapPin, Globe } from 'lucide-react';

const resumeData = {
  name: "Nahid Hasan Mizan",
  title: "Web Developer",
  location: "Dinajpur, Bangladesh",
  email: "nhmizan999@gmail.com",
  phone: "+880 1783156390",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nh-mizan-63326b2b7/", icon: Linkedin },
    { label: "GitHub", href: "https://github.com/NH-Mizan", icon: Github },
    { label: "Portfolio", href: "https://www.facebook.com/share/1H6uEk7zxc/", icon: Globe },
  ],
  objective: "Passionate Front-End Developer skilled in React, Next.js, Tailwind CSS, and the MERN stack. Experienced in building responsive web applications with a focus on problem-solving, innovation, and continuous learning. Eager to contribute in a collaborative environment and grow into a versatile Software Developer, exploring AI and ML to create impactful solutions.",
  skills: [
    { category: "Expertise", items: ["React.js", "Firebase (Auth & Security)", "JavaScript", "Tailwind CSS", "HTML5", "CSS5"] },
    { category: "Comfortable", items: ["Next.js", "Rest API", "Chrome Dev Tool", "Bootstrap"] },
    { category: "Familiar", items: ["Node.js", "Express.js", "MongoDB", "JWT", "Axios", "React Query"] },
    { category: "Tools", items: ["Git & GitHub", "npm", "VS Code", "Netlify", "Vercel", "Postman", "Figma", "Canva"] },
    { category: "Soft Skills", items: ["Hard Worker", "Quick Learner", "Communication", "Teamwork", "Time Management"] },
  ],
  projects: [
    {
      title: "The DailyBulletin",
      date: "July 2025",
      liveUrl: "#",
      clientUrl: "#",
      description: "A modern React-based news platform with responsive UI, role-based dashboards, article management, and subscription payments. Faced challenges with Firebase auth, Stripe integration, and API optimization, which helped me learn secure authentication, data visualization (Recharts), and state management (TanStack Query).",
      features: [
        "User-Friendly Interface: Designed with a sleek, responsive, and interactive interface, ensuring a smooth experience.",
        "Article Management: Users can create, update, and delete news articles with real-time updates.",
        "Role-Based Dashboard: Three roles (User, Premium Subscriber, Admin) with unique features and permissions.",
      ],
      technologies: ["React.js", "TanStack Query", "Node.js", "Express.js", "MongoDB", "Firebase", "Stripe", "Framer Motion"],
    },
    {
      title: "The Book Galaxy",
      date: "June 2025",
      liveUrl: "#",
      clientUrl: "#",
      description: "A responsive React-based book management app with authentication, protected routes, and interactive dashboards. Faced challenges with Firebase auth, JWT security, and state updates; learned secure routing, UI animations, and API integration.",
      features: [
        "Auth & Security: Firebase login/register, JWT-protected routes.",
        "Book Management And Filtering: Add, edit, delete, borrow & return books. Browse by category.",
        "UI/UX: Styled with Tailwind CSS, Framer Motion & Toast notifications.",
      ],
      technologies: ["React.js", "React Router", "TanStack Query", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase"],
    },
    {
      title: "ClayCraft",
      date: "August 2025",
      liveUrl: "#",
      clientUrl: "#",
      description: "A simple e-commerce platform with authentication and modern UI. Faced challenges with NextAuth integration and file upload handling, which helped me learn App Router auth flows, file management, and UI optimization.",
      features: [
        "Authentication: Secure login with NextAuth.js (App Router).",
        "Deployment & DB: Deployed on Vercel, MongoDB Atlas for database.",
        "Modern UI: TailwindCSS for sleek design.",
      ],
      technologies: ["Next.js 14", "NextAuth.js", "MongoDB Atlas", "Tailwind CSS", "Vercel"],
    },
  ],
  education: [
    {
      degree: "Diploma in Engineering",
      institution: "Kurigram Polytechnic Institute | Computer Science & Technology",
      period: "2022–Present",
    },
  ],
  certifications: [
    {
      name: "Complete Web Development With Programming Hero",
      issuer: "Programming Hero | Remote",
      year: "2025",
      link: "#"
    },
  ],
  languages: [
    { lang: "Bangla", proficiency: "Native" },
    { lang: "English", proficiency: "Fluent" },
    { lang: "Hindi", proficiency: "Conversational" },
  ]
};

const SectionHeader = ({ children }) => (
  <h2 className="text-2xl font-bold text-slate-100 border-b-2 border-violet-500 pb-2 mb-4">
    {children}
  </h2>
);

const ResumePage = () => {
  return (
    <div className="text-slate-300 min-h-screen font-sans p-4 sm:p-8">
      <div className="max-w-5xl mx-auto backdrop-blur-sm rounded-lg shadow-2xl p-6 sm:p-10">
        <header className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-slate-700">
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wider">{resumeData.name}</h1>
            <p className="text-xl sm:text-2xl text-violet-400 font-medium mt-1">{resumeData.title}</p>
            <div className="flex items-center space-x-4 mt-4">
              {resumeData.links.map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-slate-400 hover:text-violet-400 transition-colors">
                  <link.icon size={28} />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-6 sm:mt-0 flex flex-col items-center sm:items-end space-y-4">
            <div className="text-sm text-right space-y-1">
              <p className="flex items-center justify-end gap-2"><MapPin size={14} /> {resumeData.location}</p>
              <a href={`mailto:${resumeData.email}`} className="flex items-center justify-end gap-2 hover:text-violet-400"><Mail size={14} /> {resumeData.email}</a>
              <a href={`tel:${resumeData.phone.replace(/\s/g, '')}`} className="flex items-center justify-end gap-2 hover:text-violet-400"><Phone size={14} /> {resumeData.phone}</a>
            </div>
            <a 
              href="/resume.pdf"
              download="nhmizan.pdf"
              className="inline-flex items-center gap-2 bg-violet-600 text-white font-semibold p-2 rounded-lg shadow-lg hover:bg-violet-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </header>
        <main className="mt-8 space-y-10">
          <section>
            <SectionHeader>Career Objective</SectionHeader>
            <p className="text-lg leading-relaxed">{resumeData.objective}</p>
          </section>
          <section>
            <SectionHeader>Technical & Soft Skills</SectionHeader>
            <div className="space-y-3">
              {resumeData.skills.map(skill => (
                <div key={skill.category} className="flex flex-col sm:flex-row">
                  <p className="w-full sm:w-1/4 font-semibold text-white">{skill.category}:</p>
                  <p className="flex-1 flex flex-wrap gap-2 mt-1 sm:mt-0">
                    {skill.items.map(item => (
                      <span key={item} className="bg-slate-700 text-slate-200 text-sm font-medium px-3 py-1 rounded-full">{item}</span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <SectionHeader>Projects</SectionHeader>
            <div className="space-y-8">
              {resumeData.projects.map(project => (
                <div key={project.title}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-sm font-mono text-slate-400">{project.date}</p>
                  </div>
                  <div className="flex space-x-4 text-violet-400 my-1">
                    <a href={project.clientUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">Client</a>
                    <span>|</span>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">Live</a>
                  </div>
                  <p className="mt-2 text-base italic text-slate-400">{project.description}</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {project.features.map(feature => <li key={feature}>{feature}</li>)}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="bg-violet-900/50 text-violet-300 text-xs font-semibold px-2.5 py-1 rounded-md">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <SectionHeader>Education & Certification</SectionHeader>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white">{resumeData.education[0].degree}</h3>
                <p>{resumeData.education[0].institution}</p>
                <p className="text-sm text-slate-400">{resumeData.education[0].period}</p>
              </div>
              <div>
                <a href={resumeData.certifications[0].link} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-white hover:text-violet-400 transition-colors">
                  {resumeData.certifications[0].name}
                </a>
                <p>{resumeData.certifications[0].issuer}</p>
                <p className="text-sm text-slate-400">{resumeData.certifications[0].year}</p>
              </div>
            </div>
          </section>
          <section>
            <SectionHeader>Languages</SectionHeader>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {resumeData.languages.map(lang => (
                <p key={lang.lang}><span className="font-semibold text-white">{lang.lang}</span> ({lang.proficiency})</p>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ResumePage;
