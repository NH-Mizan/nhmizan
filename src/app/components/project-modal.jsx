"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe, X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 flex justify-center items-start z-50 overflow-auto pt-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-900 rounded-xl max-w-5xl w-full p-6 relative shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-violet-400"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white">{project.projectName}</h1>
        <p className="text-gray-300 italic">{project.slogan}</p>

        {/* Image */}
        <img
          src={project.projectImage}
          alt={project.projectName}
          className="w-full rounded-xl mt-4 mb-4 object-cover"
        />

        {/* Overview */}
        <p className="text-gray-300 whitespace-pre-wrap">{project.description}</p>

        {/* Features */}
        <div className="mt-4">
          <h2 className="text-violet-500 uppercase font-semibold text-sm mb-2">Features</h2>
          <ul className="list-disc list-inside text-gray-200">
            {project.features?.map((f, i) => (
              <li key={i}>{f.trim()}</li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mt-4">
          <h2 className="text-violet-500 uppercase font-semibold text-sm mb-2">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 text-white"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mt-4">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600 text-white hover:bg-violet-700 transition"
            >
              <Globe size={16} /> Live Site
            </a>
          )}
          {project.clientLink && (
            <a
              href={project.clientLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition"
            >
              <ExternalLink size={16} /> Client
            </a>
          )}
          {project.serverLink && (
            <a
              href={project.serverLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition"
            >
              <ExternalLink size={16} /> Server
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
