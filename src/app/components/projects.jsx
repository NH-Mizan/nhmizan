"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, FileCode2 } from "lucide-react";
import ProjectModal from "./project-modal";


export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects || []))
      .catch((err) => console.error("Error loading projects:", err))
      .finally(() => setLoading(false));
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
          <h2 className="font-section-title text-4xl lg:text-5xl font-bold text-pry text-center">
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

      <div className="space-y-10 lg:space-y-14">
        {projects.map((project, index) => (
          <motion.article
            key={project._id}
            style={{
              top: `${96 + index * 12}px`,
              zIndex: index + 1,
            }}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group grid overflow-hidden rounded-lg border border-white/10 bg-slate-900/80 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.95)] backdrop-blur-xl transition-all duration-500 hover:border-emerald-400/40 hover:shadow-[0_32px_90px_-40px_rgba(16,185,129,0.35)] lg:sticky lg:grid-cols-2 lg:bg-slate-900/95"
            aria-labelledby={`project-title-${project._id}`}
          >
            <div
              className={`relative min-h-72 overflow-hidden lg:min-h-full ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <ProjectSlider
                project={project}
                alt={`Screenshot of ${project.projectName}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />
              <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                <span className="rounded-full border border-emerald-400/30 bg-slate-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-300 backdrop-blur">
                  Featured
                </span>
                <span className="rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-[11px] font-medium text-slate-200 backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div
              className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 ${
                index % 2 === 1 ? "lg:order-1" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.35em] text-slate-400">
                    Case Study
                  </p>
                  <h3
                    id={`project-title-${project._id}`}
                    className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-300"
                  >
                    {project.projectName}
                  </h3>
                </div>
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-400/20">
                  <FileCode2 size={18} />
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                {project.slogan}
              </p>

              <div className="mt-6">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    {tech}
                  </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                <div className="flex flex-wrap gap-3">
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-emerald-400 bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-emerald-300"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  ) : null}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-200"
                  >
                    <FileCode2 size={16} /> Details
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {!loading && projects.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-white/10 px-4 py-8 text-center text-sm text-slate-300">
          No projects found yet. Add your first project from the dashboard.
        </p>
      ) : null}

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

function ProjectSlider({ project, alt }) {
  const images = project.projectImages?.length ? project.projectImages : [project.projectImage];
  const [index, setIndex] = useState(0);
  return <div className="absolute inset-0">
    <img src={images[index]} alt={alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
    {images.length > 1 && <div className="absolute inset-x-3 bottom-3 flex justify-between">
      <button type="button" aria-label="Previous image" onClick={() => setIndex((index - 1 + images.length) % images.length)} className="rounded-full bg-slate-950/75 p-2 text-white"><ChevronLeft size={16} /></button>
      <button type="button" aria-label="Next image" onClick={() => setIndex((index + 1) % images.length)} className="rounded-full bg-slate-950/75 p-2 text-white"><ChevronRight size={16} /></button>
    </div>}
  </div>;
}
