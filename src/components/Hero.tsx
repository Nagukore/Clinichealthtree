import { Calendar, MapPin, Users } from 'lucide-react';

function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-teal-50 via-white to-blue-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Health is Our
              <span className="text-teal-600"> Priority</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Our devotion is shown in the comprehensive care we provide. Experience world-class medical services with compassionate healthcare professionals.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200">
                Book Appointment
              </button>
              <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition border-2 border-teal-600">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-teal-400 to-blue-500 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Healthcare professionals"
                className="w-full h-full object-cover mix-blend-overlay opacity-90"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Users className="text-teal-600" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">5000+</p>
                  <p className="text-sm text-gray-600">Happy Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition group cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 p-3 rounded-xl group-hover:bg-teal-600 transition">
                <Calendar className="text-teal-600 group-hover:text-white transition" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Quick Scheduling</h3>
                <p className="text-gray-600 text-sm">Book appointments online in seconds</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition group cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-600 transition">
                <MapPin className="text-blue-600 group-hover:text-white transition" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Convenient Location</h3>
                <p className="text-gray-600 text-sm">Easily accessible from anywhere</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition group cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-xl group-hover:bg-green-600 transition">
                <Users className="text-green-600 group-hover:text-white transition" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Expert Doctors</h3>
                <p className="text-gray-600 text-sm">Highly qualified healthcare professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
