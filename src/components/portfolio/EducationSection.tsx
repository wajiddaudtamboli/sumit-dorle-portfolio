import { GraduationCap } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const education = [
  {
    degree: "Masters in Tourism Management",
    institution: "IGNOU",
    year: "2013",
    score: "62.27% - First Division",
  },
  {
    degree: "Bachelor in Hotel and Tourism Management",
    institution: "YCMOU Nashik",
    year: "2009",
    score: "68% - First Division",
  },
  {
    degree: "Diploma in Hotel and Tourism Management",
    institution: "YCMOU Nashik",
    year: "2008",
    score: "73% - First Division",
  },
];

const EducationSection = () => (
  <section id="education" className="section-shell bg-card/20">
    <div className="container">
      <AnimateOnScroll>
        <div className="mb-14 text-center">
          <p className="section-kicker">Academic Background</p>
          <h2 className="section-title mt-4">Education</h2>
          <div className="section-rule" />
        </div>
      </AnimateOnScroll>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {education.map((item, index) => (
          <AnimateOnScroll key={item.degree} delay={index * 90} animation="scale">
            <article className="glass-tile premium-border h-full rounded-2xl p-6">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/22 to-accent/28 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{item.degree}</h3>
              <p className="mt-2 text-sm font-medium text-primary">{item.institution}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  {item.year}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-foreground/75">{item.score}</span>
              </div>
            </article>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
