import { motion } from "framer-motion";
import { experience } from "../../data/experience";
import { Chip } from "../ui/chip";

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-3xl px-6 py-10 sm:px-6 sm:py-10"
    >
      <p className="mb-4 font-mono text-sm text-accent">Experience</p>
      <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
        How I got here
      </h2>

      <div className="mt-12 space-y-10 border-l border-border pl-8">
        {experience.map((entry, i) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative"
          >
            <span
              className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            <p className="font-mono text-xs text-muted">{entry.period}</p>
            <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
              {entry.title}
            </h3>
            <p className="text-sm text-muted">{entry.organization}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {entry.description}
            </p>
            {entry.highlights && (
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-muted sm:grid-cols-3">
                {entry.highlights.map((h) => (
                  <li
                    key={h}
                    className="before:mr-1.5 before:text-accent before:content-['·']"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            )}

            {entry.tech && (
              <div className="mt-3 flex flex-wrap gap-2">
                {entry.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
