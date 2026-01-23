import { Award, Heart, Shield, Users } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
                About Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Your Family’s Trusted Healthcare Partner
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              At Clinique Health Tree, we believe healthcare should be accessible, compassionate,
              and personalized. Our expert medical team provides high-quality treatment backed by
              modern technology, ensuring every patient receives care tailored to their unique needs.
            </p>

            <p className="text-gray-600">
              From preventive checkups to long-term specialty care, we are committed to delivering
              safe, reliable, and patient-centered healthcare in an environment that feels warm,
              supportive, and reassuring.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="bg-teal-100 p-2 rounded-lg">
                    <Award className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">10+</p>
                    <p className="text-sm text-gray-600">Years of Excellence</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">20+</p>
                    <p className="text-sm text-gray-600">Qualified Specialists</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Hospital facility"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <div className="bg-gradient-to-br from-teal-500 to-blue-600 p-6 rounded-2xl text-white">
                <Heart className="mb-3" size={32} />
                <h4 className="font-bold text-lg mb-2">Compassionate Care</h4>
                <p className="text-sm text-teal-50">
                  We treat every patient with empathy and respect.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="bg-gradient-to-br from-blue-500 to-teal-600 p-6 rounded-2xl text-white">
                <Shield className="mb-3" size={32} />
                <h4 className="font-bold text-lg mb-2">Trusted Quality</h4>
                <p className="text-sm text-blue-50">
                  Modern facilities ensuring safe and reliable treatments.
                </p>
              </div>

              <img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Medical team"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
