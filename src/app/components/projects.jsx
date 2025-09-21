"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileCode2 } from "lucide-react";
import ProjectModal from "./project-modal";


export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("/projectData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  return (
    <section
      id="projects"
      className="container mx-auto py-24 px-6 lg:px-24"
      aria-labelledby="projects-heading"
    >
      {/* Section Heading */}
      <header className="text-center mb-16">
        <div className="flex items-center justify-center gap-4">
          <div className="w-[2px] h-12 bg-violet-500"></div>
          <h2 className="text-4xl lg:text-5xl font-bold text-pry text-center">
            My Digital <span className="text-violet-500">Creations</span>
          </h2>
          <div className="w-[2px] h-12 bg-violet-500"></div>
        </div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="my-4 text-sm text-slate-200 max-w-2xl mx-auto"
        >
          A selection of projects where I've turned complex problems into elegant, user-friendly solutions.
        </motion.p>
      </header>

  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
        {projects.map((project, index) => (
          <motion.article
            key={project._id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group relative"
            aria-labelledby={`project-title-${project._id}`}
          >
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-10/12 z-20 transition-all duration-500 ease-in-out group-hover:-translate-y-2 group-hover:scale-105">
              <img
                src={project.projectImage}
                alt={`Screenshot of ${project.projectName}`}
                className="aspect-video w-full object-cover rounded-lg shadow-2xl shadow-slate-900/80 border-2 border-slate-700"
              />
            </div>

            <div className="relative z-10 bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-lg transition-all duration-300 group-hover:border-violet-500 group-hover:shadow-2xl group-hover:shadow-violet-800/20 pt-28 p-6 text-center">
              <h3
                id={`project-title-${project._id}`}
                className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent inline-block relative
                  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-violet-500 
                  after:transition-all after:duration-500 group-hover:after:w-full"
              >
                {project.projectName}
              </h3>

              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{project.slogan}</p>

              <div className="flex justify-center gap-4 mt-6 pt-5 border-t border-slate-700">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pro"
                >
                  <ExternalLink size={16} /> Live
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn-pro-max"
                >
                  <FileCode2 size={16} /> Details
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
