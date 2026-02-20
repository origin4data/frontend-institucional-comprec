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

  const linksNavegacao = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#sobre', label: 'Quem Somos', id: 'sobre' },
    { href: '#contato', label: 'Contato', id: 'contato' },
    { href: '#blog', label: 'Blog', id: 'blog' },
    { href: '#parceiro', label: 'Parceiro', id: 'parceiro' },
  ];

  // Detectar scroll para mudar transparência
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

  // Prevenir scroll quando o menu está aberto
  React.useEffect(() => {
    if (menuMobilAberto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuMobilAberto]);

  // Fechar menu ao mudar de página
  React.useEffect(() => {
    setMenuMobilAberto(false);
  }, [paginaAtual]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        headerRolado ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Esquerda */}
          <div className="flex-shrink-0 ml-2 md:ml-0">
            <a href="#home" className="flex items-center gap-3">
              <img src={logoComprec} alt="Comprec" className="h-8 w-auto" />
              <img src={logoComprecTexto} alt="Comprec" className="h-6 w-auto hidden md:block" />
            </a>
          </div>

          {/* Navegação Desktop - Centro */}
          <div className="hidden md:flex items-center space-x-8">
            {linksNavegacao.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`transition-colors ${
                  paginaAtual === link.id
                    ? 'text-emerald-800 font-semibold'
                    : 'text-gray-700 hover:text-emerald-800'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Botão CTA Desktop - Direita */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/5521989822163?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20precatórios"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-800 text-white px-6 py-2 rounded-lg hover:bg-emerald-900 transition-colors"
            >
              Fale Conosco
            </a>
          </div>

          {/* Botão menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuMobilAberto(!menuMobilAberto)}
              className="text-gray-700 hover:text-emerald-800 transition-colors p-2 relative z-50"
              aria-label="Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuMobilAberto ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay do Menu Mobile */}
      <AnimatePresence>
        {menuMobilAberto && (
          <>
            {/* Backdrop escuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuMobilAberto(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />

            {/* Menu deslizante de cima para baixo */}
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-16 left-0 right-0 bg-white shadow-2xl z-40 md:hidden"
            >
              <div className="px-4 py-6 max-w-7xl mx-auto">
                <div className="space-y-1">
                  {linksNavegacao.map((link, index) => (
                    <motion.a
                      key={link.id}
                      href={link.href}
                      onClick={() => setMenuMobilAberto(false)}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.3 }}
                      className={`block py-3 px-4 rounded-lg transition-colors ${
                        paginaAtual === link.id
                          ? 'text-emerald-800 font-semibold bg-emerald-50'
                          : 'text-gray-700 hover:text-emerald-800 hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>

                <motion.a
                  href="#contato"
                  onClick={() => setMenuMobilAberto(false)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="mt-4 block bg-emerald-800 text-white px-6 py-3 rounded-lg hover:bg-emerald-900 transition-colors text-center font-medium"
                >
                  Fale Conosco
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}