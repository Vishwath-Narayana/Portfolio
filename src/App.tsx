import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-10 min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Certifications />
      <Skills />
      <Languages />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
