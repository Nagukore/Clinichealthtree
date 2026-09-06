import React, { useEffect, useState } from "react";
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
  Ear,
  Languages,
  Quote,
  BadgeCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Img from "./Img";

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

/* ================= HELPERS ================= */

/** "12+ Years Experience" -> "12+". Keeps the card badge short. */
function shortExperience(experience: string): string {
  return experience.match(/^\s*(\d+\+?)/)?.[1] ?? experience;
}

/** The source data has stray spacing and casing (" Telugu", "tamil"). */
function formatLanguages(languages: string[]): string[] {
  const seen = new Set<string>();
  return languages
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => l[0].toUpperCase() + l.slice(1).toLowerCase())
    .filter((l) => (seen.has(l) ? false : (seen.add(l), true)));
}

/* ================= ANIMATION VARIANTS ================= */

/* ================= DOCTOR DATA ================= */

const doctors: Doctor[] = [
  {
    id: "dr-sujith-ms",
    name: "Dr. Sujith M S",
    category: "General Medicine",
    specialty: "Consultant Physician & Diabetologist",
    icon: <Stethoscope className="text-teal-600" />,
    experience: "12+ Years Experience",
    education: "MBBS, DNB Internal Medicine, PG Diploma in Diabetes (RCP UK)",
    philosophy: "Precision diagnosis through evidence-based clinical protocols.",
    impact: "Expert in multi-system medical disorders and structured long-term care.",
    full: "Dr. Sujith is a senior consultant known for high diagnostic accuracy. He specializes in managing complex chronic diseases with a focus on long-term health optimization.",
    expertise: ["Diabetes & Thyroid", "Infectious Diseases", "Hypertension", "Respiratory"],
    conditions: ["Uncontrolled Diabetes", "Thyroid Disorders", "Infectious Diseases", "Hypertension"],
    procedures: ["Health Screenings", "Diabetes Optimization", "Infectious Disease Management"],
    languages: ["English", "Kannada", "Hindi"," Telugu", "tamil"],
    whoShouldVisit: "Adults with lifestyle diseases, recurrent infections, or chronic pain.",
    availability: "Mon–Sat: 9 AM – 8 PM",
    image: "/img/dr-sujith-ms",
  },
  {
    id: "dr-karthik-sm",
    name: "Dr. Karthik S M",
    category: "General Medicine",
    specialty: "Consultant Physician & Diabetologist",
    icon: <Activity className="text-teal-600" />,
    experience: "15+ Years Experience",
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
    image: "/img/dr-karthik-sm",
  },
  {
    id: "dr-sagar",
    name: "Dr. Sagar",
    category: "Pulmonology",
    specialty: "Consultant Pulmonologist",
    icon: <Wind className="text-blue-600" />,
    experience: "15+ Years Experience",
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
    image: "/img/dr-sagar",
  },
  {
    id: "dr-babu-reddy",
    name: "Dr. Babu Reddy",
    category: "Cardiology",
    specialty: "Consultant Cardiologist",
    icon: <Heart className="text-red-500" />,
    experience: "23+ Years Experience",
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
    image: "/img/dr-babu-reddy",
  },
  {
    id: "dr-rajendra-reddy",
    name: "Dr. Rajendra Reddy",
    category: "Orthopaedics",
    specialty: " Orthopaedic Surgeon",
    icon: <Bone className="text-amber-600" />,
    experience: "26+ Years Experience",
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
    image: "/img/dr-rajendra-reddy",
  },
  {
    id: "dr-gundurao-hj",
    name: "Dr. Gundurao Harsh Joshi",
    category: "Cardiology",
    specialty: "Consultant Cardiologist",
    icon: <Heart className="text-red-500" />,
    experience: "16+ Years Experience",
    education: "MBBS, MD (Medicine), DM (Cardiology)",
    philosophy: "Integrating advanced imaging for superior cardiac outcomes.",
    impact: "Expert in Rotablation and modern pacemaker technology.",
    full: "Specialist in primary coronary interventions and advanced valve treatments (TAVI).",
    expertise: [ "Angiography","Angioplasty", "Pacemakers", "Echocardiography"],
    conditions: ["Valvular Heart Disease", "Arrhythmia", "Blocked Arteries"],
    procedures: ["TAVI Guidance", "Pacemaker Implantation", "Rotablation"],
    languages: ["English", "Kannada", "Hindi"],
    whoShouldVisit: "Patients requiring pacemakers or advanced valve consultations.",
    availability: "Mon-Fri: 9 AM - 5 PM",
    image: "/img/dr-gundu-rao",
  },
  {
    id: "dr-ashwini-bs",
    name: "Dr. Ashwini B S",
    category: "Paediatrics",
    specialty: "Consultant Paediatrician",
    icon: <Baby className="text-pink-500" />,
    experience: "12+ Years Experience",
    education: "MBBS, DCH, DNB Pediatrics",
    philosophy: "Compassionate care for every stage of childhood growth.",
    impact: "Recognized expert in neonatal nutrition and growth evaluation.",
    full: "Dr. Ashwini provides comprehensive care for newborns and children, focusing on immunisation and allergy management.",
    expertise: ["Neonatal Care", "Immunisation", "Pediatric Allergy"],
    conditions: ["Growth Delays", "Childhood Infections", "Newborn Wellness"],
    procedures: ["Vaccination", "Growth Monitoring", "Nutrition Assessment"],
    languages: ["English", "Kannada", "Hindi", "Tamil", "Telugu"],
    whoShouldVisit: "Parents seeking wellness checks or medical care for infants and children.",
    availability: "Mon–Sat: 9 AM – 1 PM",
    image: "/img/ashwini",
  },
  {
    id: "dr-sujit-j",
    name: "Dr. Sujit J",
    category: "Radiology",
    specialty: "Consultant Radiologist",
    icon: <Scan className="text-indigo-600" />,
    experience: "17+ Years Experience",
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
    image: "/img/dr-sujith-j",
  },
  {
    id: "dr-pramod-kumar",
    name: "Dr. Pramod Kumar D A",
    category: "Gastroenterology",
    specialty: "Liver Specialist / Transplant Physician",
    icon: <Droplets className="text-emerald-600" />,
    experience: "15+ Years Experience",
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
    image: "/img/dr-pramod",
  },
  {
    id: "dr-sachin-subbaraya",
    name: "Dr. Sachin Subbaraya",
    category: "Surgery",
    specialty: "General & Laproscopic Surgeon",
    icon: <Scissors className="text-orange-600" />,
    experience: "10+ Years Experience",
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
    image: "/img/dr-sachin",
  },
  {
    id: "dr-nikhil-bondade",
    name: "Dr. Nikhil Bondade",
    category: "Gastroenterology",
    specialty: "Medical Gastroenterologist & Hepatologist",
    icon: <Activity className="text-emerald-600" />,
    experience: "15+ Years Experience",
    education: "MD (Internal Medicine), DM (Gastroenterology), Fellowship (BIDS)",
    philosophy: "Holistic digestive health through advanced endoscopy.",
    impact: "Expertised in therapeutic endoscopy and cirrhosis management.",
    full: "Dr. Nikhil holds advanced fellowships in therapeutic endoscopy and specializes in complex GI pathologies.",
    expertise: ["Therapeutic Endoscopy", "Hepatology", "Pancreatitis"],
    conditions: ["Cirrhosis", "Fatty Liver", "Pancreatitis", "Gastro Diseases"],
    procedures: ["Endoscopy", "Colonoscopy", "Fibroscan", "ERCP"],
    languages: ["English", "Kannada", "Hindi", "Marathi"],
    whoShouldVisit: "Patients seeking expert care for liver, gallbladder, or GI screening.",
    availability: "By Appointment",
    image: "/img/nikhil",
  },
  {
    id: "dr-janani",
    name: "Dr. Janani",
    category: "Obstetrics & Gynaecology",
    specialty: "Consultant Gynecologist",
    icon: <Users className="text-pink-600" />,
    experience: "15+ Years Experience",
    education: "MBBS, Post Graduate (Chennai), MRCOG (UK)",
    philosophy: "Modern maternal care through minimally invasive excellence.",
    impact: "Expert in high-risk pregnancy and advanced robotic surgery.",
    full: "Dr. Janani completed training at Chennai University and the Royal College, UK. She specializes in robotic and laparoscopic gynecological surgery.",
    expertise: ["High Risk Pregnancy", "Robotic Surgery", "Laparoscopy", "Maternal Care"],
    conditions: ["High Risk Pregnancy", "Fibroids", "Ovarian Cysts", "Infertility"],
    procedures: ["Robotic Hysterectomy", "Hysteroscopy", "Laparoscopic Surgery"],
    languages: ["Kannada", "English", "Tamil", "Hindi"],
    whoShouldVisit: "Expectant mothers or women requiring advanced gynecological surgery.",
    availability: "By Appointment",
    image: "/img/janani",
  },
  {
    id: "dr-anila-viswanath",
    name: "Dr. Anila Viswanath T",
    category: "ENT",
    specialty: "ENT / Otorhinolaryngologist",
    icon: <Ear className="text-amber-600" />,
    experience: "19+ Years Experience",
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
    image: "/img/dr-anila",
  },
  {
    id: "dr-lohith",
    name: "Dr. Lohith",
    category: "Urology",
    specialty: "Consultant Urologist & Transplant Surgeon",
    icon: <ShieldCheck className="text-blue-700" />,
    experience: "6+ Years Experience",
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
    image: "/img/dr-lohith",
  },
  {
    id: "dr-priyadarshini",
    name: "Dr. Priyadarshini",
    category: "Paediatrics",
    specialty: "Pediatrician",
    icon: <Stethoscope className="text-teal-600" />,
    experience: "15+ Years Experience",
    education: "MBBS, DCH, DNB, Fellowship in Pediatric Pulmonology",
    philosophy: "Comprehensive and empathetic patient care.",
    impact: "Focus on preventive health and chronic disease management.",
    full: "Dr. Priyadarshini is a dedicated physician focused on internal medicine and long-term wellness protocols.",
    expertise: ["Internal Medicine", "Preventive Care"],
    conditions: ["Hypertension", "General Ailments", "Lifestyle Diseases"],
    procedures: ["Health Screenings", "Medical Consultations"],
    languages: ["English", "Kannada", "Hindi"],
    whoShouldVisit: "Adults seeking expert diagnosis and medical management.",
    availability: "By Appointment",
    image: "/img/dr-priyadarshini",
  },
{
    id: "dr-shivakumar-v",
    name: "Dr. Shivakumar Varakanahalli",
    category: "Gastroenterology",
    specialty: "Consultant Medical Gastroenterologist",
    icon: <Droplets className="text-emerald-600" />,
    experience: "16+ Years Experience",
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
    image: "/img/dr-shivkumar",
  },
  {
    id: "dr-narasimhaiah",
    name: "Dr. Narasimhaiah",
    category: "Urology",
    specialty: "Consultant Urologist",
    icon: <Scissors className="text-orange-600" />,
    experience: "24 + Years Experience",
    education: "MBBS, MS (General Surgery), MCh (Urology)",
    philosophy: "Surgical excellence with a focus on patient safety and recovery.",
    impact: "Extensive experience in complex urological surgeries.",
    full: "A veteran urologist providing a wide range of surgical interventions for kidney, prostate, and bladder conditions.",
    expertise: ["Urological Surgery", "Laparoscopic Urology"],
    conditions: ["Prostate Disorders", "kidney Stones", "Bladder Issues"],
    procedures: ["Surgical Consultations", "Minor Procedures"],
    languages: ["English", "Kannada", "Hindi", "Telugu"],
    whoShouldVisit: "Patients requiring surgical evaluation or intervention.",
    availability: "By Appointment",
    image: "/img/no-photo",
  },
{
  id: "dr-mahesh-meda",
  name: "Dr. Mahesh Meda",
  category: "ENT",
  specialty: "Senior Consultant ENT & Head and Neck Surgeon",
  icon: <Baby className="text-pink-500" />,
  experience: "31+ Years Experience",
  education: "MBBS (Kurnool Medical College), DLO, DNB (Otorhinolaryngology)",
  philosophy: "Delivering advanced ENT and head & neck care with precision, safety, and patient-focused outcomes.",
  impact: "Highly experienced in complex ENT and head & neck surgeries with a strong record in cochlear implants and tumour management.",
  full: "Dr. Mahesh Meda is a Senior Consultant ENT and Head & Neck Surgeon in Bengaluru with over 31 years of experience. He specializes in advanced ENT procedures including skull base surgery, rhinoplasty, and cochlear implants, and practices across multiple leading hospitals in the city.",
  expertise: [
    "Skull Base Surgery",
    "Cochlear Implant Surgery",
    "Rhinoplasty",
    "Facial Nerve Surgery",
    "Sleep Apnea & Snoring Surgery",
    "Congenital Ear Disorders",
    "Head & Neck Tumour Management"
  ],
  conditions: [
    "Hearing Loss",
    "Sleep Apnea",
    "Congenital Ear Disorders",
    "Head and Neck Tumours",
    "Chronic ENT Infections"
  ],
  procedures: [
    "Cochlear Implant Surgery",
    "Skull Base Surgery",
    "Reconstructive Middle Ear Surgery",
    "Thyroid Surgery",
    "Rhinoplasty"
  ],
  languages: ["English", "Kannada", "Hindi"],
  whoShouldVisit: "Patients with complex ENT disorders, hearing loss, sleep apnea, or head and neck conditions requiring surgical care.",
  availability: "By Appointment",
  image: "/img/dr-mahesh-meda",
},
  {
    id: "dr-vikram-naidu",
    name: "Dr. Vikram Naidu",
    category: "General Practitioner",
    specialty: "General Physician",
    icon: <Bone className="text-amber-700" />,
    experience: "8+ Years Experience",
    education: "MBBS",
    philosophy: "Precise diagnosis and treatment for all medical conditions.",
    impact: "Specializing in infection management and treatment.",
    full: "Dr. Vikram Naidu focuses on helping patients with a wide range of medical conditions through accurate diagnosis and effective treatment.",
    expertise: ["fever management", "Diabetes Management, infection control, Hypertension, Thyroid Disorders"],
    conditions: ["Infections", "Diabetes", "Hypertension", "Thyroid Issues"],
    procedures: ["Injection Therapy", "Health Screenings", "Chronic Disease Management"],
    languages: ["English", "Kannada", "Telugu", "Hindi"],
    whoShouldVisit: "Patients seeking general medical care and chronic disease management.",
    availability: "By Appointment",
    image: "/img/no-photo",
  },
  {
    id: "dr-varsha-sai",
    name: "Dr. Varsha Sai",
    category: "General Practitioner",
    specialty: "General Physician",
    icon: <Activity className="text-rose-500" />,
    experience: "4+ Years Experience",
    education: "MBBS",
   philosophy: "Precise diagnosis and treatment for all medical conditions.",
    impact: "Specializing in infection management and treatment.",
    full: "Dr. Varsha Sai focuses on helping patients with a wide range of medical conditions through accurate diagnosis and effective treatment.",
    expertise: ["fever management", "Diabetes Management, infection control, Hypertension, Thyroid Disorders"],
    conditions: ["Infections", "Diabetes", "Hypertension", "Thyroid Issues"],
    procedures: ["Injection Therapy", "Health Screenings", "Chronic Disease Management"],
    languages: ["English", "Kannada", "Malayalam"],
    whoShouldVisit: "Patients seeking general medical care and chronic disease management.",
    availability: "By Appointment",
    image: "/img/no-photo",
  },
{
  id: "dr-suma-raju",
  name: "Dr. Suma Raju",
  category: "Nephrology & Internal Medicine",
  specialty: "Consultant Nephrologist & Internal Medicine Physician",
  icon: <Users className="text-pink-600" />,
  experience: "24+ Years Experience",
  education: "MBBS – Bangalore Medical College and Research Institute; American Board Certified in Internal Medicine and Nephrology",
  philosophy: "Accurate diagnosis combined with empathetic, patient-centered care for complex medical and kidney-related conditions.",
  impact: "Extensive experience in managing chronic and complex kidney diseases with a strong focus on long-term patient outcomes.",
  full: "Dr. Suma Raju is a highly experienced Nephrologist and Internal Medicine physician practicing in HSR Layout, Bangalore. She specializes in the diagnosis and management of kidney diseases, hypertension, and metabolic disorders, with significant expertise in dialysis and kidney transplant evaluation.",
  expertise: [
    "Chronic Kidney Disease (CKD)",
    "Kidney Stones",
    "Hypertension",
    "Diabetic Nephropathy",
    "Electrolyte Disorders",
    "Proteinuria & Hematuria",
    "Kidney Transplant Evaluation"
  ],
  conditions: [
    "Chronic Kidney Disease (CKD)",
    "Kidney Stones",
    "Urinary Tract Infections (UTIs)",
    "Hypertension",
    "Diabetes-related Kidney Disorders",
    "Electrolyte Imbalance"
  ],
  procedures: [
    "Hemodialysis",
    "Peritoneal Dialysis",
    "Kidney Biopsy",
    "Dialysis Management",
    "Kidney Transplant Evaluation"
  ],
  languages: ["English", "Hindi", "Telugu", "Kannada", "Tamil"],
  whoShouldVisit: "Patients with kidney-related disorders, hypertension, diabetes-related kidney complications, or those requiring dialysis or transplant evaluation.",
  availability: "By Appointment",
  image: "/img/dr-suma",
},

 {
    id: "dr-prakruthi-kn",
    name: "Dr. Prakruthi K N",
    category: "Dermatology",
    specialty: "Consultant Dermatologist & Cosmetologist",
    icon: <Activity className="text-rose-500" />,
    experience: "10+ Years Experience",
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
    image: "/img/dr-prakruthi",
  },
  {
    id: "dr-devipriya",
    name: "Dr. Devipriya S",
    category: "Pulmonology",
    specialty: "Consultant Pulmonologist",
    icon: <Wind className="text-cyan-600" />,
    experience: "10+ Years Experience",
    education: "MBBS, DNB in Pulmonary  Medicine",
    philosophy: "Restoring breath through expert respiratory and critical care.",
    impact: "Expert in managing chronic lung diseases and acute critical cases.",
    full: "Currently associated with reputed Multispeciality Hospital, Dr. Devipriya is a leading specialist in respiratory medicine.",
    expertise: ["Critical Care", "Asthma", "COPD", "Lung Infections"],
    conditions: ["Chronic Cough", "Breathlessness", "Tuberculosis", "Sleep Apnea"],
    procedures: ["Bronchoscopy", "PFT Interpretation", "Critical Care Support"],
    languages: ["English", "Kannada", "Hindi"],
    whoShouldVisit: "Patients with chronic respiratory issues or needing critical care expertise.",
    availability: "By Appointment",
    image: "/img/dr-devipriya",
  }
];

