import { BarChart3, BriefcaseBusiness, Megaphone, MessagesSquare, Settings, Target, TrendingUp, Users } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const skills = [
  { name: "Leadership and Team Handling", value: 95, icon: Users },
  { name: "Sales Strategy", value: 92, icon: TrendingUp },
  { name: "Operations Management", value: 90, icon: Settings },
  { name: "Business Development", value: 88, icon: BriefcaseBusiness },
  { name: "Marketing and Branding", value: 85, icon: Megaphone },
  { name: "Client Relationship", value: 90, icon: MessagesSquare },
  { name: "Training and Development", value: 87, icon: BarChart3 },
  { name: "Communication", value: 93, icon: Target },
];

const SkillsSection = () => (
  <section id="skills" className="section-shell bg-card/20">
    <div className="container">
      <AnimateOnScroll>
        <div className="mb-14 text-center">
          <p className="section-kicker">Proficiency</p>
          <h2 className="section-title mt-4">Skills Dashboard</h2>
          <div className="section-rule" />
        </div>
      </AnimateOnScroll>

      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((skill, index) => (
          <AnimateOnScroll key={skill.name} delay={index * 60}>
            <article className="glass-tile premium-border flex items-center gap-4 rounded-2xl p-5">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-muted/60">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(hsl(var(--accent)) ${skill.value}%, hsl(var(--muted)) ${skill.value}% 100%)`,
                  }}
                />
                <div className="absolute inset-1.5 rounded-full bg-card" />
                <span className="relative text-xs font-bold text-foreground">{skill.value}%</span>
              </div>

              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <skill.icon className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">{skill.name}</h3>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-primary via-accent to-gold"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            </article>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
