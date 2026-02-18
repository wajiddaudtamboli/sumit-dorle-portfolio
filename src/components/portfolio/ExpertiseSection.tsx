import {
  Briefcase,
  Building2,
  GraduationCap,
  Handshake,
  Heart,
  Megaphone,
  Settings,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const expertise = [
  { icon: TrendingUp, title: "Sales Strategy and Revenue Growth" },
  { icon: Settings, title: "Operations Management" },
  { icon: Briefcase, title: "Business Development" },
  { icon: Megaphone, title: "Branding and Marketing" },
  { icon: Users, title: "Team Leadership" },
  { icon: Handshake, title: "Institutional Tie-ups" },
  { icon: GraduationCap, title: "Training and Development" },
  { icon: Heart, title: "Customer Experience" },
  { icon: Target, title: "Target Planning and Execution" },
  { icon: Building2, title: "Center and Branch Management" },
];

const ExpertiseSection = () => (
  <section id="expertise" className="section-shell bg-card/20">
    <div className="container relative z-10">
      <AnimateOnScroll>
        <div className="mb-14 text-center">
          <p className="section-kicker">What I Do Best</p>
          <h2 className="section-title mt-4">Core Expertise</h2>
          <div className="section-rule" />
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {expertise.map((item, index) => (
          <AnimateOnScroll key={item.title} delay={index * 70} animation="scale">
            <article className="glass-tile premium-border flex h-full flex-col items-center rounded-2xl p-5 text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/24 to-accent/24 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground/82">{item.title}</p>
            </article>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default ExpertiseSection;
