import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import PrivacyPolicy from './components/PrivacyPolicy';
 import FAQ from './components/FAQ';
import Reviews from './components/Reviews';
import './i18n';

const MainContent = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <main className="pt-24">
              <section id="home" className="min-h-screen">
                <Services />
                <Pricing />
                <Reviews />
                <Contact />
                <FAQ />  
              </section>
            </main>
          } 
        />
        <Route 
          path="/privacy" 
          element={<PrivacyPolicy />} 
        />
      </Routes>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    // Add any initialization logic here
  }, []);

  return (
    <Router>
      <MainContent />
    </Router>
  );
};

export default App;
