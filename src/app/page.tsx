'use client';
import Header from '@/components/Header/Header';
import Cadre from '@/components/Cadre/Cadre';
import Plateforme from '@/components/Plateforme/Plateforme';
import Solutions from '@/components/Solutions/Solutions';
import PourLesProfessionnels from '@/components/PourLesProfessionnels/PourLesProfessionnels';
import PourquoiBayesienPro from '@/components/PourquoiBayesienPro/PourquoiBayesienPro';
import APropos from '@/components/APropos/APropos';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('Plate-Forme');

  const handleVoirSolutions = () => {
    setActiveSection('Solutions');
    window.scrollTo(0, 0);
  };

  const handleMenuClick = (titre: string) => {
    setActiveSection(titre);
    window.scrollTo(0, 0);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'Plate-Forme':
        return (
          <>
            <Plateforme titre={activeSection} />
            <div className="flex flex-col items-center justify-center p-8 text-white text-justify">
              <h2 className="text-2xl sm:text-4xl font-bold mb-4">Bienvenue sur Bayésien-Pro</h2>
            </div>
          </>
        );
      case 'Solutions':
        return <Solutions />;
      case 'Pour les Professionnels':
        return <PourLesProfessionnels />;
      case 'Pourquoi choisir Bayésien-Pro':
        return <PourquoiBayesienPro onVoirSolutions={handleVoirSolutions} />;
      case 'À propos':
        return <APropos />;
      case 'Contact':
        return <Contact />;
      default:
        return <Plateforme titre="Plate-Forme" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a]">
      <Header onMenuClick={handleMenuClick} />
      <Cadre titre={activeSection} />

      <main className="flex-1 pb-4">
        {renderSection()}
      </main>

      <div className="border-t-2 border-white/20 mt-8">
        <Footer />
      </div>
    </div>
  );
}