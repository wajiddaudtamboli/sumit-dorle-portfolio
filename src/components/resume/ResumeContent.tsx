import { Briefcase, Award, GraduationCap, Target, CheckCircle } from "lucide-react";

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

const ExperienceItem = ({ title, company, period, bullets }: ExperienceProps) => (
  <div className="mb-4">
    <div className="flex items-start justify-between">
      <div>
        <h4 className="font-montserrat font-bold text-sm text-resume-navy">{title}</h4>
        <p className="font-lato text-xs text-resume-gold-dark font-semibold">{company}</p>
      </div>
      <span className="font-lato text-[10px] text-muted-foreground whitespace-nowrap ml-2 mt-0.5 bg-resume-cream px-2 py-0.5 rounded">
        {period}
      </span>
    </div>
    <ul className="mt-1.5 space-y-0.5">
      {bullets.map((b, i) => (
        <li key={i} className="text-[11px] font-lato text-foreground/80 flex items-start gap-1.5">
          <span className="text-resume-gold mt-0.5 text-[8px]">◆</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SectionTitle = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <div className="flex items-center gap-2 mb-3 mt-1">
    <Icon className="w-4 h-4 text-resume-gold" />
    <h2 className="font-montserrat text-xs font-bold tracking-[0.2em] uppercase text-resume-navy">{title}</h2>
    <div className="flex-1 h-px bg-gradient-to-r from-resume-gold/60 to-transparent" />
  </div>
);

const experiences: ExperienceProps[] = [
  {
    title: "Senior Admission Officer",
    company: "Aakash BYJU'S",
    period: "Jun 2022 – 2023",
    bullets: [
      "Spearheaded school tie-ups and strategic marketing campaigns across the district, driving brand visibility and enrollment growth.",
      "Led and mentored a team of 10 sales executives, consistently achieving monthly admission targets and revenue goals.",
      "Orchestrated admissions, batch allocation, and district-level promotional campaigns resulting in 30%+ enrollment uplift.",
    ],
  },
  {
    title: "Deputy Project Manager – Citi Bank CSR Project",
    company: "Excelus Learning (Quess Corp)",
    period: "Sep 2021 – Jun 2022",
    bullets: [
      "Directed operations across 28 centers with 18 partner organizations throughout Maharashtra, ensuring seamless project delivery.",
      "Executed MOU negotiations, set performance targets, and conducted weekly audits to maintain quality standards.",
      "Achieved admission and placement targets through data-driven strategies and monthly performance reviews.",
    ],
  },
  {
    title: "Center Manager – Vedanta Foundation Project",
    company: "Excelus Learning (Quess Corp)",
    period: "Oct 2020 – Sep 2021",
    bullets: [
      "Managed end-to-end center administration including batch formation, college tie-ups, and placement drives.",
      "Organized seminars, workshops, and industry events strengthening institutional partnerships across the region.",
    ],
  },
  {
    title: "Trainer",
    company: "Excelus Learning (Quess Corp), Bhandara",
    period: "Jul 2019 – Oct 2020",
    bullets: [
      "Delivered skill development training programs, achieving high participant satisfaction and placement rates.",
    ],
  },
  {
    title: "Food & Beverage Trainer",
    company: "Orion Edutech Pvt Ltd",
    period: "Oct 2017 – Jun 2019",
    bullets: [
      "Drove student mobilization and counseling initiatives, successfully training and placing candidates in the hospitality sector.",
    ],
  },
  {
    title: "Associate Agency Development Manager",
    company: "Max Life Insurance, Amravati",
    period: "Mar 2016 – Oct 2017",
    bullets: [
      "Recruited and developed a network of insurance agents, driving policy sales through targeted branding and training programs.",
    ],
  },
  {
    title: "Sales Executive – Tour Packages",
    company: "Purple Travels, Nagpur",
    period: "Jun 2015 – Feb 2016",
    bullets: [
      "Designed and marketed customized tour packages, managing agent relationships across Vidarbha and Marathwada regions.",
      "Secured corporate and institutional group bookings through strategic B2B outreach.",
    ],
  },
  {
    title: "Banquet Manager",
    company: "Hotel Grace Inn, Amravati",
    period: "Mar 2010 – Feb 2015",
    bullets: [
      "Oversaw menu planning, staff coordination, and function bookings for high-profile corporate and social events.",
      "Built corporate client relationships and tie-ups, increasing repeat business revenue by 25%.",
    ],
  },
];

const achievements = [
  "Led multi-location operations spanning 28+ training & education centers across Maharashtra",
  "Managed end-to-end P&L responsibility for CSR-driven skilling projects with 18 partner organizations",
  "Consistently exceeded sales and admission targets across education and insurance verticals",
  "Built and nurtured strategic institutional partnerships with colleges, corporates, and government bodies",
  "Recruited, trained, and led high-performance sales and operations teams of 10+ members",
  "Improved placement rates and admission performance through data-driven process optimization",
  "15+ years of progressive leadership in skilling, education, hospitality, and sales sectors",
];

const education = [
  { degree: "Masters in Tourism Management", institution: "IGNOU", year: "2013", score: "62.27% – First Division" },
  { degree: "Bachelor in Hotel & Tourism Management", institution: "YCMOU Nashik", year: "2009", score: "68% – First Division" },
  { degree: "Diploma in Hotel & Tourism Management", institution: "YCMOU Nashik", year: "2008", score: "73% – First Division" },
];

const ResumeContent = () => {
  const page1Exp = experiences.slice(0, 4);
  const page2Exp = experiences.slice(4);

  return (
    <div className="bg-resume-white h-full">
      {/* PAGE 1 RIGHT COLUMN */}
      <div className="px-8 pt-8 pb-4">
        {/* Executive Summary */}
        <SectionTitle icon={Target} title="Executive Summary" />
        <p className="text-[11px] font-lato leading-relaxed text-foreground/85 mb-5 border-l-2 border-resume-gold pl-3">
          Results-driven Senior Manager with over 15 years of progressive experience in sales leadership, operations management, branding, and skill development across education, hospitality, and financial services sectors. Proven track record of driving revenue growth, building high-performance teams, and forging strategic institutional partnerships. Adept at managing multi-location operations, executing large-scale projects, and delivering exceptional customer experiences. Passionate about business expansion, organizational excellence, and creating measurable impact through strategic planning and execution.
        </p>

        {/* Experience - Page 1 */}
        <SectionTitle icon={Briefcase} title="Professional Experience" />
        {page1Exp.map((exp, i) => (
          <ExperienceItem key={i} {...exp} />
        ))}
      </div>

      {/* PAGE BREAK MARKER (visual only, print CSS handles actual break) */}
      <div className="border-t-2 border-dashed border-resume-gold/30 mx-8 print:hidden" />

      {/* PAGE 2 RIGHT COLUMN */}
      <div className="px-8 pt-6 pb-4">
        {page2Exp.map((exp, i) => (
          <ExperienceItem key={i} {...exp} />
        ))}

        {/* Key Achievements */}
        <SectionTitle icon={Award} title="Key Achievements" />
        <div className="border border-resume-gold/40 rounded-lg p-4 bg-gradient-to-br from-resume-cream to-resume-white mb-5">
          <div className="space-y-1.5">
            {achievements.map((a, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-resume-gold shrink-0 mt-0.5" />
                <span className="text-[11px] font-lato text-foreground/85">{a}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <SectionTitle icon={GraduationCap} title="Education" />
        <div className="space-y-2.5">
          {education.map((ed, i) => (
            <div key={i} className="flex items-start gap-3 border-l-2 border-resume-gold/50 pl-3">
              <div>
                <h4 className="font-montserrat font-bold text-xs text-resume-navy">{ed.degree}</h4>
                <p className="text-[10px] font-lato text-muted-foreground">{ed.institution} · {ed.year}</p>
                <p className="text-[10px] font-lato text-resume-gold-dark font-semibold">{ed.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;
