import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const GetInTouchSection = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">

      {/* Background Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-cyber opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />

      {/* Floating Blobs — same design language */}
      <motion.div
        className="absolute top-24 left-20 w-28 h-28 bg-gradient-neon rounded-full blur-3xl opacity-8"
        animate={{ x: [0, 20, 0], y: [0, -12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-24 right-20 w-24 h-24 bg-gradient-cosmic rounded-full blur-2xl opacity-8"
        animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />

      <div className="container mx-auto max-w-5xl relative z-10 text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4 text-glow"
        >
          Get In Touch
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/70 mb-10 max-w-xl mx-auto"
        >
          Let’s connect and build something impactful together.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:kaushikyellanki@gmail.com"
            className="glass-card px-6 py-3 hover-glow inline-flex items-center gap-3 group"
          >
            <Mail className="w-5 h-5 text-primary-light group-hover:text-white transition-colors" />
            <span className="text-primary-light group-hover:text-white transition-colors">
              Email
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/yellankikaushik/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-6 py-3 hover-glow inline-flex items-center gap-3 group"
          >
            <Linkedin className="w-5 h-5 text-primary-light group-hover:text-white transition-colors" />
            <span className="text-primary-light group-hover:text-white transition-colors">
              LinkedIn
            </span>
          </a>

          <a
            href="https://github.com/YellankiKaushik"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-6 py-3 hover-glow inline-flex items-center gap-3 group"
          >
            <Github className="w-5 h-5 text-primary-light group-hover:text-white transition-colors" />
            <span className="text-primary-light group-hover:text-white transition-colors">
              GitHub
            </span>
          </a>

          <a
            href="https://drive.google.com/file/d/1w6gZTB2CJVDK4JvasefBR9ngU9InEm9z/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-6 py-3 hover-glow inline-flex items-center gap-3 group"
          >
            <FileText className="w-5 h-5 text-primary-light group-hover:text-white transition-colors" />
            <span className="text-primary-light group-hover:text-white transition-colors">
              Resume
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default GetInTouchSection;