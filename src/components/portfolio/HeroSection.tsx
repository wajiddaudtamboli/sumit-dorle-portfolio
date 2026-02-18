import { ArrowDown, Download, Linkedin, Mail } from "lucide-react";
import sumitPhoto from "@/assets/sumit.jpeg";
import { useTheme } from "@/hooks/useTheme";

const HeroSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="relative flex min-h-[auto] items-center overflow-hidden pt-20 pb-10 lg:min-h-screen lg:pt-28 lg:pb-0">
      <div className="absolute inset-0 spotlight-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/55 to-background" />

      <div className="absolute left-8 top-24 h-40 w-40 rounded-full bg-accent/18 blur-3xl" />
      <div className="absolute right-10 top-20 h-52 w-52 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-20 left-1/2 h-40 w-56 -translate-x-1/2 rounded-full bg-primary/18 blur-3xl" />

      <div className="pointer-events-none absolute inset-x-0 bottom-8 hidden justify-center lg:flex">
        <ArrowDown className="h-5 w-5 animate-bounce text-accent/70" />
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-8 lg:gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center lg:text-left">
            <div className="premium-border inline-flex items-center gap-2 rounded-full bg-card/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Available for Senior Leadership Roles
            </div>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-foreground sm:text-6xl lg:text-7xl">
              SUMIT <span className="gold-text">DORLE</span>
            </h1>
            <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-accent via-primary to-accent lg:mx-0" />

            <p className="mt-6 text-lg font-semibold uppercase tracking-[0.2em] text-primary sm:text-xl">
              Senior Manager - Sales and Operations
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/84 lg:mx-0">
              Driving Revenue Growth, Operational Excellence and Team Performance with 15+ years of proven results
              across education, skilling, hospitality, and service businesses.
            </p>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#contact"
                className="hero-glow inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[hsl(38_79%_44%)] via-[hsl(42_90%_58%)] to-[hsl(47_100%_78%)] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-[hsl(226_48%_12%)] transition-transform hover:scale-[1.03]"
              >
                <Mail className="h-4 w-4" />
                Contact Now
              </a>
              <a
                href="/SumitDorleResume_2025.pdf"
                download
                className="premium-border inline-flex items-center gap-2 rounded-xl bg-card/55 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:text-accent"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/sumit-dorle-4980ba1a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-primary/35 bg-transparent px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-primary transition-all hover:border-accent hover:text-accent"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className={`premium-card premium-border relative rounded-[2rem] p-6 sm:p-8 ${isDark ? "blue-glow" : "hero-glow"}`}>
              <div className="relative float-slow mx-auto w-fit">
                <div className="pulse-ring relative rounded-[2rem] bg-gradient-to-br from-primary/25 to-accent/35 p-2">
                  <img
                    src={sumitPhoto}
                    alt="Sumit Dorle portrait"
                    className="h-72 w-64 rounded-[1.6rem] object-cover object-top shadow-2xl sm:h-80 sm:w-72"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-xs uppercase tracking-[0.28em] text-accent">Executive Profile</p>
                <p className="mt-2 text-sm font-medium text-foreground/82">Sales Growth | Operations | Business Expansion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
