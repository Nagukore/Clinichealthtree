import React from 'react';
import { 
  Activity, Baby, Heart, Pill, Stethoscope, Wind, 
  FlaskConical, Syringe, HeartPulse, Scissors, Droplets, ChevronRight 
} from 'lucide-react';
import { motion } from 'framer-motion';

function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Expert heart care, ECG, and cardiovascular treatments.',
      color: 'bg-red-50',
      iconColor: 'text-red-600',
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized neonatal and childhood wellness care.',
      color: 'bg-pink-50',
      iconColor: 'text-pink-600',
    },
    {
      icon: Droplets,
      title: 'Gastroenterology',
      description: 'Advanced liver and digestive health management.',
      color: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      icon: Scissors,
      title: 'General Surgery',
      description: 'Laparoscopic and minimal-access surgical expertise.',
      color: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
    {
      icon: Stethoscope,
      title: 'Internal Medicine',
      description: 'Comprehensive diagnosis for chronic adult diseases.',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: Wind,
      title: 'Pulmonology',
      description: 'Respiratory care and sleep apnea diagnostics.',
      color: 'bg-cyan-50',
      iconColor: 'text-cyan-600',
    },
    {
      icon: FlaskConical,
      title: 'Lab Tests',
      description: 'Rapid, verified diagnostic and pathology testing.',
      color: 'bg-lime-50',
      iconColor: 'text-lime-600',
    },
    {
      icon: Activity,
      title: 'Physiotherapy',
      description: 'Pain management and physical rehabilitation.',
      color: 'bg-teal-50',
      iconColor: 'text-teal-600',
    },
    {
      icon: Syringe,
      title: 'Vaccinations',
      description: 'Complete pediatric and adult immunization programs.',
      color: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
    },
    {
      icon: Pill,
      title: 'Pharmacy',
      description: 'In-house pharmacy with verified medications.',
      color: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      icon: HeartPulse,
      title: 'Health Checks',
      description: 'Complete preventive health screening packages.',
      color: 'bg-rose-50',
      iconColor: 'text-rose-600',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Aesthetic Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0D9488 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-teal-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block"
          >
            Clinical Departments
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter max-w-2xl leading-[1.1]">
            Comprehensive <br />
            <span className="text-teal-600">Clinical Expertise.</span>
          </h2>
        </div>

        {/* HORIZONTAL GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex items-center gap-5 p-5 bg-slate-50/50 rounded-2xl border border-slate-100 hover:bg-white hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 cursor-pointer"
              >
                {/* Side Icon Box */}
                <div className={`${service.color} w-14 h-14 shrink-0 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className={service.iconColor} size={26} />
                </div>
                
                {/* Details Aside Of Icon */}
                <div className="flex-grow min-w-0">
                  <h3 className="font-black text-slate-900 text-sm mb-1 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-[11px] font-medium leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Micro Interaction Arrow */}
                <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-teal-400">
                   <ChevronRight size={16} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Professional CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-16 bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 text-center relative overflow-hidden"
        >
          {/* Subtle Glow Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              Need Urgent Specialist Consultation?
            </h3>
            <p className="text-slate-400 text-base mb-8 max-w-xl mx-auto font-medium leading-relaxed">
              Our specialized emergency wing is prepared for rapid diagnostic intervention and care.
            </p>
            <div className="flex justify-center">
              <a href="tel:+918073718255" className="inline-flex items-center gap-3 bg-teal-500 text-slate-950 px-10 py-4 rounded-2xl font-black text-sm hover:bg-white transition-all shadow-xl shadow-teal-500/20 active:scale-95">
                Call Direct: +91 8073718255
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;