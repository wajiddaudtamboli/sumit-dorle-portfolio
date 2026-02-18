import { Linkedin, Mail, Phone, Globe, Code } from "lucide-react";

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-border/60 bg-gradient-to-b from-[hsl(var(--navy-light)/0.22)] to-[hsl(var(--navy)/0.9)] py-12 text-white">
    <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-accent/18 blur-3xl" />
    <div className="container relative z-10">
      <div className="flex flex-col items-center gap-8 text-center">
        {/* Main Footer Content */}
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

        {/* Divider */}
        <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Developer Credits */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <Code className="h-4 w-4" />
            <span>Designed & Developed by</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-semibold text-white/90">Wajid Daud Tamboli</p>
            <p className="text-xs text-white/60">Software Developer at Idealizeer Content Solutions</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href="tel:+919667033839"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/16 bg-white/5 px-3 py-1.5 text-[10px] font-medium text-white/70 transition-all hover:border-accent/50 hover:text-accent"
            >
              <Phone className="h-3 w-3" />
              +91 9667033839
            </a>
            <a
              href="mailto:wajiddaudtamboli123@gmail.com"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/16 bg-white/5 px-3 py-1.5 text-[10px] font-medium text-white/70 transition-all hover:border-accent/50 hover:text-accent"
            >
              <Mail className="h-3 w-3" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/wajid-daud-tamboli-3217b031a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/16 bg-white/5 px-3 py-1.5 text-[10px] font-medium text-white/70 transition-all hover:border-accent/50 hover:text-accent"
            >
              <Linkedin className="h-3 w-3" />
              LinkedIn
            </a>
            <a
              href="https://tech-world-ai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/16 bg-white/5 px-3 py-1.5 text-[10px] font-medium text-white/70 transition-all hover:border-accent/50 hover:text-accent"
            >
              <Globe className="h-3 w-3" />
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
