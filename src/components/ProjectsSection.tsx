import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import youtubeImg from "../assets/logos/youtube.png";
import vaaniplanImg from "../assets/logos/vaaniplan.png";
import gymImg from "../assets/logos/gym.png";
import TabImg from "../assets/logos/tab.png";

const projects = [
  {
    title: "Integrated Review of YouTube Videos – Sentiment Analysis using AI",
    description:
      "Built an AI-powered review intelligence system that transforms thousands of YouTube comments into actionable sentiment insights and summaries, reducing manual review effort by 70%+ and accelerating content and marketing decisions.",
    image: youtubeImg,
    link: "https://github.com/YellankiKaushik/Integrated-Review-YT-Videos",
    tags: [
      "NLP",
      "Sentiment Analysis",
      "Hugging Face",
      "OpenAI API",
      "YouTube Data API",
    ],
  },
  {
    title: "VaaniPlan — Voice-First AI Daily Planning Assistant",
    description:
      "Created a voice-first AI planning prototype that eliminates typing and manual task structuring by using LLM reasoning, reducing planning effort by 60–70%, improving efficiency by ~50%, and earning acceptance in the Unleash LLM Innovation Challenge.",
    image: vaaniplanImg,
    link: "https://yellankikaushik.github.io/VaaniPlan/",
    tags: ["FastAPI", "LLMs", "Web Speech API", "AI Assistants"],
  },
  {
    title: "Gym Membership Management System",
    description:
      "Created a zero-cost, production-ready membership management system that replaces manual tracking with automated expiry alerts, reducing admin effort by 65–70% and preventing 30–40% of missed renewals for small gyms.",
    image: gymImg,
    link: "https://github.com/YellankiKaushik/Gym-Membership",
    tags: ["PHP", "MySQL", "Web Application", "Admin Systems"],
  },
  {
    title: "Public Interest Analysis of Google Products",
    description:
      "Created an interactive Tableau dashboard that translates Google Trends data into clear product insights.",
    image: TabImg,
    link: "https://public.tableau.com/app/profile/yellanki.kaushik",
    tags: ["Tableau", "Google Trends", "Data Visualization"],
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

const ProjectsSection = () => {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const total = projects.length;

  const paginate = (newDirection: number) => {
    setIndex(([prev]) => {
      let next = prev + newDirection;

      if (next < 0) next = total - 1;
      if (next >= total) next = 0;

      return [next, newDirection];
    });
  };

  return (
    <section className="py-12 px-4 relative overflow-hidden">

      {/* Same Background Overlay as Certifications */}
      <motion.div
        className="absolute inset-0 bg-gradient-cyber opacity-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-white mb-10 text-center text-glow"
        >
          Projects
        </motion.h2>

        <div className="relative min-h-[500px]">

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              variants={slideVariants}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={(e, info) => {
                if (info.offset.x < -120) paginate(1);
                else if (info.offset.x > 120) paginate(-1);
              }}
              className="glass-card p-8 cursor-grab active:cursor-grabbing"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">

                {/* IMAGE */}
                <img
                  src={projects[index].image}
                  alt={projects[index].title}
                  loading="lazy"
                  className="rounded-xl shadow-lg w-full object-cover"
                />

                {/* CONTENT */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                    {projects[index].title}
                  </h3>

                  <p className="text-white/80 mb-6 leading-relaxed">
                    {projects[index].description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[index].tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-gradient-neon/20 text-accent-light border border-accent/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={projects[index].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-light hover:text-white transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Premium Arrows (Same as Certifications) */}
          <motion.button
            onClick={() => paginate(-1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="
              absolute -left-4 top-1/2 -translate-y-1/2 z-20
              w-11 h-11 rounded-full
              backdrop-blur-xl bg-white/5
              border border-white/15
              flex items-center justify-center
              hover:border-primary-light/60
              hover:bg-white/10
              transition-all duration-300
            "
          >
            <ChevronLeft className="text-white w-5 h-5" />
          </motion.button>

          <motion.button
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="
              absolute -right-4 top-1/2 -translate-y-1/2 z-20
              w-11 h-11 rounded-full
              backdrop-blur-xl bg-white/5
              border border-white/15
              flex items-center justify-center
              hover:border-primary-light/60
              hover:bg-white/10
              transition-all duration-300
            "
          >
            <ChevronRight className="text-white w-5 h-5" />
          </motion.button>

          {/* Dots */}
          <div className="flex justify-center items-center gap-3 mt-10">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() =>
                  setIndex([i, i > index ? 1 : -1])
                }
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-primary-light"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;