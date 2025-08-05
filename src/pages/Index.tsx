import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Projects from '@/components/Projects';
import About from '@/components/About';
import News from '@/components/News';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <Hero />
      <Services />
      <Team />
      <Projects />
      <About />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}