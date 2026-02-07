import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import youtubeImg from "../assets/logos/youtube.png";
import vaaniplanImg from "../assets/logos/vaaniplan.png";
import gymImg from "../assets/logos/gym.png";
import TabImg from "../assets/logos/tab.png";

const projects = [
  {
    title: "Integrated Review of YouTube Videos – Sentiment Analysis using AI",
    description:
      "Designed and implemented an end-to-end AI-driven system to address the challenge of analyzing large volumes of unstructured YouTube comments bybuilding a Flask-based backend that fetches comments via the YouTube Data API and classifies sentiment (positive, negative, neutral) using transformer-based NLP models, enabling rapid insight generation from raw audience feedback. Developed a responsive Next.js dashboard with interactive visualizations and integrated OpenAI-powered summarization APIs, reducing manual comment review effort by an estimated 70%+ and enabling analysis of thousands of comments within minutes, significantly improving decision-making speed for content strategy and audience engagement.",
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
      "Designed and built a voice-first AI planning system to reduce cognitive and interaction friction in daily planning by enabling natural speech input and LLM-based reasoning, cutting manual typing and formatting effort by an estimated 60–70% while converting unstructured speech into structured, time-based schedules. Implemented an end-to-end architecture with a lightweight frontend and FastAPI backend integrated with large language models, improving planning workflow efficiency by approximately 50% compared to text-first tools and delivering a scalable prototype accepted for the Unleash LLM Innovation Challenge.",
    image: vaaniplanImg,
    link: "https://yellankikaushik.github.io/VaaniPlan/",
    tags: ["FastAPI", "LLMs", "Web Speech API", "AI Assistants"],
  },
  {
    title: "Gym Membership Management System",
    description:
      "Designed and deployed a production-oriented, serverless membership management system to replace manual spreadsheet tracking in small gyms, automating 100% of membership expiry calculations (active/expired status, remaining days) and reducing administrative tracking effort by approximately 65–70%. Implemented an automated, admin-only email alert engine for upcoming and missed renewals using Google Apps Script triggers, enabling proactive follow-ups that reduced missed renewals and potential revenue leakage by an estimated 30–40%, while delivering a zero-cost, secure solution suitable for real-world small business use.",
    image: gymImg,
    link: "https://github.com/YellankiKaushik/Gym-Membership",
    tags: ["PHP", "MySQL", "Web Application", "Admin Systems"],
  },
  {
    title: "Public Interest Analysis of Google Products",
    description:
      "Analyzed multi-year Google Trends time-series data to evaluate public interest, stability, and growth across major Google products by consolidating and standardizing datasets, and designing an executive-style Tableau dashboard to enable comparative, insight-driven analysis. Identified that YouTube and Google Search contributed approximately 65–70% of overall average public interest, while Gemini demonstrated 30%+ relative growth over the last 12 months, highlighting emerging AI momentum and delivering actionable insights through a published interactive Tableau Public dashboard.",
    image: TabImg,
    link: "https://public.tableau.com/app/profile/yellanki.kaushik/viz/PublicInterestAnalysisofGoogleProducts/Dashboard2",
    tags: [ "Tableau", "Google Trends", "Data Cleaning", "Data Visualization"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-8 md:py-12 px-4 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-dark opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />

      <motion.div
        className="absolute top-8 md:top-16 left-10 md:left-20 w-20 md:w-28 h-20 md:h-28 bg-gradient-cosmic rounded-full blur-3xl opacity-8"
        animate={{ x: [0, 15, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-10 text-center text-glow"
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="glass-card overflow-hidden hover-glow group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-cosmic/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-3 md:p-4">
                <h3 className="text-sm md:text-base font-semibold text-white mb-2 font-display">
                  {project.title}
                </h3>

                <p className="text-white/70 mb-3 text-xs md:text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 md:px-3 py-0.5 md:py-1 bg-gradient-neon/20 text-accent-light rounded-full text-xs border border-accent/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary-light hover:text-white text-xs md:text-sm font-medium transition-colors"
                >
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
