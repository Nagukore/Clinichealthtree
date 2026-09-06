import { Award, Heart, Shield, Users } from "lucide-react";

function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Soft background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/40 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-7">
            <span className="inline-flex items-center px-5 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-bold tracking-wide">
              About Clinique HealthTree
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Your Family’s Trusted <br />
              <span className="text-teal-600">Healthcare Partner</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              At <span className="font-semibold text-gray-800">Clinique HealthTree</span>,
              we believe healthcare should be accessible, compassionate, and
              personalized. Our experienced medical team delivers quality-driven
              care supported by modern diagnostics and ethical practices.
            </p>

            <p className="text-gray-600 leading-relaxed">
              From preventive health checkups to advanced specialty care, we are
              committed to ensuring every patient feels heard, respected, and
              confidently guided throughout their healthcare journey.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-teal-100 p-3 rounded-xl">
                  <Award className="text-teal-600" size={26} />
                </div>
                <div>
                  <p className="text-3xl font-black text-gray-900">10+</p>
                  <p className="text-sm text-gray-600 font-medium">
                    Years of Excellence
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Users className="text-blue-600" size={26} />
                </div>
                <div>
                  <p className="text-3xl font-black text-gray-900">23+</p>
                  <p className="text-sm text-gray-600 font-medium">
                    Qualified Specialists
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL GRID */}
          <div className="grid grid-cols-2 gap-5">
            {/* Column 1 */}
            <div className="space-y-5">
              <img
                src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Consultation room at Clinique HealthTree"
                width={600}
                height={400}
                loading="lazy"
                decoding="async"
                className="rounded-3xl shadow-lg w-full h-64 object-cover transition duration-300 hover:scale-[1.02]"
              />

              <div className="bg-gradient-to-br from-teal-600 to-blue-600 p-7 rounded-3xl text-white shadow-xl transition duration-300 hover:-translate-y-1">
                <Heart size={34} className="mb-4" />
                <h4 className="font-extrabold text-lg mb-2">
                  Compassionate Care
                </h4>
                <p className="text-sm text-teal-50 leading-relaxed">
                  We treat every patient with empathy, dignity, and respect —
                  because healing starts with trust.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-5 pt-10">
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 p-7 rounded-3xl text-white shadow-xl transition duration-300 hover:-translate-y-1">
                <Shield size={34} className="mb-4" />
                <h4 className="font-extrabold text-lg mb-2">
                  Trusted Quality
                </h4>
                <p className="text-sm text-blue-50 leading-relaxed">
                  Advanced facilities, strict protocols, and a commitment to
                  patient safety at every step.
                </p>
              </div>

              <img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Diagnostic equipment at Clinique HealthTree"
                width={600}
                height={400}
                loading="lazy"
                decoding="async"
                className="rounded-3xl shadow-lg w-full h-64 object-cover transition duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
