import { useState, useEffect } from "react";
import { Award, Clock, MapPin, Phone, X } from "lucide-react";

/**
 * Doctors component with "Read more" -> modal for full details.
 * - Fixes: Modal Z-Index (to show above navbar) and image alignment in modal header.
 * - Improvement: Added 'expertise' array for better structure in the modal's Areas of Expertise section.
 */

const placeholderImage = "/mnt/data/dd1bf797-4d5e-4c5a-95a9-997c835a8d79.png";

const doctors = [
  {
    id: "dr-sujith-ms",
    name: "Dr. Sujith M S",
    specialty: "Consultant Physician",
    experience: "15+ years",
    education:
      "MBBS, DNB Internal Medicine, PG Diploma in Diabetes & Endocrinology (RCP UK)",
    short:
      "Experienced general physician with strong diagnostic skills and a focus on diabetes, thyroid and infectious diseases.",
    full: `Dr. Sujith M. S completed MBBS from Shimoga Institute of Medical Science and Research Centre and DNB in Internal Medicine from Narayana Hrudayalaya, Bengaluru. He is known for his patience and diagnostic skills. Special interests include Respiratory Diseases, Infectious diseases including COVID-19, Hypertension, Diabetes Mellitus, Thyroid disorders, Dyslipidemia and many other medical conditions. Member of the American College of Physicians.`,
    expertise: [
        "Respiratory Diseases & Allergies",
        "Infectious diseases (incl. COVID-19)",
        "Hypertension & Cardiovascular Health",
        "Diabetes Mellitus & Thyroid disorders",
        "Dyslipidemia"
    ],
    availability: "Mon-Sat: 9AM-8PM",
    image: "/public/Sujith.png"
  },

  {
    id: "dr-karthik-sm",
    name: "Dr. Karthik S M",
    specialty: "Internal Medicine",
    experience: "10+ years",
    education:
      "MBBS, MD (Internal Medicine), Diploma in Diabetes Management, Diploma in Allergy & Asthma",
    short:
      "Practices evidence-based, patient-centric medicine. Focused on infectious diseases, allergy, asthma and diabetes.",
    full: `Dr Karthik believes in practising evidence-based medicine which is patient-centric and personalized. He works with patients as a team to deliver effective treatment plans. Areas of interest include infectious diseases, allergy & asthma, diabetes, hypertension, cardiovascular diseases, smoking cessation and preventive medicine. Dr Karthik completed MBBS from Dr B.R. Ambedkar Medical College and post-graduation in Internal Medicine from HAL hospital. He also holds diplomas in Diabetes Management and Allergy & Asthma from CMC Vellore and a postgraduate diploma in Clinical Endocrinology and Diabetes.`,
    expertise: [
        "Infectious Diseases",
        "Allergy & Asthma Management",
        "Diabetes and Hypertension",
        "Cardiovascular Diseases",
        "Preventive Medicine"
    ],
    availability: "Mon-Sat: 9AM-6PM",
    image: "/public/Dr. Karthik S M.png"
  },

  {
    id: "dr-sagar",
    name: "Dr. Sagar",
    specialty: "Pulmonologist",
    experience: "11 years",
    education:
      "MBBS, Diploma in Tuberculosis and Chest Diseases (DTCD), DNB in Respiratory Diseases",
    short:
      "Pulmonologist experienced in asthma, COPD, sleep-related breathing disorders and complex lung diseases.",
    full: `Dr. Sagar is a Pulmonologist with 11 years of experience. He specializes in Upper respiratory tract infections, Allergic rhinitis, Sinusitis, Bronchial Asthma, COPD, Interstitial lung disease, Sleep related breathing disorders (including OSA), Lung cancer, Tuberculosis, Pulmonary Hypertension and Pulmonary thromboembolism. Previously consultant at Narayana Hrudayalaya and Mazumdar Shaw Medical Center.`,
    expertise: [
        "Asthma and COPD Management",
        "Sleep-Related Breathing Disorders (OSA)",
        "Interstitial Lung Disease",
        "Tuberculosis and Lung Cancer"
    ],
    availability: "Mon-Fri: 10AM-6PM",
    image: "/public/Sagar.png"
  },

  {
    id: "dr-babu-reddy",
    name: "Dr. Babu Reddy",
    specialty: "Cardiologist",
    experience: "12 years",
    education: "MBBS, MD (General Medicine), DNB (Cardiology)",
    short:
      "Cardiologist with extensive experience in interventions and teaching. Skilled in complex cardiac care.",
    full: `Dr Babu Reddy is a Cardiologist with 12 years experience. He did MBBS from Bangalore Medical College, MD in General Medicine from Government Medical College – Bellary and DNB in Cardiology from Amrita Institute of Medical Sciences & Research. He has been part of various academic presentations and has experience across multiple institutions.`,
    expertise: [
        "Interventional Cardiology",
        "Complex Cardiac Care",
        "General Medicine"
    ],
    availability: "Tue- Sat: 10AM-5PM",
    image: "/public/Dr. Babu Reddy.png"
  },

  {
    id: "dr-rajendra-reddy",
    name: "Dr. Rajendra Reddy",
    specialty: "Orthopaedic Surgeon",
    experience: "26+ years",
    education:
      "MBBS, Fellowship in Paediatric Orthopaedics & Deformity Corrections (Institut Calot, France)",
    short:
      "Senior orthopaedic consultant specializing in trauma, deformity correction and paediatric orthopaedics.",
    full: `Dr. Rajendra Reddy is a Senior Orthopaedic Consultant with over 26 years of experience. He specializes in arthroplasty, spinal surgeries, deformity corrections, pediatric orthopaedics, complex trauma, Ilizarov procedures and limb lengthening. He is active in research and mentorship and has handled numerous complex surgeries.`,
    expertise: [
        "Arthroplasty and Spinal Surgeries",
        "Paediatric Orthopaedics",
        "Deformity Corrections (Ilizarov)",
        "Complex Trauma and Limb Lengthening"
    ],
    availability: "Mon-Thu: 9AM-4PM",
    image: "/public/Dr. Rajendra Reddy.png"
  },

  {
    id: "dr-gundurao-hj",
    name: "Dr. Gundurao Harsh Joshi",
    specialty: "Cardiologist",
    experience: "8 years",
    education:
      "MBBS, MD (Medicine), DM Cardio (Sri Jayadeva Institute of Cardiovascular Sciences)",
    short:
      "Consultant cardiologist experienced in interventional and non-interventional cardiology and echo.",
    full: `Dr. Gundurao Harsh Joshi completed MBBS from JNMC Belgaum, MD from Shri M P Shah Medical College and DM Cardio from Sri Jayadeva Institute. He has 8 years experience and works as Consultant Cardiologist at Narayana Hrudayalaya HSR. Expertise includes interventional cardiology, coronary angioplasty, echocardiography and heart failure management.`,
    expertise: [
        "Interventional Cardiology (Coronary Angioplasty)",
        "Echocardiography",
        "Heart Failure Management",
        "Non-interventional Cardiology"
    ],
    availability: "Mon-Fri: 9AM-5PM",
    image: "/public/Dr.Gundurao Harsh Joshi.png",
  },

  {
    id: "dr-ashwini-bs",
    name: "Dr. Ashwini B S",
    specialty: "Paediatrician",
    experience: "DNB (Pediatrics)",
    education:
      "MBBS (SIMS), DCH (BMCRI) — State topper in RGUHS, DNB Pediatrics (Narayana Hrudayalaya)",
    short:
      "Paediatrician with strong background in neonatal & childhood health, growth and development.",
    full: `Dr. Ashwini B S is a Paediatrician who completed MBBS from Shimoga Institute of Medical Sciences, DCH from BMCRI (state topper) and DNB in Pediatrics from Narayana Hrudayalaya. She has presented research at national and international conferences, and has strong expertise in neonatal care, growth & development, nutrition, immunisation, infections, allergy and asthma.`,
    expertise: [
        "Neonatal Care",
        "Growth & Development Monitoring",
        "Childhood Nutrition and Immunisation",
        "Infections, Allergy and Asthma"
    ],
    availability: "Mon-Sat: 9AM-1PM",
    image: "/public/Ashwini.png",
  },

  {
    id: "dr-sujit-j",
    name: "Dr. Sujit J",
    specialty: "Radiologist",
    experience: "8 years",
    education: "MBBS, MDRD (Radiology)",
    short:
      "Consultant radiologist experienced in obstetric, fetal and pediatric sonography and doppler studies.",
    full: `Dr. Sujit is a consultant radiologist. He completed MBBS from V.M.K.V Medical College, Salem, and MDRD from M.V.J Medical College, Hoskote, Bangalore. He has 8 years of experience and provides services in general body ultrasonography, obstetric, musculoskeletal, pediatric and peripheral doppler scans. Special expertise in fetal sonography, fetal echocardiography and doppler studies. Member of the Medical Ultrasound Society of Karnataka.`,
    expertise: [
        "Obstetric & Fetal Sonography (incl. Echocardiography)",
        "Pediatric Sonography",
        "General Body Ultrasonography",
        "Peripheral Doppler Scans"
    ],
    availability: "Tue-Sat: 10AM-4PM",
    image: "/public/Dr. Sujith J.png",
  },

  {
    id: "dr-pramod-kumar",
    name: "Dr. Pramod Kumar D A",
    specialty: "Hepatologist / Liver Transplant Physician",
    experience: "Senior consultant, transplant hepatology",
    education:
      "MD (Internal Medicine), DM (Hepatology) — PGIMER Chandigarh",
    short:
      "Expert hepatologist with extensive transplant experience and many high-impact publications.",
    full: `Dr. Pramod Kumar is a Consultant Hepatologist and liver transplant physician. He completed MD (Internal Medicine) and DM (Hepatology) from PGIMER Chandigarh. He is trained in managing complex liver diseases, refractory ascites, liver cancer, alcohol-related liver disease and liver transplant patients. He has 50+ publications and multiple recognitions. Professional memberships include INASL, ICA, LTSI, ILTS, AASLD, EASL and more.`,
    expertise: [
        "Liver Transplant Management",
        "Management of Complex Liver Diseases",
        "Refractory Ascites",
        "Liver Cancer and Alcohol-Related Liver Disease"
    ],
    availability: "By appointment",
    image: "/public/Dr. pramod.png",
  },
];

