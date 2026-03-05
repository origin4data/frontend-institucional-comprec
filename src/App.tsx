import React from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { Parceiro } from './pages/Partner';
import { PrivacyPolicy } from './pages/PrivacyPolicy'; 
import { Footer } from './components/Footer';

export default function App() {
  const [paginaAtual, setPaginaAtual] = React.useState('home');

  React.useEffect(() => {
    // Gerenciar navegação por hash
    const gerenciarMudancaHash = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setPaginaAtual(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    gerenciarMudancaHash();
    window.addEventListener('hashchange', gerenciarMudancaHash);
    return () => window.removeEventListener('hashchange', gerenciarMudancaHash);
  }, []);

  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'sobre':
        return <About />;
      case 'contato':
        return <Contact />;
      case 'blog':
        return <Blog />;
      case 'parceiro':
        return <Parceiro />;
      case 'privacidade':          // <-- NOVO CASE ADICIONADO
        return <PrivacyPolicy />;  // <-- RENDERIZA A PÁGINA AQUI
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header paginaAtual={paginaAtual} />
      <main className="flex-1">
        {renderizarPagina()}
      </main>
      <Footer />
    </div>
  );
}