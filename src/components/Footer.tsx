import { Heart, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-teal-600 p-2 rounded-lg">
                <Heart className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white text-xl font-bold">Clinique HealthTree</h3>
                <p className="text-sm text-gray-400">Medical Clinic</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Providing comprehensive healthcare services with compassion and excellence for over 25 years.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-teal-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition">About Us</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Services</a></li>
              <li><a href="#doctors" className="hover:text-teal-400 transition">Our Doctors</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400 transition">Cardiology</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Pediatrics</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Internal Medicine</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Mental Health</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Emergency Care</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-sm">1358, AECS Layout, A-Block, 60 Feet Road, Singasandra, Bangalore-68</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-teal-400 flex-shrink-0" size={20} />
                <a href="tel:+918041663537" className="hover:text-teal-400 transition">+91 8041663537</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-teal-400 flex-shrink-0" size={20} />
                <a href="mailto:info@healthcare.com" className="hover:text-teal-400 transition">info@healthcare.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; 2024 Clinique HealthTree. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
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
