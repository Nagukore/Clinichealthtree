import React from 'react';
import { 
  Activity, Baby, Heart, Pill, Stethoscope, Wind, 
  FlaskConical, Syringe, HeartPulse, Scissors, Droplets, 
  ChevronRight, Brain, Bone, Users, Microscope, 
  Scan, Smile, Zap, Moon, Apple, Ear, ShieldCheck, 
  Stethoscope as DoctorIcon, Eye, Thermometer, ClipboardList
} from 'lucide-react';
import { motion } from 'framer-motion';

const SpecialtyClinics = [
  { icon: Stethoscope, title: 'Physician & Diabetology', color: 'bg-blue-50', iconColor: 'text-blue-600' },
  { icon: Heart, title: 'Cardiology', color: 'bg-red-50', iconColor: 'text-red-600' },
  { icon: Wind, title: 'Pulmonology', color: 'bg-cyan-50', iconColor: 'text-cyan-600' },
  { icon: Bone, title: 'Orthopaedics', color: 'bg-orange-50', iconColor: 'text-orange-600' },
  { icon: Users, title: 'Gynecology / Obstetrics', color: 'bg-pink-50', iconColor: 'text-pink-600' },
  { icon: Baby, title: 'Pediatrics', color: 'bg-indigo-50', iconColor: 'text-indigo-600' },
  { icon: Droplets, title: 'Gastroenterology', color: 'bg-emerald-50', iconColor: 'text-emerald-600' },
  { icon: Brain, title: 'Neurology', color: 'bg-purple-50', iconColor: 'text-purple-600' },
  { icon: Scissors, title: 'General & Gastro-Surgery', color: 'bg-slate-100', iconColor: 'text-slate-600' },
  { icon: Ear, title: 'ENT', color: 'bg-amber-50', iconColor: 'text-amber-600' },
  { icon: Activity, title: 'Urology', color: 'bg-blue-100', iconColor: 'text-blue-700' },
  { icon: Scan, title: 'Radiology', color: 'bg-violet-50', iconColor: 'text-violet-600' },
  { icon: Microscope, title: 'Pathology', color: 'bg-lime-50', iconColor: 'text-lime-600' },
  { icon: Brain, title: 'Psychiatry & Psychology', color: 'bg-indigo-50', iconColor: 'text-indigo-700' },
  { icon: Smile, title: 'Dermatology', color: 'bg-rose-50', iconColor: 'text-rose-600' },
  { icon: Apple, title: 'Nutritionist', color: 'bg-green-50', iconColor: 'text-green-600' },
];

const DiagnosticServices = [
  { icon: DoctorIcon, title: 'Doctor Consultation', desc: 'Expert specialist opinions' },
  { icon: FlaskConical, title: 'Laboratory', desc: 'Comprehensive Pathology tests' },
  { icon: Scan, title: 'Digital X-Ray', desc: 'Low-dose digital imaging' },
  { icon: Microscope, title: 'Ultrasound & Doppler', desc: 'Advanced organ & vascular scans' },
  { icon: HeartPulse, title: 'ECG/ECHO/TMT/Holter', desc: 'Complete cardiac diagnostics' },
  { icon: Wind, title: 'PFT & Allergy Test', desc: 'Lung function & sensitivity tests' },
  { icon: ClipboardList, title: 'Endoscopy/Colonoscopy', desc: 'Internal GI tract examinations' },
  { icon: Pill, title: 'Pharmacy', desc: 'In-house quality medicines' },
  { icon: Activity, title: 'Physiotherapy', desc: 'Rehab & Pain management' },
  { icon: Zap, title: 'Minor Surgery & Day Care', desc: 'Surgical & trauma procedures' },
  { icon: Bone, title: 'Trauma & Fracture Care', desc: 'Emergency orthopaedic support' },
  { icon: ShieldCheck, title: 'Intervention Radiology', desc: 'Minimally invasive procedures' },
  { icon: Syringe, title: 'Vaccination', desc: 'Child & adult immunization' },
  { icon: Moon, title: 'Sleep Study Lab', desc: 'Sleep apnea & disorder analysis' },
];

function Services() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.03, duration: 0.4 }
    })
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- SPECIALTY CLINICS --- */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Specialty <span className="text-teal-600">Clinics</span>
            </h2>
            <div className="h-1.5 w-20 bg-teal-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {SpecialtyClinics.map((item, index) => (
              <motion.div 
                key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
                className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex flex-col items-center text-center group hover:bg-white hover:shadow-lg hover:border-teal-100 transition-all"
              >
                <div className={`${item.color} w-14 h-14 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <item.icon className={item.iconColor} size={24} />
                </div>
                <h3 className="text-slate-800 font-bold text-xs md:text-sm tracking-tight">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- OUR SERVICES --- */}
        <div className="pt-16 border-t border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Our <span className="text-teal-600">Services</span>
            </h2>
            <div className="h-1.5 w-20 bg-teal-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DiagnosticServices.map((item, index) => (
              <motion.div 
                key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
                className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-teal-100 transition-all group"
              >
                <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-teal-500 transition-colors">
                  <item.icon size={22} className="text-teal-600 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-sm tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 text-[11px] font-medium leading-tight mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- CONTACT CTA --- */}
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          className="mt-20 bg-slate-900 rounded-3xl p-10 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-2">Clinique Health Tree & Diagnostics</h3>
          <p className="text-slate-400 mb-8 text-sm">Multispeciality clinic providing comprehensive healthcare solutions.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm font-bold">
            <a href="tel:+918073718255" className="text-teal-400 hover:text-teal-300">Mob: 8073718255</a>
            <a href="tel:08041663537" className="text-teal-400 hover:text-teal-300">Ph: 080-41663537</a>
            <span className="text-slate-500">healthtreeclinique@gmail.com</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Services;