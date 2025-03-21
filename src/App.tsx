import { useEffect } from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './i18n';

function App() {
  useEffect(() => {
    // Add any initialization logic here
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        <section id="home" className="min-h-screen">
          <Services />
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
