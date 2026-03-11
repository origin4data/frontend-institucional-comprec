import React from 'react';
import { Phone, Mail, Linkedin, Instagram, Youtube, Clock, Shield } from 'lucide-react';
import logoComprec from '../assets/logo.png';

export function Footer() {
  return (
    <footer className=" text-white bg-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src={logoComprec} 
                alt="Comprec - Gestão de Ativos Judiciais" 
                className="h-10 w-auto mb-4"
              />
              <p className="text-white text-sm leading-relaxed mb-4">
                Especialistas em antecipação e consultoria de precatórios. 
                Transformamos seu direito em oportunidade com segurança e transparência.
              </p>
              <div className="text-white text-xs space-y-1">
                <p className="font-semibold">CNPJ: 39.780.145/0001-98</p>
                <p>Av. Presidente Vargas, 435 - Rio de Janeiro/RJ</p>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold mb-3 text-sm">Siga-nos:</p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/comprecativos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-800 hover:bg-[#48BAB8] p-2.5 rounded-lg transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/comprec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-800 hover:bg-[#48BAB8] p-2.5 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@Comprecativos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-800 hover:bg-[#48BAB8] p-2.5 rounded-lg transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Links Úteis</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white hover:text-[#48BAB8] transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-white rounded-full group-hover:w-2 transition-all"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#parceiro" className="text-white hover:text-[#48BAB8] transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-white rounded-full group-hover:w-2 transition-all"></span>
                  Parceiros
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-white hover:text-[#48BAB8] transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-white rounded-full group-hover:w-2 transition-all"></span>
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white hover:text-[#48BAB8] transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-white rounded-full group-hover:w-2 transition-all"></span>
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Suporte</h3>
            <ul className="space-y-4">
              <li>
                <p className="text-white font-medium text-xs mb-1">Central de Atendimento</p>
                <a href="https://wa.me/5521989822163" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#48BAB8] transition-colors text-sm flex items-center gap-2">
                  <Phone className="w-4 h-4 text-white" />
                  (21) 98982-2163
                </a>
              </li>
              <li>
                <p className="text-white font-medium text-xs mb-1">E-mail</p>
                <a href="mailto:comprecativos@gmail.com" className="text-white hover:text-[#48BAB8] transition-colors text-sm flex items-center gap-2">
                  <Mail className="w-4 h-4 text-white" />
                  comprecativos@gmail.com
                </a>
              </li>
              <li>
                <p className="text-white font-medium text-xs mb-1">Horário de Atendimento</p>
                <div className="text-white text-sm flex items-center gap-2">
                  <Clock className="w-4 h-4 text-white" />
                  Seg à Sex, 9h às 18h
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Institucional</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="#privacidade" className="text-white hover:text-[#48BAB8] transition-colors text-sm flex items-center gap-2 group">
                  <Shield className="w-4 h-4 text-white" />
                  Política de Privacidade
                </a>
              </li>
              {/* LGPD agora é um texto sem link, enfatizando conformidade */}
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Shield className="w-4 h-4" />
                <span>Site em conformidade com a LGPD</span>
              </li>
            </ul>
            <div>
              <p className="text-white font-medium text-xs mb-3">Site Seguro</p>
              <div className="flex gap-2">
                <div className="bg-emerald-900/50 border border-emerald-700 rounded px-3 py-2">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-white" />
                    <span className="text-[10px] font-semibold text-white">SSL</span>
                  </div>
                </div>
                <div className="bg-emerald-900/50 border border-emerald-700 rounded px-3 py-2">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-white" />
                    <span className="text-[10px] font-semibold text-white">Seguro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-xs text-center md:text-left">
              © {new Date().getFullYear()} Comprec - Gestão de Ativos Judiciais. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-xs text-white">
              <a href="#acessibilidade" className="hover:text-[#48BAB8] transition-colors">
                Acessibilidade
              </a>
              <span>•</span>
              <a href="#mapa-site" className="hover:text-[#48BAB8] transition-colors">
                Mapa do Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}