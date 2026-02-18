import { Award, Trophy } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const achievements = [
  "Managed 28+ training and education centers across Maharashtra",
  "Led multi-branch sales and operations with full P&L responsibility",
  "Achieved and exceeded admission targets consistently across verticals",
  "Built institutional and corporate partnerships with colleges and government bodies",
  "Led high-performing sales teams of 10-50 members",
  "Strong experience in education, skilling, and service sector growth",
  "Expertise in branding, marketing, and strategic operations",
];

const AchievementsSection = () => (
  <section id="achievements" className="section-shell">
    <div className="absolute inset-x-0 top-20 mx-auto h-44 w-4/5 rounded-full bg-accent/12 blur-3xl" />
    <div className="container relative z-10">
      <AnimateOnScroll>
        <div className="mb-14 text-center">
          <p className="section-kicker">Track Record</p>
          <h2 className="section-title mt-4">Key Achievements</h2>
          <div className="section-rule" />
        </div>
      </AnimateOnScroll>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, index) => (
          <AnimateOnScroll key={item} delay={index * 70} animation="fade-up">
            <article className="glass-tile premium-border h-full rounded-2xl p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/26 to-primary/20 text-accent">
                {index % 2 === 0 ? <Trophy className="h-5 w-5" /> : <Award className="h-5 w-5" />}
              </div>
              <p className="text-sm leading-relaxed text-foreground/84">{item}</p>
            </article>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
