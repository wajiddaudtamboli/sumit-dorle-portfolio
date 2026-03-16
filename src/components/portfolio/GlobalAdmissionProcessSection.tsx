import { CheckCircle2, FileCheck2, Globe2, Map, ScrollText, Stamp, TicketCheck, Users } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    title: "Student Counseling and Career Guidance",
    description: "Personalized consultations to align aspirations, aptitude, and global education pathways.",
    icon: Users,
  },
  {
    title: "Course and University Selection",
    description: "Shortlisting programs and institutions that fit academic goals, budget, and destination preferences.",
    icon: Map,
  },
  {
    title: "Application Processing",
    description: "Structuring applications with competitive positioning and clear narratives for each university.",
    icon: ScrollText,
  },
  {
    title: "Documentation and Eligibility Verification",
    description: "Verifying transcripts, test scores, financials, and compliance requirements for admissions.",
    icon: FileCheck2,
  },
  {
    title: "University Application Submission",
    description: "Coordinating submissions, tracking status, and communicating with admissions teams globally.",
    icon: Globe2,
  },
  {
    title: "Admission Confirmation",
    description: "Securing offers, evaluating options, and negotiating deferrals or scholarships when applicable.",
    icon: CheckCircle2,
  },
  {
    title: "Visa Guidance (if international)",
    description: "Supporting visa file preparation, interview readiness, and compliance documentation.",
    icon: Stamp,
  },
  {
    title: "Pre-departure Support",
    description: "Onboarding, travel prep, accommodation coordination, and cultural readiness guidance.",
    icon: TicketCheck,
  },
  {
    title: "Student Enrollment at University",
    description: "Final enrollment support, orientation coordination, and handover to campus support teams.",
    icon: Globe2,
  },
];

const GlobalAdmissionProcessSection = () => (
  <section id="admission-process" className="section-shell">
    <div className="container relative z-10">
      <AnimateOnScroll>
        <div className="mb-14 text-center">
          <p className="section-kicker">Global Student Admission Process</p>
          <h2 className="section-title mt-4">End-to-End Admission Journey</h2>
          <div className="section-rule" />
          <p className="mt-4 text-sm text-foreground/75">
            A structured, high-touch process guiding students from career discovery to successful university enrollment
            across international destinations.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step, index) => (
          <AnimateOnScroll key={step.title} delay={index * 50} animation="fade-up">
            <article className="glass-tile premium-border group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/22 to-accent/22 text-primary">
                  <step.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Step {index + 1}</span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold text-foreground/80">
                      Admissions
                    </span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold leading-snug text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/78">{step.description}</p>
                </div>
              </div>
            </article>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default GlobalAdmissionProcessSection;
