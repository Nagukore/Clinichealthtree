import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";

function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* ---------------------------------------------------------------- */}
          {/* Brand & Identity */}
          {/* ---------------------------------------------------------------- */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              {/* LOGO REPLACEMENT */}
              <img 
                src="/logo.png" 
                alt="Clinique HealthTree Logo" 
                className="h-12 w-auto object-contain"
                onError={(e) => (e.currentTarget.style.display = 'none')} // Hides if image is missing
              />
              <div>
                <h3 className="text-white text-xl font-black tracking-tight leading-none">
                  Clinique HealthTree
                </h3>
                <p className="text-[10px] text-teal-500 font-bold uppercase tracking-widest mt-1">
                  Multispeciality Clinic
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-500">
              Singasandra's premier multispeciality clinical board providing 
              precision diagnostics and compassionate senior specialist care.
            </p>

            {/* Social Channels */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.facebook.com/share/17wtmYgner/"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500 hover:text-white transition-all group"
                aria-label="Facebook"
              >
                <Facebook size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.instagram.com/healthtreeclinique?igsh=ODE0Nnk5MXd4Y3p3"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500 hover:text-white transition-all group"
                aria-label="Instagram"
              >
                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Quick Navigation */}
          {/* ---------------------------------------------------------------- */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-6">Explore</h4>
            <ul className="space-y-3 text-sm">
              {["Home", "About", "Services", "Doctors", "Contact"].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item.toLowerCase())} 
                    className="hover:text-teal-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Clinical Departments */}
          {/* ---------------------------------------------------------------- */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-6">Specialities</h4>
            <ul className="space-y-3 text-sm">
              {[
                "General Medicine",
                "Cardiology Unit",
                "Gastroenterology",
                "General Surgery",
                "Orthopaedics",
                "Paediatrics",
                "Diagnostics",
                "Sleep Lab"
              ].map((service) => (
                <li key={service} className="hover:text-slate-200 transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Contact Details */}
          {/* ---------------------------------------------------------------- */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-6">Contact</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-teal-500 shrink-0" size={18} />
                <a
                  href="https://maps.app.goo.gl/JQVNpEqLtJK8yTu29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition leading-relaxed"
                >
                  AECS Layout, A-Block, Singasandra, <br /> Bangalore – 560068
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="text-teal-500 shrink-0" size={18} />
                <a href="tel:+918073718255" className="hover:text-teal-400 font-bold transition">
                  +91 8073718255
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="text-teal-500 shrink-0" size={18} />
                <a
                  href="mailto:healthtreeclinique@gmail.com"
                  className="hover:text-teal-400 transition truncate"
                >
                  healthtreeclinique@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Copyright & Legal */}
        {/* ---------------------------------------------------------------- */}
        <div className="border-t border-slate-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-600">
            <p className="text-center md:text-left">
              © 2026 Clinique HealthTree. Clinical Excellence locally.
            </p>

            <div className="flex gap-8">
              <a href="#" className="hover:text-teal-500 transition">Privacy</a>
              <a href="#" className="hover:text-teal-500 transition">Terms</a>
              <a href="#" className="hover:text-teal-500 transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;