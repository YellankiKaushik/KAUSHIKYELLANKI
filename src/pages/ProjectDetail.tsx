import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h2 className="text-2xl">Project not found</h2>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 relative overflow-hidden">

      {/* SAME BACKGROUND SYSTEM */}
      <motion.div
        className="absolute inset-0 bg-gradient-cyber opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.2 }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="text-primary-light hover:text-white transition mb-8 inline-block"
        >
          ← Back to Portfolio
        </button>

        {/* MAIN GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-8 hover-glow"
        >

          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">

            <div className="flex items-center gap-4">

              <img
                src={project.image}
                alt={project.title}
                className="w-16 h-16 rounded-lg object-cover"
              />

              <h1 className="text-2xl md:text-3xl font-bold text-white">
                {project.title}
              </h1>

            </div>

            {/* TOP LINKS */}
            <div className="flex gap-3">

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card px-4 py-2 hover-glow text-sm"
                >
                  GitHub
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card px-4 py-2 hover-glow text-sm"
                >
                  Live Demo
                </a>
              )}

            </div>

          </div>

          {/* DESCRIPTION */}
          <p className="text-white/80 leading-relaxed mb-8">
            {project.description}
          </p>

          {/* HIGHLIGHTS */}
          {project.highlights && (
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">
                Key Achievements
              </h2>

              <ul className="list-disc list-inside text-white/80 space-y-2">
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* TECH STACK */}
          {project.techStack && (
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">
                Tech Stack
              </h2>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full
                    bg-gradient-neon/20 text-accent-light
                    border border-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* OVERVIEW */}
          {project.overview && (
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">
                Project Overview
              </h2>

              <p className="text-white/80 leading-relaxed">
                {project.overview}
              </p>
            </div>
          )}

          {/* PROBLEM */}
          {project.problem && (
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">
                Problem
              </h2>

              <p className="text-white/80 leading-relaxed">
                {project.problem}
              </p>
            </div>
          )}

          {/* SOLUTION */}
          {project.solution && (
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">
                Solution
              </h2>

              <p className="text-white/80 leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}

          {/* RESULTS */}
          {project.results && (
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">
                Results
              </h2>

              <ul className="list-disc list-inside text-white/80 space-y-2">
                {project.results.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          )}

          {/* SCREENSHOTS GRID */}
          {project.screenshots && (
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-6">
                Screenshots
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {project.screenshots.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="project screenshot"
                    className="rounded-xl hover-glow object-cover"
                  />
                ))}
              </div>
            </div>
          )}

          {/* BOTTOM LINKS */}
          <div className="flex flex-wrap gap-4 pt-4">

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-5 py-2 hover-glow"
              >
                GitHub Repository
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-5 py-2 hover-glow"
              >
                Live Demo
              </a>
            )}

            {project.medium && (
              <a
                href={project.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-5 py-2 hover-glow"
              >
                Medium Article
              </a>
            )}

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ProjectDetail;