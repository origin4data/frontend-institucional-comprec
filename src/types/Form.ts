export interface FormProps {
  dados: {
    nome: string;
    whatsapp: string;
    email: string;
    tipo: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}