import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Calendar,
  ChevronDown,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Types */
/* ------------------------------------------------------------------ */
interface Slide {
  url: string;
  title: string;
  subtitle: string;
}

/* ------------------------------------------------------------------ */
/* Slides Data */
/* ------------------------------------------------------------------ */
const landingImages: Slide[] = [
    {
    url: "/Clinic3.png",
    title: "Clinique HealthTree",
    subtitle: "Multispeciality Clinic & Diagnostics – Singasandra",
  },
  {
    url: "/Healthcheck.png",
    title: "Complete Health Check-Ups",
    subtitle: "Affordable preventive health packages for all age groups",
  },
  {
    url: "/Clinic1.png",
    title: "Your Heart Deserves the Best Care",
    subtitle:
      "ECG • ECHO • TMT • HOLTER • ABPM • Cardiologist Consultation",
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
//   {
//     url: "/landing/newyear-checkup.jpg",
//     title: "Start Your Year Healthy",
//     subtitle: "Health check-up packages starting from ₹799",
//   },
  {
    url: "/Services.jpg",
    title: "Multispeciality Healthcare",
    subtitle: "Doctors, diagnostics, lab, pharmacy & more",
  },
];

/* ------------------------------------------------------------------ */
/* Component */
/* ------------------------------------------------------------------ */
export default function LandingCarousel() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  /* Auto play (FASTER) */
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % landingImages.length);
    }, 3500); // ⬅ faster

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % landingImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + landingImages.length) % landingImages.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides */}
      <div className="relative w-full h-screen">
        {landingImages.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Blurred background */}
            <img
              src={slide.url}
              alt=""
              className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Main content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen gap-6 lg:gap-12 px-4 sm:px-6">
              {/* Poster */}
              <img
                src={slide.url}
                alt={slide.title}
                className="
                  w-auto
                  max-w-[90%]
                  h-[50vh]
                  sm:h-[55vh]
                  lg:h-[70vh]
                  lg:max-w-[420px]
                  object-contain
                  rounded-xl
                  shadow-2xl
                "
              />

              {/* Text + CTA */}
              <div className="max-w-xl text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-5">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-teal-700 transition flex items-center justify-center gap-2"
                  >
                    <Calendar size={18} />
                    Book Appointment
                  </button>

                  <a
                    href="tel:+918073718255"
                    className="bg-white text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur p-2 sm:p-3 rounded-full z-20"
      >
        <ChevronLeft size={28} className="text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur p-2 sm:p-3 rounded-full z-20"
      >
        <ChevronRight size={28} className="text-white" />
      </button>

      {/* Slide-down animated arrow */}
      <button
        onClick={() => scrollToSection("services")}
        className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center animate-bounce"
        aria-label="Scroll Down"
      >
        <span className="text-xs mb-1 tracking-wide opacity-80">
          Scroll
        </span>
        <ChevronDown size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {landingImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`rounded-full transition-all ${
              idx === currentSlide
                ? "bg-white w-8 sm:w-10 h-2 sm:h-3"
                : "bg-white/50 w-2 sm:w-3 h-2 sm:h-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
