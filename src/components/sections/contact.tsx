import { motion } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "../../data/site-config";
import {
  GithubIcon,
  LinkedinIcon,
  TelegramIcon,
  FacebookIcon,
} from "../ui/icons";
import { Mail } from "lucide-react";
import { buttonVariants } from "../ui/button";

const socials = [
  {
    label: "GitHub",
    href: siteConfig.links.github,
    Icon: GithubIcon,
    brand: "#181717",
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    Icon: LinkedinIcon,
    brand: "#0A66C2",
  },
  {
    label: "Telegram",
    href: siteConfig.links.telegram,
    Icon: TelegramIcon,
    brand: "#26A5E4",
  },
  {
    label: "Facebook",
    href: siteConfig.links.facebook,
    Icon: FacebookIcon,
    brand: "#1877F2",
  },
];

type FormState = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        setState("success");
        form.reset(); // Clears inputs on successful submission
      } else {
        setState("error");
      }
    } catch (err) {
      setState("error");
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-2xl px-6 py-10 sm:px-6 sm:py-10"
    >
      <p className="mb-4 font-mono text-sm text-accent">Contact</p>
      <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
        Let's talk
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted">
        Have a project in mind or just want to say hi? My inbox is open.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${siteConfig.links.email}`}
          className={buttonVariants("secondary")}
        >
          <Mail size={16} /> {siteConfig.links.email}
        </a>
      </div>

      <div className="mt-4 flex gap-3">
        {socials.map(({ label, href, Icon, brand }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            style={{ "--brand": brand } as React.CSSProperties}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:bg-surface hover:text-[var(--brand)]"
          >
            <Icon width={18} height={18} />
          </a>
        ))}
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="mt-12 space-y-4"
      >
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-accent"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-accent"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="text-sm font-medium text-foreground"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-1.5 w-full resize-none rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-accent"
          />
        </div>

        <button
          type="submit"
          disabled={state === "submitting"}
          className={buttonVariants("primary", "w-full disabled:opacity-60")}
        >
          {state === "submitting" ? "Sending…" : "Send message"}
        </button>

        {state === "success" && (
          <p role="status" className="text-sm text-accent">
            Message sent — I'll get back to you soon.
          </p>
        )}
        {state === "error" && (
          <p role="alert" className="text-sm text-red-500">
            Something went wrong. Try emailing me directly instead.
          </p>
        )}
      </motion.form>
    </section>
  );
}
