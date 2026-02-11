import React from 'react';
import { Hero } from '../components/Hero';
import { Benefits } from '../components/Benefits';
import { Testimonials } from '../components/Testimonials';
import { ContactForm } from '../components/ContactForm';
import { FAQ } from '../components/FAQ';

export function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Benefits />
      <Testimonials />
      <ContactForm />
      <FAQ />
    </div>
  );
}