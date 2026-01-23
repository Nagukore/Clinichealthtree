import React, { useState } from "react";
import {
  Award,
  Clock,
  Phone,
  X,
  ChevronRight,
  GraduationCap,
  ShieldCheck,
  Activity,
  Heart,
  Baby,
  Bone,
  Droplets,
  Scan,
  Languages,
  CheckCircle2,
  Stethoscope,
  Briefcase,
  Scissors
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

/* ================= TYPES ================= */

interface Doctor {
  id: string;
  name: string;
  category: string;
  specialty: string;
  icon: React.ReactNode;
  experience: string;
  education: string;
  philosophy: string;
  impact: string;
  full: string;
  expertise: string[];
  conditions: string[];
  procedures: string[];
  languages: string[];
  whoShouldVisit: string;
  availability: string;
  image: string;
}

/* ================= ANIMATION VARIANTS ================= */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ================= DATA (Complete 11 Doctors) ================= */

const doctors: Doctor[] = [
  {
    id: "dr-sujith-ms",
    name: "Dr. Sujith M S",
    category: "General Medicine",
    specialty: "Consultant Physician",
    icon: <Stethoscope className="text-teal-600" />,
    experience: "15+ Years",
    education: "MBBS, DNB Internal Medicine, PG Diploma in Diabetes (RCP UK)",
    philosophy: "Precision diagnosis through evidence-based clinical protocols.",
    impact: "Expert in multi-system medical disorders and structured long-term care.",
    full: "Dr. Sujith is a senior consultant known for high diagnostic accuracy. He specializes in managing complex chronic diseases with a focus on long-term health optimization.",
    expertise: ["Diabetes & Thyroid", "Infectious Diseases", "Hypertension", "Respiratory"],
    conditions: ["Uncontrolled Diabetes", "Thyroid Disorders", "Chronic Fatigue", "Hypertension"],
    procedures: ["Health Screenings", "Diabetes Optimization", "Infectious Disease Management"],
    languages: ["English", "Kannada", "Hindi"],
    whoShouldVisit: "Adults with lifestyle diseases, recurrent infections, or chronic fatigue.",
    availability: "Mon–Sat: 9 AM – 8 PM",
    image: "/Sujith.jpg",
  },
  {
    id: "dr-karthik-sm",
    name: "Dr. Karthik S M",
    category: "General Medicine",
    specialty: "Internal Medicine Specialist",
    icon: <Activity className="text-teal-600" />,
    experience: "17+ Years",
    education: "MBBS, MD (Internal Medicine), Diploma in Allergy & Asthma",
    philosophy: "Preventive medicine focused on long-term patient wellness.",
    impact: "Specialist in chronic metabolic and respiratory allergy conditions.",
    full: "Dr. Karthik practices personalized medicine with a strong emphasis on allergy, asthma, and lifestyle-related disorders.",
    expertise: ["Allergy & Asthma", "Preventive Health", "Metabolic Disorders"],
    conditions: ["Asthma", "Allergic Rhinitis", "Metabolic Syndrome", "Chronic Cough"],
    procedures: ["Allergy Testing", "Asthma Control Planning", "Cardiac Risk Screening"],
    languages: ["English", "Kannada", "Hindi"],
    whoShouldVisit: "Patients with chronic allergies, asthma, or metabolic health concerns.",
    availability: "Mon–Sat: 9 AM – 1:30 PM",
    image: "/Dr. Karthik S M.png",
  },
  {
    id: "dr-sagar",
    name: "Dr. Sagar",
    category: "Pulmonology",
    specialty: "Consultant Pulmonologist",
    icon: <Activity className="text-blue-600" />,
    experience: "11+ Years",
    education: "MBBS, DTCD, DNB (Respiratory Medicine)",
    philosophy: "Restoring respiratory freedom through advanced sleep science.",
    impact: "Established advanced protocols for sleep apnea and COPD.",
    full: "Dr. Sagar manages the full spectrum of respiratory diseases including asthma, COPD, and sleep-related breathing disorders.",
    expertise: ["Sleep Apnea (OSA)", "COPD", "Interstitial Lung Disease"],
    conditions: ["Snoring", "Chronic Breathlessness", "Tuberculosis", "Lung Infections"],
    procedures: ["Pulmonary Function Tests", "Sleep Studies", "Bronchoscopy Guidance"],
    languages: ["English", "Kannada", "Hindi"],
    whoShouldVisit: "Anyone with sleep snoring, chronic cough, or breathing difficulties.",
    availability: "Mon–Fri: 10 AM – 6 PM",
    image: "/Sagar.JPG",
  },
  {
    id: "dr-babu-reddy",
    name: "Dr. Babu Reddy",
    category: "Cardiology",
    specialty: "Interventional Cardiologist",
    icon: <Heart className="text-red-500" />,
    experience: "23+ Years",
    education: "MBBS, MD (General Medicine), DNB (Cardiology)",
    philosophy: "Aggressive cardiac stabilization and precision intervention.",
    impact: "Successfully performed thousands of life-saving angioplasties.",
    full: "A veteran cardiologist formerly at Sri Jayadeva Institute, specializing in complex coronary stenting and heart failure.",
    expertise: ["Angioplasty", "Stenting", "Heart Failure", "Vascular Disease"],
    conditions: ["Chest Pain", "Heart Attack", "Heart Failure", "Palpitations"],
    procedures: ["Coronary Angiography", "Angioplasty", "Pacemaker Guidance"],
    languages: ["English", "Kannada", "Telugu"],
    whoShouldVisit: "Patients with chest pain, heart conditions, or history of cardiac issues.",
    availability: "Tue-Sat: 10 AM - 5 PM",
    image: "/Dr. Babureddy.jpg",
  },
  {
    id: "dr-rajendra-reddy",
    name: "Dr. Rajendra Reddy",
    category: "Orthopaedics",
    specialty: "Senior Orthopaedic Surgeon",
    icon: <Bone className="text-amber-600" />,
    experience: "26+ Years",
    education: "MBBS, MS (Orthopaedics), Fellowship in Paediatric Ortho (France)",
    philosophy: "Restoring peak mobility through surgical precision.",
    impact: "Regional pioneer in limb-lengthening and deformity correction.",
    full: "Dr. Reddy specializes in trauma, joint replacements, and paediatric bone deformities using international techniques.",
    expertise: ["Joint Replacement", "Spinal Surgery", "Paediatric Ortho"],
    conditions: ["Arthritis", "Bone Deformities", "Fractures", "Scoliosis"],
    procedures: ["Hip/Knee Replacement", "Spine Surgery", "Ilizarov Deformity Correction"],
    languages: ["English", "Kannada", "Hindi", "French"],
    whoShouldVisit: "Patients with chronic joint pain, fractures, or bone deformities.",
    availability: "Mon–Thu: 9 AM – 4 PM",
    image: "/Dr. Rajendra Reddy.png",
  },
  {
    id: "dr-gundurao-hj",
    name: "Dr. Gundurao Harsh Joshi",
    category: "Cardiology",
    specialty: "Consultant Cardiologist",
    icon: <Heart className="text-red-500" />,
    experience: "16+ Years",
    education: "MBBS, MD (Medicine), DM (Cardiology)",
    philosophy: "Integrating advanced imaging for superior cardiac outcomes.",
    impact: "Expert in Rotablation and modern pacemaker technology.",
    full: "Specialist in primary coronary interventions and advanced valve treatments (TAVI).",
    expertise: ["IVL Angioplasty", "Pacemakers", "Echocardiography"],
    conditions: ["Valvular Heart Disease", "Arrhythmia", "Blocked Arteries"],
    procedures: ["TAVI Guidance", "Pacemaker Implantation", "Rotablation"],
    languages: ["English", "Kannada", "Marathi"],
    whoShouldVisit: "Patients requiring pacemakers or advanced valve consultations.",
    availability: "Mon-Fri: 9 AM - 5 PM",
    image: "/Dr.Gundurao Harsh Joshi.png",
  },
  {
    id: "dr-ashwini-bs",
    name: "Dr. Ashwini B S",
    category: "Paediatrics",
    specialty: "Consultant Paediatrician",
    icon: <Baby className="text-pink-500" />,
    experience: "12+ Years",
    education: "MBBS, DCH, DNB Pediatrics",
    philosophy: "Compassionate care for every stage of childhood growth.",
    impact: "Recognized expert in neonatal nutrition and growth evaluation.",
    full: "Dr. Ashwini provides comprehensive care for newborns and children, focusing on immunisation and allergy management.",
    expertise: ["Neonatal Care", "Immunisation", "Pediatric Allergy"],
    conditions: ["Growth Delays", "Childhood Infections", "Newborn Wellness"],
    procedures: ["Vaccination", "Growth Monitoring", "Nutrition Assessment"],
    languages: ["English", "Kannada", "Hindi"],
    whoShouldVisit: "Parents seeking wellness checks or medical care for infants and children.",
    availability: "Mon–Sat: 9 AM – 1 PM",
    image: "/Ashwini.jpg",
  },
  {
    id: "dr-sujit-j",
    name: "Dr. Sujit J",
    category: "Radiology",
    specialty: "Consultant Radiologist",
    icon: <Scan className="text-indigo-600" />,
    experience: "17+ Years",
    education: "MBBS, MD (Radio Diagnosis)",
    philosophy: "High-fidelity imaging as the foundation of accurate treatment.",
    impact: "Specialist in obstetric and specialized fetal echocardiography.",
    full: "Provides precision imaging services including 3D/4D scans and musculoskeletal doppler studies.",
    expertise: ["Fetal Echo", "Doppler Studies", "3D/4D Ultrasound"],
    conditions: ["Pregnancy Anomalies", "Vascular Issues", "Musculoskeletal Pain"],
    procedures: ["Fetal Echo", "Anomaly Scans", "Peripheral Doppler"],
    languages: ["English", "Kannada", "Hindi"],
    whoShouldVisit: "Expectant mothers or patients requiring specialized diagnostic scans.",
    availability: "Tue-Sat: 10 AM - 4 PM",
    image: "/Dr. Sujith J.jpg",
  },
  {
    id: "dr-pramod-kumar",
    name: "Dr. Pramod Kumar D A",
    category: "Hepatology",
    specialty: "Liver Specialist / Transplant Physician",
    icon: <Droplets className="text-emerald-600" />,
    experience: "Senior Consultant",
    education: "MD, DM (Hepatology) - PGIMER Chandigarh",
    philosophy: "Evidence-based management of complex liver disorders.",
    impact: "Leader in post-liver transplant care and liver cancer management.",
    full: "National expert in managing viral hepatitis, cirrhosis, and pre-transplant workups.",
    expertise: ["Liver Transplant", "Liver Cancer", "Cirrhosis"],
    conditions: ["Fatty Liver", "Jaundice", "Hepatitis", "Ascites"],
    procedures: ["Transplant Evaluation", "Liver Biopsy Guidance", "Cancer Screening"],
    languages: ["English", "Hindi", "Punjabi"],
    whoShouldVisit: "Patients with liver disease, chronic jaundice, or transplant needs.",
    availability: "By Appointment",
    image: "/Dr. pramod.png",
  },
  {
    id: "dr-sachin-subbaraya",
    name: "Dr. Sachin Subbaraya",
    category: "General Surgery",
    specialty: "Associate Consultant, Gastrointestinal Surgery",
    icon: <Scissors className="text-orange-600" />,
    experience: "10+ Years",
    education: "MBBS, MS (General Surgery), FIAGES, FMAS",
    philosophy: "Minimizing recovery times and scarring through cutting-edge technology.",
    impact: "Expert in minimal-access surgery for a wide range of abdominal conditions.",
    full: "After pursuing an M.B.B.S degree and MS General Surgery from MS Ramaiah Institute, he served as a Senior Resident at Apollo Hospital and Associate Consultant at Manipal Hospital. He is known for individualized care and attention to each patient's needs.",
    expertise: ["Laparoscopic Surgery", "Laser Proctology", "EVLT specialist", "Advanced GI Surgery"],
    conditions: ["Gallbladder Stone", "Hernia Repair", "Varicose Veins", "Appendectomy"],
    procedures: ["Laparoscopic Surgery", "Laser Proctology", "Minimal-access Surgery", "Surgical Consultation"],
    languages: ["English", "Kannada", "Hindi"],
    whoShouldVisit: "Patients requiring advanced surgical intervention for abdominal or vascular issues.",
    availability: "By Appointment",
    image: "/Dr. Sachin.jpg",
  },
  {
    id: "dr-nikhil-bondade",
    name: "Dr. Nikhil Bondade",
    category: "Gastroenterology",
    specialty: "Medical Gastroenterologist & Hepatologist",
    icon: <Activity className="text-emerald-600" />,
    experience: "Specialist",
    education: "M.D Internal Medicine (JJMMC), Super Speciality in Medical Gastroenterology (PSG), Fellowship in Advanced Endoscopy (BIDS Mumbai)",
    philosophy: "Holistic management of liver and digestive health through advanced diagnostic technology.",
    impact: "Expertised in diagnostic and therapeutic endoscopy and liver cirrhosis management.",
    full: "Dr. Nikhil Bondade completed his M.D at JJMMC Davanagere and Super Speciality at PSG Coimbatore. He holds a Post Doctoral fellowship in Advanced therapeutic Endoscopy from BIDS Mumbai.",
    expertise: ["Therapeutic Endoscopy", "Hepatology", "Liver Diseases", "Pancreatitis"],
    conditions: ["Liver Cirrhosis", "Fatty Liver", "Pancreatitis", "Gall Bladder Pathology", "Gastrointestinal Diseases"],
    procedures: ["Diagnostic Endoscopy", "Colonoscopy", "Fibroscan", "ERCP"],
    languages: ["English", "Kannada", "Marathi"],
    whoShouldVisit: "Patients seeking expert care for liver diseases, gall bladder issues, or gastrointestinal screening.",
    availability: "By Appointment",
    image: "/Nikhil.jpeg",
  }
];

/* ================= COMPONENT ================= */

export default function DoctorsSection() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  return (
    <section id="doctors" className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* COMPACT SECTION HEADER */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-200 mb-4"
          >
            <ShieldCheck size={14} className="text-teal-700" />
            <span className="text-teal-800 text-[10px] font-black uppercase tracking-widest">
              Board Certified Specialists
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Meet Our <span className="text-teal-600">Expert Team</span>
          </h2>
        </div>

        {/* DOCTORS GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {doctors.map((doc) => (
            <motion.article
              key={doc.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[1.5rem] shadow-sm hover:shadow-xl border border-slate-200 flex flex-col overflow-hidden transition-all duration-300 group"
            >
              {/* IMAGE CONTAINER */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=HealthTree+Specialist'; }}
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-lg border border-slate-100 shadow-sm">
                   <span className="text-[10px] font-black text-slate-500 uppercase">{doc.experience}</span>
                </div>
              </div>

              {/* CONTENT PADDING */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="p-1 bg-teal-50 rounded-md shrink-0">{doc.icon}</div>
                  <span className="text-[10px] font-bold text-teal-600 uppercase tracking-wider">{doc.category}</span>
                </div>

                <h3 className="text-lg font-black text-slate-900 mb-0.5">{doc.name}</h3>
                <p className="text-slate-500 font-bold text-xs mb-3 leading-tight min-h-[2.5rem]">
                  {doc.specialty}
                </p>

                <p className="text-[11px] text-slate-500 mb-6 line-clamp-2 leading-relaxed min-h-[2.5rem]">
                  {doc.impact}
                </p>

                <button
                  onClick={() => setSelectedDoctor(doc)}
                  className="mt-auto w-full py-3 bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-teal-600 transition-colors shadow-sm"
                >
                  View Clinical Profile
                  <ChevronRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* DETAILED PROFESSIONAL MODAL */}
      <AnimatePresence>
        {selectedDoctor && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white max-w-5xl w-full rounded-[2.5rem] flex flex-col md:flex-row overflow-hidden max-h-[90vh] shadow-2xl"
            >
              {/* Modal Left Sidebar */}
              <div className="md:w-80 bg-slate-50 p-6 border-r flex flex-col">
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 shadow-md border-4 border-white">
                  <img src={selectedDoctor.image} className="w-full h-full object-cover object-top" alt={selectedDoctor.name} />
                </div>
                <div className="space-y-4 flex-grow">
                  <div className="flex gap-3 items-center">
                    <Award className="text-teal-600 shrink-0" size={18} />
                    <div>
                      <p className="text-[9px] font-black uppercase text-slate-400 leading-none mb-1">Experience</p>
                      <p className="font-bold text-slate-800 text-sm leading-none">{selectedDoctor.experience}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <GraduationCap className="text-teal-600 shrink-0" size={18} />
                    <div>
                      <p className="text-[9px] font-black uppercase text-slate-400 leading-none mb-1">Education</p>
                      <p className="font-bold text-[11px] leading-tight text-slate-800">{selectedDoctor.education}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200">
                    <div className="flex items-center gap-2 mb-3">
                        <Clock className="text-teal-600" size={16} />
                        <span className="text-[11px] font-bold text-slate-600">{selectedDoctor.availability}</span>
                    </div>
                </div>
              </div>

              {/* Modal Main Content Area */}
              <div className="flex-1 flex flex-col min-w-0">
                <div className="p-6 border-b flex justify-between items-center bg-white sticky top-0 z-10">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 mb-1 leading-none">{selectedDoctor.name}</h2>
                    <p className="text-teal-600 font-bold text-sm leading-none">{selectedDoctor.specialty}</p>
                  </div>
                  <button onClick={() => setSelectedDoctor(null)} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                    <X size={20} className="text-slate-500" />
                  </button>
                </div>

                <div className="p-8 overflow-y-auto space-y-8 bg-white">
                  <section>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Clinical Profile</h4>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">{selectedDoctor.full}</p>
                  </section>

                  <section className="bg-teal-50/50 p-5 rounded-2xl border border-teal-100">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-teal-700 mb-3 flex items-center gap-2">
                      <CheckCircle2 size={14} /> Clinical Mastery
                    </h4>
                    <p className="text-teal-900 text-xs font-bold leading-relaxed">{selectedDoctor.whoShouldVisit}</p>
                  </section>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                        <Activity size={12} /> Specialization
                      </h4>
                      <ul className="space-y-2">
                        {selectedDoctor.conditions.map((c, i) => (
                          <li key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-700">
                            <div className="w-1 h-1 rounded-full bg-teal-500" /> {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                        <Briefcase size={12} /> Procedures
                      </h4>
                      <ul className="space-y-2">
                        {selectedDoctor.procedures.map((p, i) => (
                          <li key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-700">
                            <div className="w-1 h-1 rounded-full bg-slate-400" /> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-100">
                    <a href="tel:+918041663537" className="w-full bg-teal-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-teal-700 transition-all shadow-lg shadow-teal-100">
                      <Phone size={18} /> Call Clinic Office
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}