import {
  Heart,
  Mail,
  MapPin,
  Phone,
  Facebook,
  // Twitter,
  Instagram,
  // Linkedin,
} from "lucide-react";

function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* ---------------------------------------------------------------- */}
          {/* Brand */}
          {/* ---------------------------------------------------------------- */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-teal-600 p-2 rounded-lg">
                <Heart className="text-white" size={22} />
              </div>
              <div>
                <h3 className="text-white text-xl font-bold">
                  Clinique HealthTree
                </h3>
                <p className="text-sm text-gray-400">
                  Multispeciality Clinic & Diagnostics
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm">
              Delivering comprehensive healthcare services with compassion,
              advanced diagnostics, and expert specialists.
            </p>

            {/* Social */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.facebook.com/share/17wtmYgner/"
                className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              {/* <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a> */}
              <a
                href="https://www.instagram.com/healthtreeclinique?igsh=ODE0Nnk5MXd4Y3p3"
                className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              {/* <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a> */}
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Quick Links */}
          {/* ---------------------------------------------------------------- */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection("home")} className="hover:text-teal-400 transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-teal-400 transition">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-teal-400 transition">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("doctors")} className="hover:text-teal-400 transition">
                  Our Doctors
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-teal-400 transition">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Our Services */}
          {/* ---------------------------------------------------------------- */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection("services")} className="hover:text-teal-400 transition">Doctor Consultation</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-teal-400 transition">Laboratory & Diagnostics</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-teal-400 transition">Endoscopy/Colonoscopy</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-teal-400 transition">Minor Surgery</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-teal-400 transition">Pharmacy</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-teal-400 transition">Physiotherapy</button></li>             
              <li><button onClick={() => scrollToSection("services")} className="hover:text-teal-400 transition">Vaccination</button></li>              
              <li><button onClick={() => scrollToSection("services")} className="hover:text-teal-400 transition">Sleep Study Lab</button></li>
            </ul>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Contact */}
          {/* ---------------------------------------------------------------- */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-teal-400 mt-1" size={18} />
                <a
                  href="https://maps.app.goo.gl/JQVNpEqLtJK8yTu29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition"
                >
                  AECS Layout, A-Block, Singasandra, Bangalore – 560068
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="text-teal-400" size={18} />
                <a href="tel:+918073718255" className="hover:text-teal-400 transition">
                  +91 8073718255
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="text-teal-400" size={18} />
                <a
                  href="mailto:healthtreeclinic@gmail.com"
                  className="hover:text-teal-400 transition"
                >
                  healthtreeclinic@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Bottom */}
        {/* ---------------------------------------------------------------- */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400 text-center md:text-left">
              © 2026 Clinique HealthTree. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-teal-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-teal-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-teal-400 transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
