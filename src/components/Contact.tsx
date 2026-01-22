import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Get In Touch With Us
          </h2>
          <p className="text-lg text-gray-600">
            Have questions or need to schedule an appointment? We're here to help you
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Phone className="text-teal-600" size={28} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">Call us for appointments and inquiries</p>
              <a href="tel:+918073718255" className="text-teal-600 font-semibold text-lg hover:text-teal-700">
                +91 8073718255
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Mail className="text-blue-600" size={28} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-2">Send us your queries anytime</p>
              <a href="mailto:healthtreeclinic@gmail.com" className="text-teal-600 font-semibold hover:text-teal-700">
                healthtreeclinic@gmail.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="text-green-600" size={28} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">
                1358, AECS Layout, A-Block, 60 Feet Road, Singasandra, Bangalore-68
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Clock className="text-orange-600" size={28} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Working Hours</h3>
              <div className="text-gray-600 space-y-1">
                <p>Monday - Saturday: 7:00 AM - 10:00 PM</p>
                <p>Sunday: 7:00 AM - 1:00 PM</p>
                {/* <p className="text-teal-600 font-semibold mt-2">Emergency: 24/7</p> */}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 1234567890"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Subject</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition">
                      <option>Appointment Booking</option>
                      <option>General Inquiry</option>
                      <option>Emergency</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-4 rounded-xl font-semibold hover:bg-teal-700 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3045238993867!2d77.6510!3d12.8931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUzJzM1LjIiTiA3N8KwMzknMDMuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
