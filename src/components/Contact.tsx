import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Get In Touch With Us
          </h2>
          <p className="text-lg text-gray-600">
            Have questions or need to schedule an appointment? We’re here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone */}
            <motion.div
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Phone className="text-teal-600" size={28} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">
                Call us for appointments and inquiries
              </p>
              <a
                href="tel:+918073718255"
                className="text-teal-600 font-semibold text-lg hover:text-teal-700"
              >
                +91 8073718255
              </a>
            </motion.div>

            {/* Email */}
            <motion.div
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Mail className="text-blue-600" size={28} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-2">
                Send us your queries anytime
              </p>
              <a
                href="mailto:healthtreeclinique@gmail.com"
                className="text-teal-600 font-semibold hover:text-teal-700"
              >
                healthtreeclinique@gmail.com
              </a>
            </motion.div>

            {/* Location (Clickable) */}
            <motion.a
              href="https://www.google.com/maps?q=1358,+AECS+Layout,+Singasandra,+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="block bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="text-green-600" size={28} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">
                Location
              </h3>
              <p className="text-gray-600">
                1358, AECS Layout, A-Block, 60 Feet Road, Singasandra,
                Bangalore-68
              </p>
              <p className="text-teal-600 font-semibold mt-2">
                Get Directions →
              </p>
            </motion.a>

            {/* Working Hours */}
            <motion.div
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Clock className="text-orange-600" size={28} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">
                Working Hours
              </h3>
              <div className="text-gray-600 space-y-1">
                <p>Monday – Saturday: 7:00 AM – 10:00 PM</p>
                <p>Sunday: 7:00 AM – 1:00 PM</p>
              </div>
            </motion.div>
          </div>

          {/* Right Form + Map */}
          <div className="lg:col-span-2">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300
                                 focus:border-teal-500 focus:ring-2
                                 focus:ring-teal-200 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300
                                 focus:border-teal-500 focus:ring-2
                                 focus:ring-teal-200 outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 1234567890"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300
                                 focus:border-teal-500 focus:ring-2
                                 focus:ring-teal-200 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-gray-300
                                 focus:border-teal-500 focus:ring-2
                                 focus:ring-teal-200 outline-none transition"
                    >
                      <option>Appointment Booking</option>
                      <option>General Inquiry</option>
                      <option>Emergency</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300
                               focus:border-teal-500 focus:ring-2
                               focus:ring-teal-200 outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-4 rounded-xl
                             font-semibold transition-all duration-300
                             shadow-lg hover:shadow-2xl hover:bg-teal-700
                             flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send
                    size={20}
                    className="group-hover:translate-x-2 transition-transform duration-300"
                  />
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 rounded-2xl overflow-hidden shadow-lg h-80"
            >
              <iframe
                src="https://www.google.com/maps?q=1358,+AECS+Layout,+Singasandra,+Bangalore&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