/* ================= CARD ================= */

function DoctorCard({ doc, onOpen }: { doc: Doctor; onOpen: () => void }) {
  const languages = formatLanguages(doc.languages);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      data-doctor-id={doc.id}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/40 hover:ring-teal-200"
    >
      {/* PORTRAIT
          A 4:5 crop keeps framing consistent across photos that arrive at
          anything from 0.64 to 1.26 aspect. The scrim lifts the name off the
          photo and evens out the mismatched studio backgrounds. */}
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
        <Img
          stem={doc.image}
          alt={doc.name}
          fallbackStem="/img/no-photo"
          sizes="(min-width: 1280px) 300px, (min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />

        <span className="absolute right-2 top-2 rounded-full bg-white/95 px-2 py-0.5 text-[9px] font-semibold tabular-nums text-slate-700 shadow-sm ring-1 ring-black/5 sm:right-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
          {shortExperience(doc.experience)} yrs
        </span>

        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
          <span className="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-white ring-1 ring-inset ring-white/25 backdrop-blur-sm sm:mb-2 sm:text-[9px] sm:tracking-[0.14em]">
            {doc.category}
          </span>
          <h3 className="text-[13.5px] font-semibold leading-tight text-white sm:text-[17px]">{doc.name}</h3>
          <p className="mt-0.5 text-[10.5px] font-medium leading-snug text-teal-200/90 sm:mt-1 sm:text-[12px]">{doc.specialty}</p>
        </div>
      </div>

      {/* DETAIL */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <p className="hidden line-clamp-2 text-[11.5px] leading-relaxed text-slate-500 sm:block" title={doc.education}>
          {doc.education}
        </p>

        <div className="mb-4 mt-3 hidden flex-wrap gap-1.5 sm:flex">
          {doc.expertise.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-medium text-teal-800 ring-1 ring-inset ring-teal-100"
            >
              {tag}
            </span>
          ))}
        </div>

        <dl className="mt-auto space-y-1.5 border-t border-slate-100 pt-2.5 text-[10.5px] leading-snug text-slate-500 sm:space-y-2 sm:pt-3 sm:text-[11px]">
          <div className="flex items-start gap-2">
            <dt className="sr-only">Availability</dt>
            <Clock size={13} className="mt-px shrink-0 text-slate-400" />
            <dd>{doc.availability}</dd>
          </div>
          <div className="hidden items-start gap-2 sm:flex">
            <dt className="sr-only">Languages</dt>
            <Languages size={13} className="mt-px shrink-0 text-slate-400" />
            <dd>{languages.join(" · ")}</dd>
          </div>
        </dl>

        <span className="mt-3 inline-flex items-center gap-1 text-[10.5px] font-semibold text-teal-700 sm:mt-4 sm:text-[11.5px]">
          View clinical profile
          <ChevronRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>

      {/* The whole tile is the target, so the tap area on mobile is the card. */}
      <button
        type="button"
        onClick={onOpen}
        className="absolute inset-0 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
      >
        <span className="sr-only">View clinical profile for {doc.name}</span>
      </button>
    </motion.article>
  );
}

