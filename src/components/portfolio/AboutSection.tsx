import { CheckCircle2, Sparkles } from "lucide-react";
import sumitPhoto from "@/assets/sumits.jpeg";
import AnimateOnScroll from "./AnimateOnScroll";

const highlights = [
  "15+ years of progressive leadership experience",
  "Managed multi-location operations across Maharashtra",
  "Team leadership of 10-50 members",
  "Institutional tie-ups and strategic partnerships",
  "Consistent revenue growth and target achievement",
  "Customer experience and satisfaction focus",
];

const AboutSection = () => (
  <section id="about" className="section-shell">
    <div className="absolute left-0 top-12 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
    <div className="absolute right-0 top-40 h-56 w-56 rounded-full bg-primary/12 blur-3xl" />

    <div className="container relative z-10">
      <AnimateOnScroll>
        <div className="mb-14 text-center">
          <p className="section-kicker">Who I Am</p>
          <h2 className="section-title mt-4">About Me</h2>
          <div className="section-rule" />
        </div>
      </AnimateOnScroll>

      <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <AnimateOnScroll animation="fade-right">
          <article className="glass-tile premium-border h-full rounded-3xl p-7 sm:p-8">
            <div className="relative mx-auto w-fit">
              <div className="rounded-[1.7rem] bg-gradient-to-br from-primary/30 via-primary/10 to-accent/35 p-2">
                <img
                  src={sumitPhoto}
                  alt="Sumit Dorle"
                  className="h-72 w-60 rounded-2xl object-cover object-top sm:h-80 sm:w-72"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">Sumit Dorle</h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Senior Manager - Sales and Operations
              </p>
            </div>
          </article>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-left" delay={100}>
          <article className="glass-tile premium-border rounded-3xl p-7 sm:p-9">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles className="h-4 w-4" />
              Executive Snapshot
            </div>

            <p className="text-base leading-relaxed text-foreground/84">
              A seasoned corporate leader with a distinguished career spanning education, hospitality, insurance, and
              skilling sectors. I bring strategic vision, operational rigor, and people leadership that delivers
              measurable business outcomes through team excellence and expansion-focused execution.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/22 text-accent">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-foreground/82">{item}</span>
                </div>
              ))}
            </div>
          </article>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
);

export default AboutSection;
