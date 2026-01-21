import Navbar from './components/Navbar';
// import LandingCarousel from './components/LandingCarousel';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Full-Width Landing Carousel - FIRST
      <LandingCarousel /> */}
      
      {/* Navbar - Sticky */}
      <Navbar />
      
      {/* Rest of the sections */}
      <Hero />
      <About />
      <Services />
      <Doctors />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;