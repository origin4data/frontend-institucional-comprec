import React from 'react';
import { Send } from 'lucide-react';
import { motion } from 'motion/react';

export function Form() {
  const [dadosFormulario, setDadosFormulario] = React.useState({
    nome: '',
    whatsapp: '',
    email: '',
    tipo: '',
  });

  const enviarFormulario = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', dadosFormulario);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    // Reset do estado limpo
    setDadosFormulario({
      nome: '',
      whatsapp: '',
      email: '',
      tipo: '',
    });
  };

  const alterarCampo = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDadosFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={enviarFormulario} className="space-y-5">
      <div>
        <label htmlFor="nome" className="block text-sm font-semibold text-emerald-900 mb-2">
          Nome Completo *
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={dadosFormulario.nome}
          onChange={alterarCampo}
          placeholder="Insira seu nome"
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-900 outline-none transition-all bg-white"
        />
      </div>
      <div>
        <label htmlFor="whatsapp" className="block text-sm font-semibold text-emerald-900 mb-2">
          WhatsApp *
        </label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          value={dadosFormulario.whatsapp}
          onChange={alterarCampo}
          placeholder="(00) 00000-0000"
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-900 outline-none transition-all bg-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-emerald-900 mb-2">
          E-mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={dadosFormulario.email}
          onChange={alterarCampo}
          placeholder="seu@email.com"
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-900 outline-none transition-all bg-white"
        />
      </div>
      <div>
        <label htmlFor="tipo" className="block text-sm font-semibold text-emerald-900 mb-2">
          Tipo de Precatório *
        </label>
        <select
          id="tipo"
          name="tipo"
          value={dadosFormulario.tipo}
          onChange={alterarCampo}
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-900 outline-none transition-all bg-white"
        >
          <option value="">Selecione o tipo</option>
          <option value="Municipal">Municipal</option>
          <option value="Estadual">Estadual</option>
          <option value="Federal">Federal</option>
        </select>
      </div>
      <motion.button
        type="submit"
        className="w-full text-white py-4 rounded-lg transition-colors flex items-center justify-center gap-2 font-semibold"
        style={{
          backgroundColor: '#48BAB8',
        }}
        whileHover={{ backgroundColor: '#428d8b' }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        <Send className="w-5 h-5" />
        Enviar Consulta
      </motion.button>
    </form>
  );
}
