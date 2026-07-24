import { Header } from "./components/layout/header";
import { Hero } from "./components/sections/hero";
import { About } from "./components/sections/about";
import { Projects } from "./components/sections/projects";
import { Experience } from "./components/sections/experience";
import { Skills } from "./components/sections/skills";
import { Contact } from "./components/sections/contact";
import { ThemeProvider } from "./hooks/use-theme";
import { Footer } from "./components/layout/footer";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
