import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import rochesterLogo from "../assets/logos/university-of-rochester-logo.svg";

const education = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    school: "Vignana Bharathi Institute of Technology (VBIT)",
    period: "2021 – 2025",
    gpa: "7.79 out of 10.0",
    description:
      "Undergraduate program with a strong foundation in Computer Science, Artificial Intelligence, Machine Learning, and Data Analytics. Completed multiple academic and project-based implementations focusing on AI-driven systems and full-stack development.",
    coursework: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Analytics",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Web Technologies",
    ],
    logo: rochesterLogo,
  },
  {
    degree: "Intermediate (MPC)",
    school: "Narayana Junior College",
    period: "2019 – 2021",
    gpa: "81.4%",
    description:
      "Completed intermediate education with specialization in Mathematics, Physics, and Chemistry, building strong analytical and problem-solving fundamentals.",
    coursework: [
      "Mathematics",
      "Physics",
      "Chemistry",
    ],
    logo: rochesterLogo,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Dilsukhnagar Public School",
    period: "2017 – 2019",
    gpa: "95%",
    description:
      "Completed secondary education with excellent academic performance, demonstrating consistency, discipline, and early interest in science and technology.",
    coursework: [
      "Science",
      "Mathematics",
      "Computer Basics",
    ],
    logo: rochesterLogo,
  },
];

const EducationSection = () => {
  return (
    <section className="py-12 px-4 relative overflow-hidden">
      {/* Subtle background elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-cyber opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />

      <motion.div
        className="absolute top-32 right-16 w-32 h-32 bg-gradient-neon rounded-full blur-3xl opacity-8"
        animate={{
          x: [0, -20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-32 left-16 w-20 h-20 bg-gradient-cosmic rounded-full blur-2xl opacity-8"
        animate={{
          x: [0, 25, 0],
          y: [0, -12, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 100,
          }}
          className="text-3xl font-bold text-white mb-10 text-center font-display text-glow"
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -2,
                transition: { duration: 0.2 },
              }}
              className="glass-card p-6 hover-glow group cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  className="p-3 bg-white/90 backdrop-blur rounded-xl border border-white/30 shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <img
                    src={edu.logo}
                    alt={`${edu.school} logo`}
                    className="w-8 h-8 object-contain"
                  />
                </motion.div>

                <div className="flex-1">
                  <motion.h3
                    className="text-xl font-semibold text-white mb-3 font-display group-hover:text-primary transition-colors duration-300"
                  >
                    {edu.degree}
                  </motion.h3>

                  <div className="flex items-center gap-3 text-white/70 mb-3">
                    <span className="font-medium text-accent-light">
                      {edu.school}
                    </span>
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <div className="text-accent-light mb-4 font-medium">
                    <span className="text-white/60">Score: </span>
                    {edu.gpa}
                  </div>

                  <motion.p className="text-white/75 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
                    {edu.description}
                  </motion.p>

                  <div className="mb-2">
                    <h4 className="text-white/90 font-medium text-sm mb-3">
                      Key Coursework:
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {edu.coursework.map((course, courseIndex) => (
                      <motion.span
                        key={courseIndex}
                        whileHover={{ scale: 1.02 }}
                        className="px-4 py-2 bg-gradient-cosmic/20 text-primary-light rounded-full text-sm border border-primary/30 hover:border-primary/60 transition-all backdrop-blur-sm"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
