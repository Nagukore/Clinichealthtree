import React, { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Users,
  ChevronLeft,
  ChevronRight,
  Phone,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Slides Data */
/* ------------------------------------------------------------------ */
const slides = [
  {
    url: "/Healthcheck.png",
    title: "Complete Health Check-Ups",
    subtitle: "Affordable preventive health packages for all age groups",
  },
  {
    url: "/Clinic1.png",
    title: "Your Heart Deserves the Best Care",
    subtitle: "ECG • ECHO • TMT • HOLTER • ABPM • Cardiologist Consultation",
  },
  {
    url: "/SleepApnea.png",
    title: "Sleep Apnea & Sleep Study",
    subtitle: "In-house sleep lab with expert consultation",
  },
  {
    url: "/Fever.jpg",
    title: "Fever Panel – Fast Reports",
    subtitle: "CBC, ESR, CRP, Dengue & more – reports in 2 hours",
  },
  {
    url: "/Services.jpg",
    title: "Multispeciality Healthcare",
    subtitle: "Doctors, diagnostics, lab, pharmacy & more",
  },
  {
    url: "/Clinic3.png",
    title: "Clinique HealthTree",
    subtitle: "Multispeciality Clinic & Diagnostics – Singasandra",
  },
];

/* ------------------------------------------------------------------ */
/* Main Hero Component */
/* ------------------------------------------------------------------ */
export default function Hero() {
  const [current, setCurrent] = useState(0);

  /* Autoplay */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-teal-50 via-white to-blue-50 py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Carousel */}
          <div className="relative h-[60vh] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl bg-black">
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                {/* Blurred background effect */}
                <img
                  src={slide.url}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-50"
                />
                <div className="absolute inset-0 bg-black/40" />

                {/* Foreground image + caption */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 gap-4">
                  <img
                    src={slide.url}
                    alt={slide.title}
                    className="h-[75%] max-w-[90%] object-contain rounded-xl shadow-2xl"
                  />
                  <p className="text-xs sm:text-sm text-white bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-center max-w-[90%] border border-white/10">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            ))}

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full z-20 transition"
              aria-label="Previous slide"
            >
              <ChevronLeft className="text-white" size={26} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full z-20 transition"
              aria-label="Next slide"
            >
              <ChevronRight className="text-white" size={26} />
            </button>

            {/* Progress Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`rounded-full transition-all duration-500 ${
                    idx === current ? "bg-white w-8 h-2" : "bg-white/40 w-2 h-2"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Health is Our
              <span className="text-teal-600"> Priority</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Experience world-class medical services with compassionate
              healthcare professionals and advanced diagnostics.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition shadow-lg shadow-teal-200 flex items-center gap-2"
              >
                <Calendar size={18} />
                Book Appointment
              </button>

              <a
                href="tel:+918073718255"
                className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold border-2 border-teal-600 hover:bg-teal-50 transition flex items-center gap-2"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Feature
            icon={<Calendar size={26} />}
            title="Quick Scheduling"
            desc="Book appointments online in seconds"
            color="teal"
            linkType="scroll"
            linkTarget="contact"
          />

          <Feature
            icon={<MapPin size={26} />}
            title="Convenient Location"
            desc="AECS Layout, Singasandra"
            color="blue"
            linkType="external"
            linkTarget="https://maps.app.goo.gl/JQVNpEqLtJK8yTu29" 
          />

          <Feature
            icon={<Users size={26} />}
            title="Expert Doctors"
            desc="Highly qualified specialists"
            color="green"
            linkType="scroll"
            linkTarget="doctors"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Feature Card Component (Defined outside Hero) */
/* ------------------------------------------------------------------ */
interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: "teal" | "blue" | "green";
  linkType: "scroll" | "external";
  linkTarget: string;
}

function Feature({
  icon,
  title,
  desc,
  color,
  linkType,
  linkTarget,
}: FeatureProps) {
  const colors: Record<string, string> = {
    teal: "bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white",
    blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    green: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
  };

  const handleClick = () => {
    if (linkType === "scroll") {
      document.getElementById(linkTarget)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (linkType === "external") {
    return (
      <a
        href={linkTarget}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex items-start gap-4"
      >
        <div className={`p-3 rounded-xl transition-all duration-300 transform group-hover:rotate-6 group-hover:scale-110 ${colors[color]}`}>
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-teal-700 transition">{title}</h3>
          <p className="text-gray-600 text-sm">{desc}</p>
          <span className="inline-block mt-2 text-xs font-semibold text-teal-600">View on Map →</span>
        </div>
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="group relative text-left bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex items-start gap-4 w-full"
    >
      <div className={`p-3 rounded-xl transition-all duration-300 transform group-hover:rotate-6 group-hover:scale-110 ${colors[color]}`}>
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-teal-700 transition">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
        <span className="inline-block mt-2 text-xs font-semibold text-teal-600">Learn More →</span>
      </div>
    </button>
  );
}