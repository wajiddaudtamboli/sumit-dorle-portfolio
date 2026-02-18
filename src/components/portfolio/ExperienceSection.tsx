import { BriefcaseBusiness } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const timeline = [
  {
    title: "Senior Manager - Sales and Operations",
    company: "ICS Global",
    period: "Nov 2025 - Present",
    bullets: [
      "Leading business development and operations strategy across regions",
      "Driving revenue growth through strategic partnerships and sales excellence",
      "Overseeing team performance, client acquisition, and operational efficiency",
    ],
  },
  {
    title: "Branch Manager",
    company: "ICFAI Business School (IBS)",
    period: "Aug 2024 - Nov 2025",
    bullets: [
      "Managed end-to-end branch operations with P&L accountability",
      "Drove marketing strategy, institutional tie-ups, and brand positioning",
      "Oversaw team target reviews, admissions growth, and operational control",
    ],
  },
  {
    title: "Branch Manager",
    company: "Career Point Kota Institute",
    period: "Dec 2023 - Aug 2024",
    bullets: [
      "Managed branch-level team leadership, branding campaigns, and admission target delivery",
      "Spearheaded hiring, training, and performance management of sales teams",
    ],
  },
  {
    title: "Senior Admission Officer",
    company: "Aakash BYJU'S",
    period: "Jun 2022 - 2023",
    bullets: [
      "Led a team of 10 sales executives to achieve monthly admission targets",
      "Executed school tie-ups and district-level marketing campaigns driving 30%+ enrollment growth",
    ],
  },
  {
    title: "Deputy Project Manager - Citi Bank CSR Project",
    company: "Excelus Learning (Quess Corp)",
    period: "Sep 2021 - Jun 2022",
    bullets: [
      "Directed operations across 28 centers with 18 partner organizations across Maharashtra",
      "Managed MOU negotiations, weekly audits, and placement targets",
    ],
  },
  {
    title: "Center Manager - Vedanta Foundation",
    company: "Excelus Learning (Quess Corp)",
    period: "Oct 2020 - Sep 2021",
    bullets: ["Managed center administration, batch formation, college tie-ups, and placement drives"],
  },
  {
    title: "Food and Beverage Trainer",
    company: "Orion Edutech Pvt Ltd",
    period: "Oct 2017 - Jun 2019",
    bullets: ["Drove student mobilization, counseling, and successful placement in the hospitality sector"],
  },
  {
    title: "Sales and Hospitality - Early Career",
    company: "Max Life Insurance | Purple Travels | Hotel Grace Inn",
    period: "2010 - 2017",
    bullets: [
      "Built foundational expertise in sales, client relationship management, and event operations across insurance, travel, and hospitality sectors",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-shell">
    <div className="container">
      <AnimateOnScroll>
        <div className="mb-14 text-center">
          <p className="section-kicker">Career Journey</p>
          <h2 className="section-title mt-4">Professional Experience</h2>
          <div className="section-rule" />
        </div>
      </AnimateOnScroll>

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-[1.1rem] top-0 hidden h-full w-[2px] bg-gradient-to-b from-accent via-primary/65 to-transparent sm:block" />

        <div className="space-y-6">
          {timeline.map((item, index) => (
            <AnimateOnScroll key={`${item.title}-${item.period}`} delay={index * 70}>
              <article className="relative sm:pl-12">
                <span className="absolute left-0 top-7 hidden h-9 w-9 items-center justify-center rounded-full border border-accent/60 bg-card sm:inline-flex">
                  <BriefcaseBusiness className="h-4 w-4 text-accent" />
                </span>

                <div className="glass-tile premium-border rounded-2xl p-6 sm:p-7">
                  <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    <span className="inline-flex w-fit items-center rounded-full bg-accent/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                      {item.period}
                    </span>
                  </div>

                  <p className="mb-4 text-sm font-medium text-primary">{item.company}</p>
                  <ul className="space-y-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/82">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
