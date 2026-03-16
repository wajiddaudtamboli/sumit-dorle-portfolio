import { Linkedin, Mail, Phone, Globe, Code } from "lucide-react";

const idealizeerLogo =
  "data:image/jpeg;base64,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";

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
          <img
            src={idealizeerLogo}
            alt="Idealizeer Content Solutions"
            className="h-14 w-auto rounded-xl border border-white/20 bg-white/10 p-1 shadow-lg"
            loading="lazy"
          />
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
