import { motion, useReducedMotion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { GithubIcon } from "../ui/icons";
import { siteConfig } from "../../data/site-config";
import { buttonVariants } from "../ui/button";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? undefined : container;

  return (
    <section
      id="home"
      className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-end px-6 py-10 sm:px-8"
    >
      <motion.div variants={variants} initial="hidden" animate="show">
        <motion.p
          variants={item}
          className="mb-4 font-mono text-sm text-accent"
        >
          {siteConfig.currentFocus}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-3 text-lg text-muted sm:text-xl"
        >
          {siteConfig.role}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
          <a
            href={siteConfig.links.resume}
            download
            className={buttonVariants("primary")}
          >
            <Download size={16} /> Resume
          </a>

          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants("secondary")}
          >
            + <GithubIcon width={16} height={16} />
            GitHub
          </a>
          <a
            href={`mailto:${siteConfig.links.email}`}
            className={buttonVariants("ghost")}
          >
            <Mail size={16} /> Contact
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
