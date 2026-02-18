import { Phone, Mail, MapPin, Linkedin, User, Monitor, Globe, Heart } from "lucide-react";

const skills = [
  "Team Management", "Center Administration", "Sales & Marketing Strategy",
  "Branding & Promotion", "Concept Selling", "Business Development",
  "Client Relationship Management", "Target Achievement", "Operations Management",
  "Institutional Tie-ups", "Training & Development", "Customer Satisfaction",
];

const ResumeSidebar = () => (
  <div className="bg-resume-navy text-resume-text-light h-full flex flex-col">
    {/* Profile Header */}
    <div className="px-6 pt-8 pb-6 text-center border-b border-resume-gold/30">
      <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-resume-gold flex items-center justify-center bg-resume-gold/10">
        <User className="w-10 h-10 text-resume-gold" />
      </div>
      <h1 className="font-playfair text-2xl font-bold text-resume-white tracking-wide">SUMIT DORLE</h1>
      <p className="font-montserrat text-sm font-semibold text-resume-gold mt-2 tracking-widest uppercase">
        Senior Manager
      </p>
      <p className="font-montserrat text-xs text-resume-gold-light mt-1">Sales & Operations</p>
      <div className="mt-3 h-px bg-gradient-to-r from-transparent via-resume-gold to-transparent" />
      <p className="text-[10px] text-resume-gold-light mt-2 font-lato tracking-wider">
        Skilling · Branding · Marketing · Sales · Operations
      </p>
    </div>

    {/* Contact */}
    <div className="px-6 py-4 border-b border-resume-gold/20">
      <h3 className="font-montserrat text-[10px] font-bold text-resume-gold tracking-[0.2em] uppercase mb-3">Contact</h3>
      <div className="space-y-2.5 text-xs font-lato">
        <div className="flex items-center gap-2.5">
          <Phone className="w-3.5 h-3.5 text-resume-gold shrink-0" />
          <span>+91-9730753568</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Mail className="w-3.5 h-3.5 text-resume-gold shrink-0" />
          <span className="break-all text-[11px]">sumitdorle489@gmail.com</span>
        </div>
        <div className="flex items-center gap-2.5">
          <MapPin className="w-3.5 h-3.5 text-resume-gold shrink-0" />
          <span>Pune, Maharashtra, India</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Linkedin className="w-3.5 h-3.5 text-resume-gold shrink-0" />
          <span>LinkedIn Profile</span>
        </div>
      </div>
    </div>

    {/* Core Skills */}
    <div className="px-6 py-4 border-b border-resume-gold/20 flex-1">
      <h3 className="font-montserrat text-[10px] font-bold text-resume-gold tracking-[0.2em] uppercase mb-3">Core Competencies</h3>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-[9px] font-lato px-2 py-1 border border-resume-gold/40 rounded text-resume-gold-light bg-resume-gold/5"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Languages */}
    <div className="px-6 py-3 border-b border-resume-gold/20">
      <h3 className="font-montserrat text-[10px] font-bold text-resume-gold tracking-[0.2em] uppercase mb-2">
        <Globe className="w-3 h-3 inline mr-1.5 -mt-0.5" />Languages
      </h3>
      <p className="text-[10px] font-lato text-resume-text-light">Marathi · Hindi · English</p>
    </div>

    {/* Computer Skills */}
    <div className="px-6 py-3 border-b border-resume-gold/20">
      <h3 className="font-montserrat text-[10px] font-bold text-resume-gold tracking-[0.2em] uppercase mb-2">
        <Monitor className="w-3 h-3 inline mr-1.5 -mt-0.5" />Computer Skills
      </h3>
      <p className="text-[10px] font-lato text-resume-text-light">MS Windows · Word · Excel · PowerPoint</p>
    </div>

    {/* Personal */}
    <div className="px-6 py-3">
      <h3 className="font-montserrat text-[10px] font-bold text-resume-gold tracking-[0.2em] uppercase mb-2">
        <Heart className="w-3 h-3 inline mr-1.5 -mt-0.5" />Personal
      </h3>
      <div className="text-[10px] font-lato text-resume-text-light space-y-0.5">
        <p>DOB: 17 November 1988</p>
        <p>Nationality: Indian</p>
        <p>Marital Status: Married</p>
      </div>
    </div>
  </div>
);

export default ResumeSidebar;