export default function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // close modal on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelectedDoctor(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
            Our Doctors
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Meet Our Expert Healthcare Professionals
          </h2>
          <p className="text-lg text-gray-600">
            Our team of highly qualified and experienced doctors are dedicated to providing you with the best medical care.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc) => (
            <article
              key={doc.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={doc.image || placeholderImage}
                  alt={doc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transform transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-0">{doc.name}</h3>
                  <p className="text-teal-300 font-semibold">{doc.specialty}</p>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <p className="text-gray-700 text-sm leading-relaxed">{doc.short}</p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="inline-flex items-center gap-2 text-gray-600 text-sm">
                    <Award className="text-teal-600" size={16} />
                    {doc.education}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-4 gap-3">
                  <div className="text-gray-600 text-sm flex items-center gap-3">
                    <Clock className="text-teal-600" size={16} />
                    <span>{doc.availability}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedDoctor(doc)}
                      className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition"
                    >
                      Read more
                    </button>
                    <a
                      href={`tel:+918041663537`}
                      className="inline-flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <Phone size={14} /> Call
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA block */}
        <div className="mt-12 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-6 md:p-10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Skip The Waiting Room! Register Online Before You Arrive.</h3>
            <p className="text-gray-600 mb-6">
              We have up-to-date schedules, contact information, & let you book appointments online. Save time and get the care you need.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#contact"
                className="bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition"
              >
                Book an Appointment
              </a>
              <button
                onClick={() => alert("Request a Call Back - integrate your form or action")}
                className="px-6 py-3 border border-teal-600 text-teal-600 rounded-full font-semibold hover:bg-teal-50 transition"
              >
                Request a Call Back
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for detailed doctor info */}
      {selectedDoctor && (
        <div
          // FIX 1: Set a very high Z-index to ensure it appears above the fixed navbar (if the navbar is using a lower z-index like z-40 or z-50)
          className="fixed inset-0 z-[9999] flex items-center justify-center" 
          aria-modal="true"
          role="dialog"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedDoctor(null)}
            aria-hidden="true"
          />

          {/* modal panel */}
          <div className="relative z-[10000] max-w-3xl w-full mx-4 md:mx-0 bg-white rounded-2xl shadow-2xl overflow-auto max-h-[90vh]">
            <div className="flex items-start justify-between p-4 md:p-6 border-b border-gray-100">
              {/* FIX 2: Changed items-center to items-start for better alignment of image and text */}
              <div className="flex items-start gap-4"> 
                <img
                  src={selectedDoctor.image || placeholderImage}
                  alt={selectedDoctor.name}
                  className="h-20 w-20 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">{selectedDoctor.name}</h3>
                  <p className="text-sm text-teal-600 font-semibold">{selectedDoctor.specialty}</p>
                  <p className="text-xs text-gray-500 mt-1">{selectedDoctor.experience}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedDoctor(null)}
                className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">About</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedDoctor.full}</p>

                  <h4 className="text-lg font-semibold text-gray-900 mt-4">Education & Qualifications</h4>
                  <p className="text-gray-700">{selectedDoctor.education}</p>

                  {/* Improved Expertise List (Renders 'expertise' array if present) */}
                  {selectedDoctor.expertise && selectedDoctor.expertise.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold text-gray-900">Areas of Expertise</h4>
                      <ul className="list-disc list-inside text-gray-700 mt-2 ml-4 space-y-1">
                        {selectedDoctor.expertise.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Fallback/Legacy list if expertise array is not used for all doctors */}
                  {!selectedDoctor.expertise && (
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold text-gray-900">Areas of Expertise</h4>
                      <ul className="list-disc list-inside text-gray-700 mt-2">
                        <li>{selectedDoctor.specialty}</li>
                        <li>{selectedDoctor.experience}</li>
                      </ul>
                    </div>
                  )}

                </div>

                <aside className="space-y-4 p-4 rounded-xl bg-slate-50 border border-gray-100">
                  <div className="flex items-start gap-3">
                    <Clock className="text-teal-600" size={18} />
                    <div>
                      <p className="text-xs text-gray-500">Availability</p>
                      <p className="text-sm text-gray-800">{selectedDoctor.availability}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="text-teal-600" size={18} />
                    <div>
                      <p className="text-xs text-gray-500">Education</p>
                      <p className="text-sm text-gray-800">{selectedDoctor.education}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="text-teal-600" size={18} />
                    <div>
                      <p className="text-xs text-gray-500">Clinic</p>
                      <p className="text-sm text-gray-800">Clinique HealthTree — Singasandra, Bangalore</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="tel:+918041663537"
                      className="w-full inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-700 transition"
                    >
                      <Phone size={16} /> Call +91 8041663537
                    </a>

                    <a
                      href="#contact"
                      onClick={() => setSelectedDoctor(null)}
                      className="w-full inline-flex items-center justify-center gap-2 mt-3 border border-teal-600 text-teal-600 px-4 py-2 rounded-lg font-semibold hover:bg-teal-50 transition"
                    >
                      Book an Appointment
                    </a>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}