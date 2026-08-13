import { createContext, useContext, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

type Theme = "light" | "dark";
type ThemeContextValue = { theme: Theme; toggleTheme: () => void };

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  );
  const transitionInFlight = useRef(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (!document.startViewTransition) {
      setTheme((t) => (t === "dark" ? "light" : "dark"));
      return;
    }

    // Ignore clicks while a transition is already animating — starting a
    // second transition before the first finishes is undefined-ish
    // behavior (broken/stuck visuals), not a queued follow-up.
    if (transitionInFlight.current) return;

    transitionInFlight.current = true;
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme((t) => (t === "dark" ? "light" : "dark"));
      });
    });

    transition.finished.finally(() => {
      transitionInFlight.current = false;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
