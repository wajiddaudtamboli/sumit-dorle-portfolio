import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

import sumit1 from "@/assets/sumit1.jpeg";
import sumit2 from "@/assets/sumit2.jpeg";
import sumit3 from "@/assets/sumit3.jpeg";
import sumit4 from "@/assets/sumit4.jpeg";
import sumit5 from "@/assets/sumit5.jpeg";
import sumit6 from "@/assets/sumit6.jpeg";
import sumit7 from "@/assets/Sumit7.jpeg";
import sumit8 from "@/assets/sumit8.jpeg";
import sumit9 from "@/assets/sumit9.jpeg";
import sumit10 from "@/assets/sumit10.jpeg";
import sumit11 from "@/assets/sumit11.jpeg";

const galleryItems = [
  { src: sumit1, alt: "Professional event snapshot 1" },
  { src: sumit2, alt: "Professional event snapshot 2" },
  { src: sumit3, alt: "Professional event snapshot 3" },
  { src: sumit4, alt: "Professional event snapshot 4" },
  { src: sumit5, alt: "Professional event snapshot 5" },
  { src: sumit6, alt: "Professional event snapshot 6" },
  { src: sumit7, alt: "Professional event snapshot 7" },
  { src: sumit8, alt: "Professional event snapshot 8" },
  { src: sumit9, alt: "Professional event snapshot 9" },
  { src: sumit10, alt: "Professional event snapshot 10" },
  { src: sumit11, alt: "Professional event snapshot 11" },
];

const speedSettings = {
  slow: { interval: 7000, transition: 0.8, label: "Slow" },
  normal: { interval: 5000, transition: 0.65, label: "Normal" },
  fast: { interval: 3000, transition: 0.45, label: "Fast" },
} as const;

const defaultSpeed = speedSettings.normal;

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const activeItem = galleryItems[activeIndex];

  const prevIndex = useMemo(
    () => (activeIndex - 1 + galleryItems.length) % galleryItems.length,
    [activeIndex]
  );

  const nextIndex = useMemo(() => (activeIndex + 1) % galleryItems.length, [activeIndex]);

  const goPrev = () => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + galleryItems.length) % galleryItems.length);
  };

  const goNext = () => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % galleryItems.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % galleryItems.length);
    }, defaultSpeed.interval);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="gallery" className="section-shell">
      <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-accent/14 blur-3xl" />

      <div className="container relative z-10">
        <AnimateOnScroll>
          <div className="mb-14 text-center">
            <p className="section-kicker">Memories & Milestones</p>
            <h2 className="section-title mt-4">Gallery</h2>
            <div className="section-rule" />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale" delay={80}>
          <article
            className="glass-tile premium-border relative rounded-[2rem] p-4 sm:p-6 lg:p-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <Images className="h-4 w-4" />
                Featured Frame
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/65">
                {activeIndex + 1}/{galleryItems.length}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/35 bg-gradient-to-br from-background/70 via-background/40 to-primary/10 p-3 sm:p-4">
              <div className="relative flex h-[240px] items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.45),transparent_52%),radial-gradient(circle_at_80%_80%,rgba(66,133,244,0.20),transparent_44%)] sm:h-[320px] lg:h-[420px]">
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                  <motion.img
                    key={activeItem.src}
                    custom={direction}
                    src={activeItem.src}
                    alt={activeItem.alt}
                    initial={(dir) => ({ opacity: 0, x: dir > 0 ? 70 : -70, scale: 0.96 })}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={(dir) => ({ opacity: 0, x: dir > 0 ? -70 : 70, scale: 0.98 })}
                    transition={{ duration: defaultSpeed.transition, ease: "easeOut" }}
                    className="h-full w-full rounded-xl object-contain"
                    loading="lazy"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.12}
                    onDragEnd={(_, info) => {
                      if (info.offset.x > 70) goPrev();
                      if (info.offset.x < -70) goNext();
                    }}
                  />
                </AnimatePresence>
              </div>

              <button
                onClick={goPrev}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-background/75 text-foreground/90 shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:border-accent/60 hover:text-accent"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={goNext}
                aria-label="Next image"
                className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-background/75 text-foreground/90 shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:border-accent/60 hover:text-accent"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
              {galleryItems.map((item, index) => (
                <button
                  key={item.src}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative overflow-hidden rounded-xl border transition-all duration-300 ${
                    index === activeIndex
                      ? "scale-[1.02] border-accent/70 shadow-[0_10px_24px_rgba(229,176,61,0.28)]"
                      : "border-white/35 hover:-translate-y-0.5 hover:border-accent/45"
                  }`}
                  aria-label={`Open gallery image ${index + 1}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-16 w-full object-cover object-center sm:h-20"
                    loading="lazy"
                  />
                  {index === activeIndex && (
                    <span className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-accent/65" />
                  )}
                </button>
              ))}
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {galleryItems.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex ? "w-7 bg-accent" : "w-2.5 bg-foreground/25 hover:bg-foreground/40"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            <div className="mt-5 text-center">
              <p className="text-xs font-medium tracking-[0.12em] text-foreground/60 sm:text-sm">
                Hover to pause, or use swipe, arrows, and thumbnails to move.
              </p>
            </div>

            <div className="sr-only" aria-live="polite">
              Showing image {activeIndex + 1} of {galleryItems.length}
            </div>

            <div className="hidden">
              <img src={galleryItems[prevIndex].src} alt="" />
              <img src={galleryItems[nextIndex].src} alt="" />
            </div>
          </article>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default GallerySection;