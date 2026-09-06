import React from 'react';
import {
  Activity,
  Baby,
  HeartPulse,
  Pill,
  Stethoscope,
  Wind,
  FlaskConical,
  Syringe,
  Scissors,
  Droplets,
  Brain,
  Bone,
  Microscope,
  Scan,
  Smile,
  Zap,
  Moon,
  Apple,
  Ear,
  ShieldCheck,
  Accessibility,
  Radiation,
  UserRound,
  Waves,
  CircleDot,
} from 'lucide-react';

/* =========================
   TYPES
========================= */
type ClinicItem = {
  icon: React.ElementType;
  title: string;
  color: string;
  iconColor: string;
};

type ServiceItem = {
  icon: React.ElementType;
  title: string;
  desc: string;
};

/* =========================
   SPECIALTY CLINICS
========================= */
const SpecialtyClinics: ClinicItem[] = [
  { icon: Stethoscope, title: 'Physician & Diabetology', color: 'bg-blue-50', iconColor: 'text-blue-600' },
  { icon: HeartPulse, title: 'Cardiology', color: 'bg-red-50', iconColor: 'text-red-600' },
  { icon: Wind, title: 'Pulmonology', color: 'bg-cyan-50', iconColor: 'text-cyan-600' },
  { icon: Bone, title: 'Orthopaedics', color: 'bg-orange-50', iconColor: 'text-orange-600' },
  { icon: Baby, title: 'Gynecology / Obstetrics', color: 'bg-pink-50', iconColor: 'text-pink-600' },
  { icon: Baby, title: 'Pediatrics', color: 'bg-indigo-50', iconColor: 'text-indigo-600' },
  { icon: Droplets, title: 'Gastroenterology', color: 'bg-emerald-50', iconColor: 'text-emerald-600' },
  { icon: Brain, title: 'Neurology', color: 'bg-purple-50', iconColor: 'text-purple-600' },
  { icon: Scissors, title: 'General & Gastro-Surgery', color: 'bg-slate-100', iconColor: 'text-slate-600' },
  { icon: Ear, title: 'ENT', color: 'bg-amber-50', iconColor: 'text-amber-600' },
  { icon: Droplets, title: 'Urology & Nephrology', color: 'bg-blue-100', iconColor: 'text-blue-700' },
  { icon: Radiation, title: 'Radiology', color: 'bg-violet-50', iconColor: 'text-violet-600' },
  { icon: Microscope, title: 'Pathology', color: 'bg-lime-50', iconColor: 'text-lime-600' },
  { icon: ShieldCheck, title: 'Psychiatry & Psychology', color: 'bg-indigo-50', iconColor: 'text-indigo-700' },
  { icon: Smile, title: 'Dermatology', color: 'bg-rose-50', iconColor: 'text-rose-600' },
  { icon: Apple, title: 'Nutritionist', color: 'bg-green-50', iconColor: 'text-green-600' },
];

/* =========================
   DIAGNOSTIC SERVICES
========================= */
const DiagnosticServices: ServiceItem[] = [
  { icon: UserRound, title: 'Doctor Consultation', desc: 'Expert specialist opinions' },
  { icon: FlaskConical, title: 'Laboratory', desc: 'Comprehensive pathology tests' },
  { icon: Scan, title: 'Digital X-Ray', desc: 'Low-dose digital imaging' },
  { icon: Waves, title: 'Ultrasound & Doppler', desc: 'Advanced organ & vascular scans' },
  { icon: Activity, title: 'ECG / ECHO / TMT / Holter', desc: 'Complete cardiac diagnostics' },
  { icon: Wind, title: 'PFT & Allergy Test', desc: 'Lung function & sensitivity tests' },
  { icon: CircleDot, title: 'Endoscopy / Colonoscopy', desc: 'Internal GI tract examinations' },
  { icon: Pill, title: 'Pharmacy', desc: 'In-house quality medicines' },
  { icon: Accessibility, title: 'Physiotherapy', desc: 'Rehab & pain management' },
  { icon: Zap, title: 'Minor Surgery & Day Care', desc: 'Surgical & trauma procedures' },
  { icon: Bone, title: 'Trauma & Fracture Care', desc: 'Emergency orthopaedic support' },
  { icon: ShieldCheck, title: 'Interventional Radiology', desc: 'Minimally invasive procedures' },
  { icon: Syringe, title: 'Vaccination', desc: 'Child & adult immunization' },
  { icon: Moon, title: 'Sleep Study Lab', desc: 'Sleep apnea & disorder analysis' },
];

/* =========================
   COMPONENT
========================= */
const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SPECIALTY CLINICS */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Specialty <span className="text-teal-600">Clinics</span>
            </h2>
            <div className="h-1.5 w-20 bg-teal-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SpecialtyClinics.map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex flex-col items-center text-center transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <div className={`${item.color} w-14 h-14 rounded-xl flex items-center justify-center mb-3`}>
                  <item.icon className={item.iconColor} size={24} />
                </div>
                <h3 className="text-slate-800 font-bold text-xs md:text-sm">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* DIAGNOSTIC SERVICES */}
        <div className="pt-16 border-t border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Our <span className="text-teal-600">Services</span>
            </h2>
            <div className="h-1.5 w-20 bg-teal-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DiagnosticServices.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl"
              >
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <item.icon size={22} className="text-teal-600" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-sm">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-[11px] leading-tight mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
