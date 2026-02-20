import React from 'react';
import { Scale, BadgeDollarSign, HandCoins } from 'lucide-react';

export const TrustBar = () => (
  <section className="bg-gray-50 border-y border-gray-100 py-6">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-700">
        <div className="flex items-center gap-2.5">
          <Scale className="w-5 h-5 text-[#48bab8]" />
          <span className="font-medium">Análise jurídica especializada</span>
        </div>
        <div className="hidden md:block w-px h-6 bg-gray-200"></div>
        <div className="flex items-center gap-2.5">
          <BadgeDollarSign className="w-5 h-5 text-[#48bab8]" />
          <span className="font-medium">Ticket médio elevado</span>
        </div>
        <div className="hidden md:block w-px h-6 bg-gray-200"></div>
        <div className="flex items-center gap-2.5">
          <HandCoins className="w-5 h-5 text-[#48bab8]" />
          <span className="font-medium">Comissionamento agressivo</span>
        </div>
      </div>
    </div>
  </section>
);