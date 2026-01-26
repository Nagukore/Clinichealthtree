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
  CheckCircle2,
  Stethoscope,
  Briefcase,
  Scissors,
  Users,
  Wind,
  Ear
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
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/* ================= DOCTOR DATA ================= */

const doctors: Doctor[] = [
  {
    id: "dr-sujith-ms",
    name: "Dr. Sujith M S",
    category: "General Medicine",
    specialty: "Consultant Physician & Diabetologist",
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
    education: "MBBS, DNB, Diploma in Allergy & Asthma, MRCP",
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
    icon: <Wind className="text-blue-600" />,
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
    education: "MBBS, MS (Orthopaedics), Fellowship (France)",
    philosophy: "Restoring peak mobility through surgical precision.",
    impact: "Regional pioneer in limb-lengthening and deformity correction.",
    full: "Dr. Reddy specializes in trauma, joint replacements, and paediatric bone deformities using international techniques.",
    expertise: ["Joint Replacement", "Spinal Surgery", "Paediatric Ortho"],
    conditions: ["Arthritis", "Bone Deformities", "Fractures", "Scoliosis"],
    procedures: ["Hip/Knee Replacement", "Spine Surgery", "Ilizarov Correction"],
    languages: ["English", "Kannada", "Hindi", "French"],
    whoShouldVisit: "Patients with chronic joint pain, fractures, or bone deformities.",
    availability: "Mon–Thu: 9 AM – 4 PM",
    image: "/Dr. Rajendra reddy.jpg",
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
    image: "/Dr. Gundu Rao.jpg",
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
    category: "Gastroenterology",
    specialty: "Liver Specialist / Transplant Physician",
    icon: <Droplets className="text-emerald-600" />,
    experience: "Senior Consultant",
    education: "MD, DM (Hepatology) - PGIMER Chandigarh",
    philosophy: "Evidence-based management of complex liver disorders.",
    impact: "Leader in post-liver transplant care and liver cancer management.",
    full: "National expert in managing viral hepatitis, cirrhosis, and pre-transplant workups at Narayana Hospital.",
    expertise: ["Liver Transplant", "Liver Cancer", "Cirrhosis"],
    conditions: ["Fatty Liver", "Jaundice", "Hepatitis", "Ascites"],
    procedures: ["Transplant Evaluation", "Liver Biopsy", "Cancer Screening"],
    languages: ["English", "Hindi", "Punjabi"],
    whoShouldVisit: "Patients with liver disease, chronic jaundice, or transplant needs.",
    availability: "By Appointment",
    image: "/Dr. pramod.png",
  },
  {
    id: "dr-sachin-subbaraya",
    name: "Dr. Sachin Subbaraya",
    category: "Surgery",
    specialty: "Consultant Gastrointestinal Surgeon",
    icon: <Scissors className="text-orange-600" />,
    experience: "10+ Years",
    education: "MBBS, MS (Gen Surgery), FIAGES, FMAS",
    philosophy: "Minimizing recovery times through cutting-edge technology.",
    impact: "Expert in minimal-access surgery and laser proctology.",
    full: "Dr. Sachin specializes in advanced GI surgery and laparoscopic procedures with a focus on quick recovery.",
    expertise: ["Laparoscopic Surgery", "Laser Proctology", "Varicose Veins"],
    conditions: ["Gallstones", "Hernia", "Appendicitis", "Varicose Veins"],
    procedures: ["Laparoscopy", "Laser Treatment", "Abdominal Surgery"],
    languages: ["English", "Kannada", "Hindi"],
    whoShouldVisit: "Patients requiring surgical intervention for abdominal or vascular issues.",
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
    education: "MD (Internal Medicine), DM (Gastroenterology), Fellowship (BIDS)",
    philosophy: "Holistic digestive health through advanced endoscopy.",
    impact: "Expertised in therapeutic endoscopy and cirrhosis management.",
    full: "Dr. Nikhil holds advanced fellowships in therapeutic endoscopy and specializes in complex GI pathologies.",
    expertise: ["Therapeutic Endoscopy", "Hepatology", "Pancreatitis"],
    conditions: ["Cirrhosis", "Fatty Liver", "Pancreatitis", "Gastro Diseases"],
    procedures: ["Endoscopy", "Colonoscopy", "Fibroscan", "ERCP"],
    languages: ["English", "Kannada", "Marathi"],
    whoShouldVisit: "Patients seeking expert care for liver, gallbladder, or GI screening.",
    availability: "By Appointment",
    image: "/Nikhil.jpeg",
  },
  {
    id: "dr-janani",
    name: "Dr. Janani",
    category: "Obstetrics & Gynaecology",
    specialty: "Consultant OBG & Robotic Surgeon",
    icon: <Users className="text-pink-600" />,
    experience: "Specialist",
    education: "MBBS, Post Graduate (Chennai), MRCOG (UK)",
    philosophy: "Modern maternal care through minimally invasive excellence.",
    impact: "Expert in high-risk pregnancy and advanced robotic surgery.",
    full: "Dr. Janani completed training at Chennai University and the Royal College, UK. She specializes in robotic and laparoscopic gynecological surgery.",
    expertise: ["High Risk Pregnancy", "Robotic Surgery", "Laparoscopy", "Maternal Care"],
    conditions: ["High Risk Pregnancy", "Fibroids", "Ovarian Cysts", "Infertility"],
    procedures: ["Robotic Hysterectomy", "Hysteroscopy", "Laparoscopic Surgery"],
    languages: ["English", "Tamil", "Hindi"],
    whoShouldVisit: "Expectant mothers or women requiring advanced gynecological surgery.",
    availability: "By Appointment",
    image: "/Janani.jpeg",
  },
  {
    id: "dr-anila-viswanath",
    name: "Dr. Anila Viswanath T",
    category: "ENT",
    specialty: "ENT / Otorhinolaryngologist",
    icon: <Ear className="text-amber-600" />,
    experience: "19+ Years",
    education: "MBBS (Calicut), MS - ENT (BMCRI Bangalore)",
    philosophy: "Precision care for Ear, Nose, and Throat health.",
    impact: "Extensive experience in managing congenital and infectious ENT issues.",
    full: "With nearly 20 years of experience, Dr. Anila is a leading specialist in hearing loss and chronic ear conditions.",
    expertise: ["Ear Infections", "Hearing Loss", "Sinusitis", "Vertigo"],
    conditions: ["Congenital Ear Problems", "Tonsillitis", "Bad Breath", "Hearing Loss"],
    procedures: ["Tympanoplasty", "Sinus Surgery", "Nasal Surgery"],
    languages: ["English", "Malayalam", "Kannada", "Hindi"],
    whoShouldVisit: "Patients with chronic ear, nose, or throat infections.",
    availability: "Mon–Sat: 5 PM – 8 PM",
    image: "/Anila.jpg",
  },
  {
    id: "dr-lohith",
    name: "Dr. Lohith",
    category: "Urology",
    specialty: "Consultant Urologist & Transplant Surgeon",
    icon: <ShieldCheck className="text-blue-700" />,
    experience: "Senior Specialist",
    education: "MBBS, MS, DrNB (Urology) - Narayana Health",
    philosophy: "Precision-driven urological care with a patient-centered approach.",
    impact: "Expert in Uro-Oncology and Robotic/Transplant Urology.",
    full: "Dr. Lohith brings international experience from Mount Sinai and Northwell, New York. He is a regional leader in robotic urology.",
    expertise: ["Robotic Urology", "Kidney Transplant", "Uro-Oncology", "Endourology"],
    conditions: ["Prostate Cancer", "Kidney Stones", "Bladder Issues", "Renal Failure"],
    procedures: ["Radical Prostatectomy", "Partial Nephrectomy", "Kidney Transplant"],
    languages: ["English", "Kannada", "Hindi"],
    whoShouldVisit: "Patients requiring complex kidney, prostate, or bladder surgeries.",
    availability: "By Appointment",
    image: "/Lohith.jpg",
  },
  {
    id: "dr-priyadarshini",
    name: "Dr. Priyadarshini",
    category: "General Medicine",
    specialty: "Consultant Physician",
    icon: <Stethoscope className="text-teal-600" />,
    experience: "TBD",
    education: "MBBS, MD (Internal Medicine)",
    philosophy: "Comprehensive and empathetic patient care.",
    impact: "Focus on preventive health and chronic disease management.",
    full: "Dr. Priyadarshini is a dedicated physician focused on internal medicine and long-term wellness protocols.",
    expertise: ["Internal Medicine", "Preventive Care"],
    conditions: ["Hypertension", "General Ailments", "Lifestyle Diseases"],
    procedures: ["Health Screenings", "Medical Consultations"],
    languages: ["English", "Kannada", "Hindi"],
    whoShouldVisit: "Adults seeking expert diagnosis and medical management.",
    availability: "By Appointment",
    image: "/placeholder-dr.jpg",
  },
{
    id: "dr-shivakumar-v",
    name: "Dr. Shivakumar Varakanahalli",
    category: "Gastroenterology",
    specialty: "Consultant Medical Gastroenterologist",
    icon: <Droplets className="text-emerald-600" />,
    experience: "16+ Years",
    education: "MBBS, MD (Internal Medicine), DM (Gastroenterology)",
    philosophy: "Advanced endoscopic intervention for precise digestive care.",
    impact: "Highly recommended for complex liver, pancreas, and GI disease management.",
    full: "Dr. Shivakumar Varakanahalli is a premier specialist in Bengaluru with over 16 years of clinical excellence. He is an expert in therapeutic endoscopies and advanced biliary interventions.",
    expertise: ["Therapeutic Endoscopy", "ERCP & EUS", "Hepatology", "IBD Management"],
    conditions: ["Liver Cirrhosis", "Pancreatitis", "Inflammatory Bowel Disease", "GI Bleeding"],
    procedures: ["ERCP", "Endoscopic Ultrasound (EUS)", "Therapeutic Gastroscopy", "Colonoscopy"],
    languages: ["English", "Kannada", "Hindi"],
    whoShouldVisit: "Patients requiring advanced endoscopic procedures or specialist care for liver and pancreatic disorders.",
    availability: "By Appointment",
    image: "/Shivakumar_V.jpg",
  },
  {
    id: "dr-narasimhaiah",
    name: "Dr. Narasimhaiah",
    category: "General Surgery",
    specialty: "Senior Consultant Surgeon",
    icon: <Scissors className="text-orange-600" />,
    experience: "Senior Specialist",
    education: "MBBS, MS (General Surgery)",
    philosophy: "Surgical excellence with a focus on patient safety and recovery.",
    impact: "Extensive experience in complex general and laparoscopic surgeries.",
    full: "A veteran surgeon providing a wide range of surgical interventions for abdominal and soft tissue conditions.",
    expertise: ["General Surgery", "Laparoscopy"],
    conditions: ["Hernia", "Appendicitis", "Gallstones"],
    procedures: ["Surgical Consultations", "Minor Procedures"],
    languages: ["English", "Kannada"],
    whoShouldVisit: "Patients requiring surgical evaluation or intervention.",
    availability: "By Appointment",
    image: "/placeholder-dr.jpg",
  },
  {
    id: "dr-mahesh-meda",
    name: "Dr. Mahesh Meda",
    category: "Paediatrics",
    specialty: "Consultant Paediatrician",
    icon: <Baby className="text-pink-500" />,
    experience: "TBD",
    education: "MBBS, MD (Paediatrics)",
    philosophy: "Compassionate healthcare for the next generation.",
    impact: "Expertise in childhood growth, nutrition, and wellness.",
    full: "Dr. Mahesh Meda provides dedicated paediatric care, focusing on the healthy development of infants and children.",
    expertise: ["Neonatology", "Paediatric Nutrition"],
    conditions: ["Childhood Infections", "Growth Concerns"],
    procedures: ["Vaccinations", "Developmental Assessment"],
    languages: ["English", "Kannada", "Hindi"],
    whoShouldVisit: "Parents seeking specialized medical care for their children.",
    availability: "By Appointment",
    image: "/placeholder-dr.jpg",
  },
  {
    id: "dr-vikram-naidu",
    name: "Dr. Vikram Naidu",
    category: "Orthopaedics",
    specialty: "Joint Replacement Specialist",
    icon: <Bone className="text-amber-700" />,
    experience: "TBD",
    education: "MBBS, MS, Fellowship (Arthroplasty)",
    philosophy: "Precision-led joint restoration.",
    impact: "Specializing in advanced arthroplasty and joint replacement techniques.",
    full: "Dr. Vikram Naidu focuses on helping patients regain pain-free movement through specialized joint care.",
    expertise: ["Hip/Knee Replacement", "Arthroplasty"],
    conditions: ["Severe Arthritis", "Joint Degeneration"],
    procedures: ["Joint Replacement Surgery", "Arthroplasty Evaluation"],
    languages: ["English", "Kannada", "Telugu"],
    whoShouldVisit: "Patients considering joint replacement for better mobility.",
    availability: "By Appointment",
    image: "/placeholder-dr.jpg",
  },
  {
    id: "dr-varsha-sai",
    name: "Dr. Varsha Sai",
    category: "Dermatology",
    specialty: "Dermatologist & Cosmetologist",
    icon: <Activity className="text-rose-500" />,
    experience: "TBD",
    education: "MBBS, MD (DVL)",
    philosophy: "Evidence-based skin health and aesthetic care.",
    impact: "Providing comprehensive solutions for clinical and cosmetic skin issues.",
    full: "Dr. Varsha Sai specializes in dermatology, venereology, and leprosy, with a focus on modern aesthetic treatments.",
    expertise: ["Clinical Dermatology", "Cosmetology"],
    conditions: ["Acne", "Skin Allergies", "Psoriasis", "Hair Loss"],
    procedures: ["Skin Biopsy", "Chemical Peels", "Laser Treatments"],
    languages: ["English", "Kannada", "Hindi"],
    whoShouldVisit: "Patients with skin, hair, or nail-related conditions.",
    availability: "By Appointment",
    image: "/placeholder-dr.jpg",
  },
  {
    id: "dr-suma-raju",
    name: "Dr. Suma Raju",
    category: "Obstetrics & Gynaecology",
    specialty: "Consultant Gynecologist",
    icon: <Users className="text-pink-600" />,
    experience: "TBD",
    education: "MBBS, DGO / MS (OBG)",
    philosophy: "Compassionate and holistic women's healthcare.",
    impact: "Dedicated to maternal wellness and gynaecological health.",
    full: "Dr. Suma Raju provides a range of services from prenatal care to the management of gynaecological disorders.",
    expertise: ["Maternal Health", "Adolescent Gynaecology"],
    conditions: ["PCOS", "Pregnancy Care", "Menstrual Irregularities"],
    procedures: ["Prenatal Screenings", "Gynaecological Checkups"],
    languages: ["English", "Kannada"],
    whoShouldVisit: "Women seeking comprehensive obstetric or gynaecological care.",
    availability: "By Appointment",
    image: "/placeholder-dr.jpg",
  },
 {
    id: "dr-prakruthi-kn",
    name: "Dr. Prakruthi K N",
    category: "Dermatology",
    specialty: "Senior Consultant Dermatologist & Cosmetologist",
    icon: <Activity className="text-rose-500" />,
    experience: "Highly Experienced",
    education: "MBBS, MD (Dermatology, Venereology & Leprosy)",
    philosophy: "Merging clinical excellence with aesthetic precision.",
    impact: "Expert in advanced laser technologies and non-surgical facial rejuvenation.",
    full: "Dr. Prakruthi K N is a Senior Consultant known for treating complex skin, hair, and aesthetic concerns. She specializes in advanced dermatological treatments including anti-aging and scar management.",
    expertise: ["Lasers & Chemical Peels", "Botox & Fillers", "Trichology (PRP/GFC)", "Scar Management"],
    conditions: ["Chronic Hair Loss", "Acne Scars", "Aging Skin", "Skin Disorders"],
    procedures: ["Laser Skin Resurfacing", "Injectable Aesthetics", "Hair Restoration", "Advanced Peels"],
    languages: ["English", "Kannada", "Hindi"],
    whoShouldVisit: "Patients seeking clinical skin care or advanced aesthetic and hair loss treatments.",
    availability: "By Appointment",
    image: "/Prakruthi_KN.jpg",
  },
  {
    id: "dr-devipriya",
    name: "Dr. Devipriya S",
    category: "Pulmonology",
    specialty: "Consultant Pulmonologist & Critical Care",
    icon: <Wind className="text-cyan-600" />,
    experience: "Specialist",
    education: "MBBS, DTCD, DNB (Pulmonary & Critical Care Medicine)",
    philosophy: "Restoring breath through expert respiratory and critical care.",
    impact: "Expert in managing chronic lung diseases and acute critical cases.",
    full: "Currently associated with Narayana Multispeciality Hospital, Dr. Devipriya is a leading specialist in respiratory medicine.",
    expertise: ["Critical Care", "Asthma", "COPD", "Lung Infections"],
    conditions: ["Chronic Cough", "Breathlessness", "Tuberculosis", "Sleep Apnea"],
    procedures: ["Bronchoscopy", "PFT Interpretation", "Critical Care Support"],
    languages: ["English", "Kannada", "Hindi"],
    whoShouldVisit: "Patients with chronic respiratory issues or needing critical care expertise.",
    availability: "By Appointment",
    image: "/Devipriya.jpg",
  }
];

