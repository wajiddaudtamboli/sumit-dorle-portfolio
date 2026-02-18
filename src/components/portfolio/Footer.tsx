import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-border/60 bg-gradient-to-b from-[hsl(var(--navy-light)/0.22)] to-[hsl(var(--navy)/0.9)] py-10 text-white">
    <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-accent/18 blur-3xl" />
    <div className="container relative z-10">
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="text-sm font-medium text-white/88">
          Copyright {new Date().getFullYear()} Sumit Dorle. Senior Manager - Sales and Operations.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:+919730753568"
            className="inline-flex items-center gap-2 rounded-xl border border-white/24 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all hover:border-accent hover:text-accent"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
          <a
            href="mailto:sumitdorle489@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl border border-white/24 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all hover:border-accent hover:text-accent"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/sumit-dorle-4980ba1a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/24 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all hover:border-accent hover:text-accent"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
