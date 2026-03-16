import { Building2, Globe2, GraduationCap, Landmark, MapPinned, School, Sparkles } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const institutions = [
  { name: "SHINAWATRA UNIVERSITY", tagline: "Fostering Innovation", url: "https://www.siu.ac.th/", icon: GraduationCap },
  { name: "Sumy State University", tagline: "Global Learning Excellence", url: "https://sumdu.edu.ua/", icon: Globe2 },
  {
    name: "Bharati Vidyapeeth (Deemed to be University)",
    tagline: "Academic Leadership",
    url: "https://bvuniversity.edu.in/",
    icon: Landmark,
  },
  {
    name: "Yuriy Fedkovych Chernivtsi National University",
    tagline: "Heritage & Research",
    url: "https://chnu.edu.ua/",
    icon: Building2,
  },
  {
    name: "KUAC Kara Universities Admission Center",
    tagline: "Regional Admission Hub",
    url: "https://kuacadmission.com/",
    icon: MapPinned,
  },
  { name: "Kyungdong University (KDU)", tagline: "Future-Ready Education", url: "https://www.kdu.ac.kr/", icon: School },
];

const PartnerInstitutionsSection = () => (
  <section id="partners" className="section-shell bg-card/20">
    <div className="container relative z-10">
      <AnimateOnScroll>
        <div className="mb-14 text-center">
          <p className="section-kicker">Partner Institutions & Enterprises</p>
          <h2 className="section-title mt-4">Universities and Global Academic Partners</h2>
          <div className="section-rule" />
          <p className="mt-4 text-sm text-foreground/75">
            A network of universities and admission centers collaborating on innovation, student mobility, and global
            education pathways.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {institutions.map((item, index) => (
          <AnimateOnScroll key={item.name} delay={index * 60} animation="fade-up">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-tile premium-border group relative block h-full overflow-hidden rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/6 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/22 to-primary/20 text-accent">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-snug text-foreground">{item.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary/90">{item.tagline}</p>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">
                <Sparkles className="h-4 w-4 text-accent" />
                Global Collaboration
              </div>
            </a>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerInstitutionsSection;
