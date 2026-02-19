import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoComprec from 'figma:asset/ecdae11385996d2773bf622e31dbb0a957ef414f.png';
import logoComprecTexto from 'figma:asset/0da24833eec9795262c879e0ac0539582ae65f6a.png';

interface HeaderProps {
  paginaAtual: string;
}

export function Header({ paginaAtual }: HeaderProps) {
  const [menuMobilAberto, setMenuMobilAberto] = React.useState(false);
  const [headerRolado, setHeaderRolado] = React.useState(false);

  // Alterado para 'Parceiro'
  const linksNavegacao = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#sobre', label: 'Quem Somos', id: 'sobre' },
    { href: '#contato', label: 'Contato', id: 'contato' },
    { href: '#blog', label: 'Blog', id: 'blog' },
    { href: '#parceiro', label: 'Parceiro', id: 'parceiro' },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHeaderRolado(true);
      } else {
        setHeaderRolado(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (menuMobilAberto) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [menuMobilAberto]);

  React.useEffect(() => {
    setMenuMobilAberto(false);
  }, [paginaAtual]);

  // LÓGICA DE CORES: Verifica se a página atual é a do parceiro
  const isParceiro = paginaAtual === 'parceiro';
  
  const headerBgClass = isParceiro
    ? (headerRolado ? 'bg-emerald-950 shadow-md' : 'bg-emerald-900/90 backdrop-blur-sm border-b border-emerald-800')
    : (headerRolado ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm');

  const linkBaseColor = isParceiro ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-emerald-800';
  const linkActiveColor = isParceiro ? 'text-white font-semibold' : 'text-emerald-800 font-semibold';

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${headerBgClass}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0 ml-2 md:ml-0">
            <a href="#home" className="flex items-center gap-3">
              <img src={logoComprec} alt="Comprec" className={`h-8 w-auto ${isParceiro ? 'brightness-200' : ''}`} />
              <img src={logoComprecTexto} alt="Comprec" className={`h-6 w-auto hidden md:block ${isParceiro ? 'brightness-200' : ''}`} />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {linksNavegacao.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`transition-colors ${paginaAtual === link.id ? linkActiveColor : linkBaseColor}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="https://wa.me/5521989822163?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20precatórios"
              target="_blank"
              rel="noopener noreferrer"
              className={isParceiro 
                ? "bg-white text-emerald-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                : "bg-emerald-800 text-white px-6 py-2 rounded-lg hover:bg-emerald-900 transition-colors"
              }
            >
              Fale Conosco
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuMobilAberto(!menuMobilAberto)}
              className={`transition-colors p-2 relative z-50 ${isParceiro ? 'text-white' : 'text-gray-700 hover:text-emerald-800'}`}
              aria-label="Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuMobilAberto ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuMobilAberto && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }} onClick={() => setMenuMobilAberto(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            <motion.div
              initial={{ y: '-100%' }} animate={{ y: 0 }} exit={{ y: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed top-16 left-0 right-0 shadow-2xl z-40 md:hidden ${isParceiro ? 'bg-emerald-900' : 'bg-white'}`}
            >
              <div className="px-4 py-6 max-w-7xl mx-auto">
                <div className="space-y-1">
                  {linksNavegacao.map((link, index) => {
                    const mobileBase = isParceiro ? 'text-emerald-50 hover:bg-emerald-800' : 'text-gray-700 hover:text-emerald-800 hover:bg-gray-50';
                    const mobileActive = isParceiro ? 'text-white font-semibold bg-emerald-800' : 'text-emerald-800 font-semibold bg-emerald-50';
                    
                    return (
                      <motion.a
                        key={link.id} href={link.href} onClick={() => setMenuMobilAberto(false)}
                        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08, duration: 0.3 }}
                        className={`block py-3 px-4 rounded-lg transition-colors ${paginaAtual === link.id ? mobileActive : mobileBase}`}
                      >
                        {link.label}
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}