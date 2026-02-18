import { useState, useEffect } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const links = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 34);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-2xl border px-4 shadow-xl transition-all duration-300 sm:px-6 ${
          scrolled
            ? "bg-background/82 border-white/25 backdrop-blur-xl"
            : "bg-background/62 border-white/20 backdrop-blur-md"
        }`}
      >
        <a href="#" className="group inline-flex items-center gap-2">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary text-xs font-bold text-accent-foreground shadow-lg">
            SD
          </span>
          <span className="hidden text-sm font-semibold tracking-[0.16em] text-foreground/90 sm:block">
            SUMIT DORLE
          </span>
        </a>

        <div className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/74 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-background/70 text-foreground transition-all hover:border-accent/55 hover:text-accent"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href="/SumitDorleResume_2025.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[hsl(38_79%_44%)] via-[hsl(42_90%_58%)] to-[hsl(47_100%_78%)] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[hsl(226_48%_12%)] shadow-lg transition-transform hover:scale-[1.03]"
          >
            <Download className="h-3.5 w-3.5" />
            Download CV
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-background/70 text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-background/70 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 w-full max-w-7xl rounded-2xl border border-white/25 bg-background/90 px-5 py-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/80 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/SumitDorleResume_2025.pdf"
              download
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[hsl(38_79%_44%)] via-[hsl(42_90%_58%)] to-[hsl(47_100%_78%)] px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[hsl(226_48%_12%)]"
            >
              <Download className="h-3.5 w-3.5" />
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
