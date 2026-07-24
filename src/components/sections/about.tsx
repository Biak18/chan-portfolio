import { motion } from "framer-motion";
import { aboutContent, featuredTech } from "../../data/about";
import { Chip } from "../ui/chip";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl px-6 py-10 sm:px-6 sm:py-10"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4 }}
        className="mb-4 font-mono text-sm text-accent"
      >
        About
      </motion.p>

      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
            {aboutContent.intro}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            {aboutContent.currentFocus}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          <div className="space-y-4">
            {aboutContent.philosophy.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {featuredTech.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
