import { motion } from "framer-motion";
import { User, Brain } from "lucide-react";

const featuredHighlights = [
  {
    title: "About Me",
    description:
      "I am a Computer Science undergraduate with a strong foundation in Artificial Intelligence, Machine Learning, and Data Analytics. I have experience building full-stack AI-driven analytics platforms and intelligent systems.",
  },
  {
    title: "My Focus",
    description:
      "I am deeply interested in applying AI, NLP, and data visualization to solve real-world problems and improve decision-making. I enjoy working at the intersection of data, product thinking, and user-centric system design.",
  },
  {
    title: "Career Goals",
    description:
      "I am targeting entry-level roles and internships in AI Engineering, Data Analysis, Machine Learning, and Data Science domains, where I can build impactful and scalable solutions.",
  },
];

const FeaturedInSection = () => {
  return (
    <section className="py-8 md:py-12 px-4 relative overflow-hidden">
      {/* Subtle background elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-neon opacity-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center text-glow"
        >
          About Me
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {featuredHighlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="glass-card p-4 md:p-6 hover-glow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white/90 backdrop-blur rounded-lg border border-white/30 shadow-lg">
                  {index === 0 ? (
                    <User className="w-4 h-4 text-primary" />
                  ) : (
                    <Brain className="w-4 h-4 text-primary" />
                  )}
                </div>
                <h3 className="text-sm md:text-base font-semibold text-white">
                  {item.title}
                </h3>
              </div>

              <p className="text-white/70 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInSection;
