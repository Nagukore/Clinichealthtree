import { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Doctors", href: "#doctors" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-teal-700 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 8041663537</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Clock size={16} />
              <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
            </div>
          </div>

          <button className="hidden md:block bg-white text-teal-700 px-4 py-1 rounded-full text-sm font-semibold hover:bg-teal-50 transition">
            Book Appointment
          </button>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* LOGO + TEXT */}
            <div className="flex items-center gap-2 cursor-pointer">

              <img
                src="/logo.png"
                alt="Clinique HealthTree Logo"
                className="h-10 w-auto md:h-14 object-contain"
              />

              <div className="flex flex-col leading-tight">
                <h1 className="text-lg md:text-xl font-bold text-teal-700 whitespace-nowrap">
                  Clinique HealthTree
                </h1>
                <p className="text-[10px] md:text-xs text-gray-600 whitespace-nowrap">
                  Multispeciality Clinic & Diagnostics
                </p>
              </div>

            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-gray-700 hover:text-teal-600 font-medium group transition"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-800 hover:text-teal-600 transition"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="bg-white border-t backdrop-blur-md px-4 py-3 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-md font-medium transition"
              >
                {link.name}
              </a>
            ))}

            <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-teal-700 transition transform hover:scale-[1.02]">
              Book Appointment
            </button>
          </div>
        </div>
      </nav>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default Navbar;
