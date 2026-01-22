import React, { useState, useEffect } from "react";
import { Award, Clock, MapPin, Phone, X } from "lucide-react";

// Placeholder image in case local images fail to load
const placeholderImage = "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop";

const doctors = [
  {
    id: "dr-sujith-ms",
    name: "Dr. Sujith M S",
    specialty: "Consultant Physician",
    experience: "15+ years",
    education: "MBBS, DNB Internal Medicine, PG Diploma in Diabetes & Endocrinology (RCP UK)",
    short: "Experienced general physician with strong diagnostic skills and a focus on diabetes, thyroid and infectious diseases.",
    full: `Dr. Sujith M. S completed MBBS from Shimoga Institute of Medical Science and Research Centre and DNB in Internal Medicine from Narayana Hrudayalaya, Bengaluru. He is known for his patience and diagnostic skills. Special interests include Respiratory Diseases, Infectious diseases including COVID-19, Hypertension, Diabetes Mellitus, Thyroid disorders, Dyslipidemia and many other medical conditions. Member of the American College of Physicians.`,
    expertise: ["Respiratory Diseases & Allergies", "Infectious diseases", "Hypertension & Cardiovascular Health", "Diabetes & Thyroid disorders", "Dyslipidemia"],
    availability: "Mon-Sat: 9AM-8PM",
    image: "/Sujith.jpg"
  },
  {
    id: "dr-karthik-sm",
    name: "Dr. Karthik S M",
    specialty: "Internal Medicine",
    experience: "10+ years",
    education: "MBBS, MD (Internal Medicine), Diploma in Diabetes Management, Diploma in Allergy & Asthma",
    short: "Practices evidence-based, patient-centric medicine. Focused on infectious diseases, allergy, asthma and diabetes.",
    full: `Dr Karthik believes in practising evidence-based medicine which is patient-centric and personalized. He works with patients as a team to deliver effective treatment plans. Areas of interest include infectious diseases, allergy & asthma, diabetes, hypertension, cardiovascular diseases, smoking cessation and preventive medicine.`,
    expertise: ["Infectious Diseases", "Allergy & Asthma Management", "Diabetes and Hypertension", "Cardiovascular Diseases", "Preventive Medicine"],
    availability: "Mon-Sat: 9AM-6PM",
    image: "/Dr. Karthik S M.png"
  },
  {
    id: "dr-sagar",
    name: "Dr. Sagar",
    specialty: "Pulmonologist",
    experience: "11 years",
    education: "MBBS, DTCD, DNB in Respiratory Diseases",
    short: "Pulmonologist experienced in asthma, COPD, sleep-related breathing disorders and complex lung diseases.",
    full: `Dr. Sagar specializes in Upper respiratory tract infections, Allergic rhinitis, Sinusitis, Bronchial Asthma, COPD, Interstitial lung disease, Sleep related breathing disorders (including OSA), Lung cancer, Tuberculosis, Pulmonary Hypertension and Pulmonary thromboembolism.`,
    expertise: ["Asthma and COPD Management", "Sleep-Related Breathing Disorders (OSA)", "Interstitial Lung Disease", "Tuberculosis and Lung Cancer"],
    availability: "Mon-Fri: 10AM-6PM",
    image: "/Sagar.png"
  },
  {
    id: "dr-babu-reddy",
    name: "Dr. Babu Reddy",
    specialty: "Cardiologist",
    experience: "12 years",
    education: "MBBS, MD (General Medicine), DNB (Cardiology)",
    short: "Cardiologist with extensive experience in interventions and teaching. Skilled in complex cardiac care.",
    full: `Dr Babu Reddy is a Cardiologist with 12 years experience. He did MBBS from Bangalore Medical College, MD in General Medicine from Government Medical College – Bellary and DNB in Cardiology from Amrita Institute of Medical Sciences & Research.`,
    expertise: ["Interventional Cardiology", "Complex Cardiac Care", "General Medicine"],
    availability: "Tue- Sat: 10AM-5PM",
    image: "/Dr. Babu Reddy.png"
  },
  {
    id: "dr-rajendra-reddy",
    name: "Dr. Rajendra Reddy",
    specialty: "Orthopaedic Surgeon",
    experience: "26+ years",
    education: "MBBS, Fellowship in Paediatric Orthopaedics (France)",
    short: "Senior orthopaedic consultant specializing in trauma, deformity correction and paediatric orthopaedics.",
    full: `Dr. Rajendra Reddy is a Senior Orthopaedic Consultant with over 26 years of experience. He specializes in arthroplasty, spinal surgeries, deformity corrections, pediatric orthopaedics, complex trauma, Ilizarov procedures and limb lengthening.`,
    expertise: ["Arthroplasty and Spinal Surgeries", "Paediatric Orthopaedics", "Deformity Corrections (Ilizarov)", "Complex Trauma and Limb Lengthening"],
    availability: "Mon-Thu: 9AM-4PM",
    image: "/Dr. Rajendra Reddy.png"
  },
  {
    id: "dr-gundurao-hj",
    name: "Dr. Gundurao Harsh Joshi",
    specialty: "Cardiologist",
    experience: "8 years",
    education: "MBBS, MD (Medicine), DM Cardio",
    short: "Consultant cardiologist experienced in interventional and non-interventional cardiology and echo.",
    full: `Dr. Gundurao Harsh Joshi has 8 years experience and works as Consultant Cardiologist at Narayana Hrudayalaya HSR. Expertise includes interventional cardiology, coronary angioplasty, echocardiography and heart failure management.`,
    expertise: ["Interventional Cardiology", "Echocardiography", "Heart Failure Management", "Non-interventional Cardiology"],
    availability: "Mon-Fri: 9AM-5PM",
    image: "/Dr.Gundurao Harsh Joshi.png"
  },
  {
    id: "dr-ashwini-bs",
    name: "Dr. Ashwini B S",
    specialty: "Paediatrician",
    experience: "DNB (Pediatrics)",
    education: "MBBS (SIMS), DCH (BMCRI), DNB Pediatrics",
    short: "Paediatrician with strong background in neonatal & childhood health, growth and development.",
    full: `Dr. Ashwini B S has presented research at national and international conferences, and has strong expertise in neonatal care, growth & development, nutrition, immunisation, infections, allergy and asthma.`,
    expertise: ["Neonatal Care", "Growth & Development Monitoring", "Childhood Nutrition", "Infections, Allergy and Asthma"],
    availability: "Mon-Sat: 9AM-1PM",
    image: "/Ashwini.jpg"
  },
  {
    id: "dr-sujit-j",
    name: "Dr. Sujit J",
    specialty: "Radiologist",
    experience: "8 years",
    education: "MBBS, MDRD (Radiology)",
    short: "Consultant radiologist experienced in obstetric, fetal and pediatric sonography.",
    full: `Dr. Sujit provides services in general body ultrasonography, obstetric, musculoskeletal, pediatric and peripheral doppler scans. Special expertise in fetal sonography and fetal echocardiography.`,
    expertise: ["Obstetric & Fetal Sonography", "Pediatric Sonography", "General Body Ultrasonography", "Peripheral Doppler Scans"],
    availability: "Tue-Sat: 10AM-4PM",
    image: "/Dr. Sujith J.png"
  },
  {
    id: "dr-pramod-kumar",
    name: "Dr. Pramod Kumar D A",
    specialty: "Hepatologist / Liver Transplant Physician",
    experience: "Senior Consultant",
    education: "MD (Internal Medicine), DM (Hepatology) — PGIMER Chandigarh",
    short: "Expert hepatologist with extensive transplant experience and many high-impact publications.",
    full: `Dr. Pramod Kumar is trained in managing complex liver diseases, refractory ascites, liver cancer, alcohol-related liver disease and liver transplant patients. He has 50+ publications and multiple recognitions.`,
    expertise: ["Liver Transplant Management", "Complex Liver Diseases", "Refractory Ascites", "Liver Cancer"],
    availability: "By appointment",
    image: "/Dr. pramod.png"
  }
];

