import React from 'react';

// Tipagem das propriedades do nosso campo reutilizável
interface InputFieldProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[]; // Se existir, renderiza um <select>
}

export function InputField({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  options
}: InputFieldProps) {
  // Centralizamos as classes do Tailwind que se repetiam
  const baseClassName = "w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-900 outline-none transition-all bg-white";

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-emerald-900 mb-2">
        {label} {required && '*'}
      </label>
      
      {/* Condicional: Renderiza <select> se tiver options, senão renderiza <input> */}
      {options ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseClassName} cursor-pointer`}
        >
          <option value="">{placeholder || "Selecione"}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={baseClassName}
        />
      )}
    </div>
  );
}