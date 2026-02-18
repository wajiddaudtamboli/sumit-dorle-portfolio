import { useEffect, useRef, useState, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale";
}

const animationMap = {
  "fade-up": "translate-y-8",
  "fade-left": "-translate-x-8",
  "fade-right": "translate-x-8",
  scale: "scale-95",
} as const;

const AnimateOnScroll = ({ children, className = "", delay = 0, animation = "fade-up" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timerRef.current = window.setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "translate-y-0 translate-x-0 scale-100 opacity-100" : `opacity-0 ${animationMap[animation]}`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
