import { Send, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { FormProps } from '../types/Form';
import { InputField } from './InputField';

export function Form({ dados, onChange, onSubmit, isLoading }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <InputField
        label="Nome Completo"
        id="nome"
        name="nome"
        value={dados.nome}
        onChange={onChange}
        placeholder="Insira seu nome"
        required
      />

      <InputField
        label="WhatsApp"
        id="whatsapp"
        name="whatsapp"
        type="tel"
        value={dados.whatsapp}
        onChange={onChange}
        placeholder="(00) 00000-0000"
        required
      />

      <InputField
        label="E-mail"
        id="email"
        name="email"
        type="email"
        value={dados.email}
        onChange={onChange}
        placeholder="seu@email.com"
        required
      />

      <InputField
        label="Tipo de Precatório"
        id="tipo"
        name="tipo"
        value={dados.tipo}
        onChange={onChange}
        placeholder="Selecione o tipo"
        required
        options={[
          { value: 'Municipal', label: 'Municipal' },
          { value: 'Estadual', label: 'Estadual' },
          { value: 'Federal', label: 'Federal' },
        ]}
      />

      <motion.button
        type="submit"
        disabled={isLoading}
        className={`w-full text-white py-4 rounded-lg transition-colors flex items-center justify-center gap-2 font-semibold cursor-pointer ${
          isLoading ? 'opacity-70 cursor-not-allowed' : ''
        }`}
        style={{
          backgroundColor: '#48BAB8',
        }}
        whileHover={!isLoading ? { backgroundColor: '#064e3b' } : {}}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Enviar Consulta
          </>
        )}
      </motion.button>
    </form>
  );
}
