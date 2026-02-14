import React from 'react';
import { Send } from 'lucide-react';

export function Form() {
  const [dadosFormulario, setDadosFormulario] = React.useState({
    nome: '',
    whatsapp: '',
    email: '',
    esfera: '',
    tipo: '',
    valor: '',
    mensagem: '',
  });

  const enviarFormulario = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', dadosFormulario);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setDadosFormulario({
      nome: '',
      whatsapp: '',
      email: '',
      esfera: '',
      tipo: '',
      valor: '',
      mensagem: '',
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      </div>
      <div>
        <label htmlFor="esfera" className="block text-sm font-semibold text-emerald-900 mb-2">
          Esfera do Precatório *
        </label>
        <select
          id="esfera"
          name="esfera"
          value={dadosFormulario.esfera}
          onChange={alterarCampo}
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-900 outline-none transition-all bg-white"
        >
          <option value="">Selecione a esfera</option>
          <option value="Municipal">Municipal</option>
          <option value="Estadual">Estadual</option>
          <option value="Federal">Federal</option>
        </select>
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
          <option value="">Selecione uma opção</option>
          <option value="alimentar">Alimentar</option>
          <option value="comum">Comum (Não Alimentar)</option>
          <option value="trabalhista">Trabalhista</option>
          <option value="previdenciario">Previdenciário</option>
          <option value="tributario">Tributário</option>
          <option value="outro">Outro</option>
        </select>
      </div>
      <div>
        <label htmlFor="valor" className="block text-sm font-semibold text-emerald-900 mb-2">
          Valor a Receber (Estimado) *
        </label>
        <input
          type="text"
          id="valor"
          name="valor"
          value={dadosFormulario.valor}
          onChange={alterarCampo}
          placeholder="R$ 0,00"
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-900 outline-none transition-all bg-white"
        />
      </div>
      <div>
        <label htmlFor="mensagem" className="block text-sm font-semibold text-emerald-900 mb-2">
          Mensagem (opcional)
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={dadosFormulario.mensagem}
          onChange={alterarCampo}
          placeholder="Conte-nos mais sobre seu caso..."
          rows={4}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-900 outline-none transition-all bg-white resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-emerald-900 text-white py-4 rounded-lg hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 font-semibold"
      >
        <Send className="w-5 h-5" />
        Enviar Mensagem
      </button>
    </form>
  );
}
