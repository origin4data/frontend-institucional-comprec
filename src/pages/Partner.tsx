import React, { useState } from 'react';
// IMPORTANTE: Ajuste os caminhos abaixo conforme a sua estrutura de pastas real
import { HeroSection } from '../components/partner/HeroSection';
import { TrustBar } from '../components/partner/TrustBar';
import { AccordionGallery } from '../components/partner/AccordionGallery';
import { FormularioSection } from '../components/partner/FormularioSection';

export function Parceiro() {
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: '', whatsapp: '', email: '', oab: '', tipoPrecatorio: '', valorPrecatorio: '', mensagem: '',
  });

  // ================= O SEGREDO ESTÁ AQUI =================
  // Estado para guardar o perfil que o usuário escolheu no Carrossel
  const [perfilSelecionado, setPerfilSelecionado] = useState<any>(null);

  const enviarFormulario = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Indicação enviada com sucesso! A nossa equipa entrará em contacto.');
    setDadosFormulario({
      nome: '', whatsapp: '', email: '', oab: '', tipoPrecatorio: '', valorPrecatorio: '', mensagem: '',
    });
  };

  const alterarCampo = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setDadosFormulario({ ...dadosFormulario, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full overflow-hidden bg-white font-sans text-gray-800">
      <HeroSection />
      <TrustBar />
      
      {/* Passamos a função para o Carrossel conseguir atualizar o estado aqui na página */}
      <AccordionGallery onSelecionarPerfil={(perfil: any) => setPerfilSelecionado(perfil)} />
      
      {/* Passamos o perfil escolhido para o Formulário se adaptar dinamicamente */}
      <FormularioSection 
        dadosFormulario={dadosFormulario} 
        alterarCampo={alterarCampo} 
        enviarFormulario={enviarFormulario}
        perfilAtivo={perfilSelecionado} 
      />
    </div>
  );
}