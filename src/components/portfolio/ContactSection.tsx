import { useState } from "react";
import { Linkedin, Mail, MapPin, Phone, Send, Smartphone } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = `Hi, I'm ${form.name} (${form.email}). ${form.message}`;
    window.open(`https://wa.me/919730753568?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section-shell">
      <div className="absolute inset-x-0 bottom-8 mx-auto h-44 w-3/4 rounded-full bg-primary/16 blur-3xl" />
      <div className="container relative z-10">
        <AnimateOnScroll>
          <div className="mb-14 text-center">
            <p className="section-kicker">Get In Touch</p>
            <h2 className="section-title mt-4">Contact Me</h2>
            <div className="section-rule" />
            <p className="mx-auto mt-4 max-w-2xl text-sm text-foreground/76">
              Available for senior management opportunities and strategic leadership roles.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <AnimateOnScroll animation="fade-right">
            <article className="glass-tile premium-border h-full rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground">Direct Contact</h3>
              <p className="mt-2 text-sm text-foreground/75">Preferred channels for call, mail, and professional networking.</p>

              <div className="mt-6 space-y-4">
                <a href="tel:+919730753568" className="glass-tile flex items-center gap-4 rounded-2xl p-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/20 text-accent">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-foreground/62">Phone</p>
                    <p className="text-sm font-semibold text-foreground">+91 9730753568</p>
                  </div>
                </a>

                <a href="mailto:sumitdorle489@gmail.com" className="glass-tile flex items-center gap-4 rounded-2xl p-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-foreground/62">Email</p>
                    <p className="text-sm font-semibold text-foreground">sumitdorle489@gmail.com</p>
                  </div>
                </a>

                <div className="glass-tile flex items-center gap-4 rounded-2xl p-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/18 text-accent">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-foreground/62">Location</p>
                    <p className="text-sm font-semibold text-foreground">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <a
                  href="https://www.linkedin.com/in/sumit-dorle-4980ba1a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/40 px-3 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary transition-all hover:border-accent hover:text-accent"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href="tel:+919730753568"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-accent/45 px-3 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent transition-all hover:bg-accent/10"
                >
                  <Smartphone className="h-4 w-4" />
                  Call
                </a>
                <a
                  href="mailto:sumitdorle489@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-foreground/30 px-3 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-foreground transition-all hover:border-primary hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  Mail
                </a>
              </div>
            </article>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" delay={120}>
            <article className="premium-card premium-border rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground">Send a Message</h3>
              <p className="mt-2 text-sm text-foreground/75">Reach out directly via WhatsApp form.</p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  maxLength={100}
                  required
                  className="w-full rounded-xl border border-border bg-background/75 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/24"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  maxLength={255}
                  required
                  className="w-full rounded-xl border border-border bg-background/75 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/24"
                />
                <textarea
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  maxLength={1000}
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-border bg-background/75 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/24"
                />

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[hsl(142_70%_40%)] px-5 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition-transform hover:scale-[1.02] hover:bg-[hsl(142_70%_34%)]"
                >
                  <Send className="h-4 w-4" />
                  Send via WhatsApp
                </button>
              </form>
            </article>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