/* ================= MAIN COMPONENT ================= */

export default function DoctorsSection() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", ...Array.from(new Set(doctors.map(d => d.category)))];

  const filteredDoctors = activeTab === "All" 
    ? doctors 
    : doctors.filter(doc => doc.category === activeTab);

  return (
    <section id="doctors" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-200 mb-4"
          >
            <ShieldCheck size={14} className="text-teal-700" />
            <span className="text-teal-800 text-[10px] font-black uppercase tracking-widest">
              Clinique Health Tree Medical Board
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Our <span className="text-teal-600">Specialists</span>
          </h2>
          
          {/* CATEGORY TABS */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wider transition-all border ${
                  activeTab === cat 
                  ? "bg-teal-600 text-white border-teal-600 shadow-lg shadow-teal-200" 
                  : "bg-white text-slate-500 border-slate-200 hover:border-teal-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* DOCTORS GRID */}
        <motion.div 
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredDoctors.map((doc) => (
              <motion.article
                layout
                key={doc.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2rem] shadow-sm hover:shadow-2xl border border-slate-200 flex flex-col overflow-hidden transition-all duration-500 group"
              >
                {/* IMAGE */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Specialist'; }}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-xl border border-slate-100 shadow-sm">
                     <span className="text-[10px] font-black text-slate-600 uppercase tracking-tighter">{doc.experience}</span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 bg-teal-50 rounded-lg shrink-0">{doc.icon}</div>
                    <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest">{doc.category}</span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-1">{doc.name}</h3>
                  <p className="text-slate-500 font-bold text-xs mb-4 leading-tight min-h-[2.5rem]">
                    {doc.specialty}
                  </p>

                  <button
                    onClick={() => setSelectedDoctor(doc)}
                    className="mt-auto w-full py-4 bg-slate-900 text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 hover:bg-teal-600 transition-all shadow-md group-hover:shadow-teal-200"
                  >
                    View Clinical Profile
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedDoctor && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/70 backdrop-blur-md p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="bg-white max-w-5xl w-full rounded-[3rem] flex flex-col md:flex-row overflow-hidden max-h-[90vh] shadow-2xl"
            >
              {/* MODAL SIDEBAR */}
              <div className="md:w-80 bg-slate-50 p-8 border-r flex flex-col">
                <div className="aspect-square rounded-3xl overflow-hidden mb-8 shadow-xl border-4 border-white">
                  <img src={selectedDoctor.image} className="w-full h-full object-cover object-top" alt={selectedDoctor.name} />
                </div>
                <div className="space-y-6 flex-grow">
                  <div className="flex gap-4 items-center">
                    <Award className="text-teal-600 shrink-0" size={20} />
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Clinical Experience</p>
                      <p className="font-bold text-slate-800 text-sm leading-none">{selectedDoctor.experience}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <GraduationCap className="text-teal-600 shrink-0" size={20} />
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Board Certification</p>
                      <p className="font-bold text-[12px] leading-tight text-slate-800">{selectedDoctor.education}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <div className="flex items-center gap-3">
                    <Clock className="text-teal-600" size={18} />
                    <span className="text-[12px] font-bold text-slate-600">{selectedDoctor.availability}</span>
                  </div>
                </div>
              </div>

              {/* MODAL BODY */}
              <div className="flex-1 flex flex-col min-w-0">
                <div className="p-8 border-b flex justify-between items-center bg-white sticky top-0 z-10">
                  <div>
                    <h2 className="text-3xl font-black text-slate-900 mb-1 leading-none">{selectedDoctor.name}</h2>
                    <p className="text-teal-600 font-bold text-base leading-none">{selectedDoctor.specialty}</p>
                  </div>
                  <button onClick={() => setSelectedDoctor(null)} className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-all">
                    <X size={24} className="text-slate-500" />
                  </button>
                </div>

                <div className="p-10 overflow-y-auto space-y-10 bg-white custom-scrollbar">
                  <section>
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">Professional Biography</h4>
                    <p className="text-base text-slate-700 leading-relaxed font-medium">{selectedDoctor.full}</p>
                  </section>

                  <section className="bg-teal-50/50 p-6 rounded-3xl border border-teal-100">
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-teal-700 mb-4 flex items-center gap-2">
                      <CheckCircle2 size={16} /> Clinical Mastery & Patient Fit
                    </h4>
                    <p className="text-teal-900 text-sm font-bold leading-relaxed">{selectedDoctor.whoShouldVisit}</p>
                  </section>

                  <div className="grid sm:grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-5 flex items-center gap-2">
                        <Activity size={14} /> Clinical Interests
                      </h4>
                      <ul className="space-y-3">
                        {selectedDoctor.conditions.map((c, i) => (
                          <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-500" /> {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-5 flex items-center gap-2">
                        <Briefcase size={14} /> Procedures & Services
                      </h4>
                      <ul className="space-y-3">
                        {selectedDoctor.procedures.map((p, i) => (
                          <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400" /> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8">
                    <a href="tel:+918041663537" className="w-full bg-teal-600 text-white py-5 rounded-[1.5rem] font-black flex items-center justify-center gap-4 hover:bg-teal-700 transition-all shadow-xl shadow-teal-100 hover:scale-[1.02] active:scale-95">
                      <Phone size={20} /> Schedule Consultation
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