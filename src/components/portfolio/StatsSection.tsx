import { useEffect, useRef, useState } from "react";
import { BriefcaseBusiness, Building2, Target, UsersRound } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const stats = [
  { icon: BriefcaseBusiness, value: 15, suffix: "+", label: "Years Experience" },
  { icon: Building2, value: 28, suffix: "+", label: "Centers Managed" },
  { icon: UsersRound, value: 50, suffix: "+", label: "Team Members Led" },
  { icon: Target, value: 100, suffix: "%", label: "Target Achievement" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    let timer: number | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const duration = 1400;
        const steps = 48;
        const increment = target / steps;
        let current = 0;

        timer = window.setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            if (timer) window.clearInterval(timer);
            return;
          }
          setCount(Math.floor(current));
        }, duration / steps);
        observer.disconnect();
      },
      { threshold: 0.6 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (timer) window.clearInterval(timer);
    };
  }, [target]);

  return (
    <div ref={nodeRef} className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
      <span className="gold-text">
        {count}
        {suffix}
      </span>
    </div>
  );
};

const StatsSection = () => (
  <section className="section-shell bg-transparent">
    <div className="container">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <AnimateOnScroll key={stat.label} delay={index * 90}>
            <article className="glass-tile premium-border h-full rounded-3xl p-6">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 via-primary/15 to-accent/30 text-primary">
                <stat.icon className="h-6 w-6" />
              </div>
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">{stat.label}</p>
            </article>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
