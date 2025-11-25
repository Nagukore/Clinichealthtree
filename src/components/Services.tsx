import { Activity, Baby, Brain, Heart, Pill, Stethoscope, Thermometer, Wind, User, FlaskConical, Syringe, HeartPulse } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care and cardiovascular disease treatment',
      color: 'bg-red-100',
      iconColor: 'text-red-600',
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized care for infants, children, and adolescents',
      color: 'bg-pink-100',
      iconColor: 'text-pink-600',
    },
    {
      icon: Brain,
      title: 'Mental Health',
      description: 'Professional mental health support and counseling',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      icon: Stethoscope,
      title: 'Internal Medicine',
      description: 'Diagnosis and treatment of adult diseases',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: User,
      title: 'Gynecology',
      description: 'Comprehensive womens health and reproductive care',
      color: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      icon: Wind,
      title: 'Pulmonology',
      description: 'Respiratory system and lung disease treatment',
      color: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
    },
    {
      icon: Pill,
      title: 'Pharmacy',
      description: 'On-site pharmacy with quality medications',
      color: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
    {
      icon: Activity,
      title: 'Physiotherapy',
      description: 'Physical rehabilitation and pain management',
      color: 'bg-teal-100',
      iconColor: 'text-teal-600',
    },
    {
      icon: Thermometer,
      title: 'ENT',
      description: 'Ear, nose, and throat specialist care',
      color: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
    },
    {
      icon: Syringe,
      title: 'Vaccinations',
      description: 'Flu shots and immunization services',
      color: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
    },
    {
      icon: FlaskConical,
      title: 'Lab Tests',
      description: 'Advanced diagnostic and laboratory testing',
      color: 'bg-lime-100',
      iconColor: 'text-lime-600',
    },
    {
      icon: HeartPulse,
      title: 'Health Checks',
      description: 'Comprehensive health screening packages',
      color: 'bg-rose-100',
      iconColor: 'text-rose-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-lg text-gray-600">
            We offer a wide range of medical services to meet all your healthcare needs under one roof
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:-translate-y-2"
              >
                <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={service.iconColor} size={32} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-teal-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Need Emergency Medical Care?
          </h3>
          <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
            Our emergency services are available 24/7. Contact us immediately for urgent medical assistance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+918041663537" className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition shadow-lg hover:shadow-xl">
              Call Emergency: +91 8041663537
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
