import { motion } from "framer-motion";
import { Trophy, Brain, Code, Presentation, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "AI Intern – Tech Saksham Program",
    description:
      "Built a full-stack AI analytics platform to analyze YouTube comments and generate sentiment insights using NLP, transformers, and interactive dashboards. Collaborated under the Tech Saksham initiative by Edunet Foundation in partnership with Microsoft & SAP.",
    icon: <Brain className="w-4 h-4" />,
    year: "2025",
    link: "https://edunetfoundation.org/",
  },
  {
    title: "YouTube Sentiment Analysis Platform",
    description:
      "Developed an end-to-end AI-driven analytics system that converts unstructured YouTube comments into actionable sentiment trends for content and audience analysis.",
    icon: <Code className="w-4 h-4" />,
    year: "2025",
    link: "https://github.com/YellankiKaushik",
  },
  {
    title: "VaaniPlan — Voice-First AI Planning Assistant",
    description:
      "Created a voice-driven AI assistant that transforms spoken daily plans into structured schedules, reducing planning friction using LLMs and Web Speech APIs.",
    icon: <Brain className="w-4 h-4" />,
    year: "2024",
    link: "https://github.com/YellankiKaushik",
  },
  {
    title: "Gym Membership Management System",
    description:
      "Built a full-stack web application to manage gym memberships, plans, attendance, and admin workflows using PHP and MySQL.",
    icon: <Code className="w-4 h-4" />,
    year: "2023",
    link: "https://github.com/YellankiKaushik",
  },
  {
    title: "Strong Academic Performance",
    description:
      "Maintained a consistent academic record in Computer Science and Engineering with a strong focus on AI, ML, and data-centric subjects.",
    icon: <Trophy className="w-4 h-4" />,
    year: "2021–2025",
    link: "https://vbit.ac.in/",
  },
  {
    title: "Technical Presentations & Project Demos",
    description:
      "Presented AI and web-based project demos during academic reviews and internal evaluations, demonstrating strong communication and technical articulation skills.",
    icon: <Presentation className="w-4 h-4" />,
    year: "2024",
    link: "https://vbit.ac.in/",
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-12 px-4 relative overflow-hidden">
      {/* Subtle background elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-cyber opacity-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-10 text-center font-display text-glow"
        >
          Achievements & Experience Highlights
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.a
              key={index}
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="glass-card p-5 hover-glow group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-2 bg-gradient-neon rounded-lg flex-shrink-0"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="text-white w-4 h-4 flex items-center justify-center">
                    {achievement.icon}
                  </div>
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-semibold text-white font-display group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <span className="px-2 py-1 bg-gradient-cosmic/30 text-accent-light rounded-full text-xs border border-accent/30 w-fit">
                        {achievement.year}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-primary-light transition-colors" />
                  </div>

                  <motion.p
                    className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 0.9 }}
                  >
                    {achievement.description}
                  </motion.p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