export default function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Close modal on ESC and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedDoctor(null);
    };

    if (selectedDoctor) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedDoctor]);

  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
            Our Doctors
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-6 mb-4">
            Meet Our Expert Healthcare Professionals
          </h2>
          <p className="text-lg text-gray-600">
            Dedicated to providing you with the highest standard of medical care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc) => (
            <article
              key={doc.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="relative h-80 overflow-hidden bg-gray-200">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-contain bg-gray-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{doc.name}</h3>
                  <p className="text-teal-300 font-medium">{doc.specialty}</p>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{doc.short}</p>
                  <div className="flex items-start gap-2 text-gray-700 text-xs mb-4">
                    <Award className="text-teal-600 shrink-0" size={16} />
                    <span className="line-clamp-2">{doc.education}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                    <Clock size={14} className="text-teal-600" />
                    <span>{doc.availability.split(':')[0]}...</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedDoctor(doc)}
                      className="bg-teal-600 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-teal-700 transition"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Appointment CTA */}
        <div className="mt-16 bg-teal-900 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Skip The Waiting Room!</h3>
          <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
            Register online before you arrive. Save time and get the care you need promptly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="bg-white text-teal-900 px-8 py-3 rounded-full font-bold hover:bg-teal-50 transition">
              Book Appointment
            </a>
            <button onClick={() => window.location.href = 'tel:+918041663537'} className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
              Call Us Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"
            onClick={() => setSelectedDoctor(null)}
          />
          
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center gap-4">
                <img 
                  src={selectedDoctor.image} 
                  alt={selectedDoctor.name}
                  className="w-16 h-16 rounded-xl object-contain bg-gray-100"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedDoctor.name}</h2>
                  <p className="text-teal-600 font-semibold">{selectedDoctor.specialty}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedDoctor(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto p-6 md:p-10">
              <div className="grid md:grid-cols-3 gap-10">
                <div className="md:col-span-2 space-y-8">
                  <section>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      About the Doctor
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {selectedDoctor.full}
                    </p>
                  </section>

                  {selectedDoctor.expertise && (
                    <section>
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Areas of Expertise</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedDoctor.expertise.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-700 bg-teal-50 p-3 rounded-lg border border-teal-100">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                            <span className="text-sm font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-5">
                    <div className="flex gap-3">
                      <Clock className="text-teal-600 shrink-0" size={20} />
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-bold">Availability</p>
                        <p className="text-sm font-semibold text-gray-800">{selectedDoctor.availability}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Award className="text-teal-600 shrink-0" size={20} />
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-bold">Experience</p>
                        <p className="text-sm font-semibold text-gray-800">{selectedDoctor.experience}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <MapPin className="text-teal-600 shrink-0" size={20} />
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-bold">Location</p>
                        <p className="text-sm font-semibold text-gray-800">HealthTree Clinic, Singasandra</p>
                      </div>
                    </div>
                    <div className="pt-4 space-y-3">
                      <a href="tel:+918041663537" className="flex items-center justify-center gap-2 w-full bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700 transition">
                        <Phone size={18} /> Call Now
                      </a>
                      <button onClick={() => setSelectedDoctor(null)} className="w-full border-2 border-teal-600 text-teal-600 py-3 rounded-xl font-bold hover:bg-teal-50 transition">
                        Book Online
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}