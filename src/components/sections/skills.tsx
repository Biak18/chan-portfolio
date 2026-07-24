import { motion } from "framer-motion";
import { skillGroups } from "../../data/skills";
import { Chip } from "../ui/chip";

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-3xl px-6 py-10 sm:px-6 sm:py-10"
    >
      <p className="mb-4 font-mono text-sm text-accent">Skills</p>
      <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
        Technologies I work with
      </h2>

      <div className="mt-12 space-y-8">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <h3 className="text-sm font-medium text-foreground">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