/* ================= PROFILE DIALOG ================= */

function DoctorDialog({ doc, onClose }: { doc: Doctor; onClose: () => void }) {
  /* Close on Escape, and stop the page behind the dialog from scrolling. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  const languages = formatLanguages(doc.languages);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="doctor-dialog-name"
        initial={{ opacity: 0, scale: 0.97, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 24 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-y-auto rounded-3xl bg-white shadow-2xl md:flex-row md:overflow-hidden"
      >
        {/* SIDEBAR */}
        <aside className="flex flex-col gap-6 border-b border-slate-100 bg-slate-50 p-6 md:w-72 md:shrink-0 md:overflow-y-auto md:border-b-0 md:border-r">
          <div className="aspect-square overflow-hidden rounded-2xl shadow-md ring-4 ring-white">
            <Img
              stem={doc.image}
              alt={doc.name}
              fallbackStem="/img/no-photo"
              loading="eager"
              sizes="(min-width: 768px) 256px, 80vw"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <dl className="space-y-5">
            <div className="flex gap-3">
              <Award className="mt-0.5 shrink-0 text-teal-600" size={17} />
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Experience</dt>
                <dd className="mt-1 text-[13px] font-semibold text-slate-800">{doc.experience}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <GraduationCap className="mt-0.5 shrink-0 text-teal-600" size={17} />
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Qualifications</dt>
                <dd className="mt-1 text-[12px] font-medium leading-relaxed text-slate-700">{doc.education}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Languages className="mt-0.5 shrink-0 text-teal-600" size={17} />
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Speaks</dt>
                <dd className="mt-1 text-[12px] font-medium text-slate-700">{languages.join(", ")}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-0.5 shrink-0 text-teal-600" size={17} />
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Consulting hours</dt>
                <dd className="mt-1 text-[12px] font-medium text-slate-700">{doc.availability}</dd>
              </div>
            </div>
          </dl>

          <a
            href="tel:+918041663537"
            className="mt-auto hidden items-center justify-center gap-2 rounded-xl bg-teal-600 py-3 text-[12px] font-semibold text-white shadow-sm transition hover:bg-teal-700 md:flex"
          >
            <Phone size={15} /> Book consultation
          </a>
        </aside>

        {/* BODY */}
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-100 bg-white/95 px-6 py-5 backdrop-blur md:px-8">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal-700 ring-1 ring-inset ring-teal-100">
                <BadgeCheck size={12} /> {doc.category}
              </span>
              <h2 id="doctor-dialog-name" className="mt-2 text-2xl font-bold leading-tight text-slate-900">
                {doc.name}
              </h2>
              <p className="mt-0.5 text-[14px] font-medium text-teal-700">{doc.specialty}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close profile"
              className="shrink-0 rounded-full bg-slate-100 p-2.5 text-slate-500 transition hover:bg-slate-200 hover:text-slate-700"
            >
              <X size={20} />
            </button>
          </header>

          <div className="flex-1 space-y-8 overflow-y-auto px-6 py-7 md:px-8">
            {/* Philosophy: written for every doctor, but never shown until now. */}
            <figure className="relative rounded-2xl bg-slate-50 p-5 pl-12 ring-1 ring-slate-100">
              <Quote size={18} className="absolute left-5 top-5 text-teal-500" />
              <blockquote className="text-[14px] font-medium italic leading-relaxed text-slate-700">
                {doc.philosophy}
              </blockquote>
            </figure>

            <section>
              <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">About</h3>
              <p className="text-[14px] leading-relaxed text-slate-700">{doc.full}</p>
              <p className="mt-3 text-[13px] leading-relaxed text-slate-500">{doc.impact}</p>
            </section>

            <section>
              <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Areas of expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {doc.expertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-teal-50 px-3 py-1.5 text-[12px] font-medium text-teal-800 ring-1 ring-inset ring-teal-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-teal-100 bg-teal-50/60 p-5">
              <h3 className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-teal-700">
                <CheckCircle2 size={14} /> Who should book
              </h3>
              <p className="text-[13px] font-medium leading-relaxed text-teal-900">{doc.whoShouldVisit}</p>
            </section>

            <div className="grid gap-8 sm:grid-cols-2">
              <section>
                <h3 className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  <Activity size={13} /> Conditions treated
                </h3>
                <ul className="space-y-2.5">
                  {doc.conditions.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-[12.5px] text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                      {c}
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h3 className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  <Briefcase size={13} /> Procedures &amp; services
                </h3>
                <ul className="space-y-2.5">
                  {doc.procedures.map((pr) => (
                    <li key={pr} className="flex items-start gap-2.5 text-[12.5px] text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                      {pr}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <a
              href="tel:+918041663537"
              className="flex items-center justify-center gap-2.5 rounded-xl bg-teal-600 py-4 text-[13px] font-semibold text-white shadow-sm transition hover:bg-teal-700 md:hidden"
            >
              <Phone size={16} /> Book consultation
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function DoctorsSection() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", ...Array.from(new Set(doctors.map((d) => d.category)))];
  const countFor = (cat: string) =>
    cat === "All" ? doctors.length : doctors.filter((d) => d.category === cat).length;

  const filteredDoctors =
    activeTab === "All" ? doctors : doctors.filter((doc) => doc.category === activeTab);

  return (
    <section id="doctors" className="relative overflow-hidden bg-slate-50 py-20">
      {/* Soft wash so the section reads as its own chapter of the page. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-white to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* HEADER */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-100/70 px-3 py-1">
            <ShieldCheck size={13} className="text-teal-700" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-teal-800">
              Clinique HealthTree Medical Board
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Our <span className="text-teal-600">Specialists</span>
          </h2>

          <p className="mx-auto mt-4 text-[15px] leading-relaxed text-slate-500">
            {doctors.length} consultants across {categories.length - 1} departments, available
            seven days a week under one roof in Singasandra.
          </p>
        </div>

        {/* FILTER */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const active = activeTab === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                aria-pressed={active}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[11.5px] font-medium transition ${
                  active
                    ? "bg-teal-600 text-white shadow-sm shadow-teal-200"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-teal-700 hover:ring-teal-300"
                }`}
              >
                {cat}
                <span
                  className={`text-[10px] tabular-nums ${active ? "text-teal-100" : "text-slate-400"}`}
                >
                  {countFor(cat)}
                </span>
              </button>
            );
          })}
        </div>

        {/* GRID */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredDoctors.map((doc) => (
              <DoctorCard key={doc.id} doc={doc} onOpen={() => setSelectedDoctor(doc)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* PROFILE DIALOG */}
      <AnimatePresence>
        {selectedDoctor && (
          <DoctorDialog doc={selectedDoctor} onClose={() => setSelectedDoctor(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
