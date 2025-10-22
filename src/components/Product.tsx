import React from 'react';
import Image from 'next/image';

export default function Product() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-b bg-white">
      <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold sm:text-4xl">
            O que você vai receber ao acessar o guia nutricional
          </h2>
          <ul className="text-base text-muted-foreground list-disc list-inside space-y-2">
            <li>O protocolo completo com os 21 nutrientes essenciais validados por nutricionistas</li>
            <li>Cardápios acessíveis e práticos para o dia a dia da gestante</li>
            <li>Lista de alimentos acessíveis — nada de coisas caras ou difíceis de encontrar</li>
            <li>Bônus: Lista de compras mensal + orientações para reduzir sintomas como inchaço, azia e cansaço</li>
            <li>Entrega imediata no seu e-mail + acesso vitalício</li>
            <li>Garantia de 7 dias: se não gostar, devolvemos seu dinheiro</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Image
            alt="Guia nutricional para gestantes"
            className="rounded-xl shadow-md"
            height="500"
            src="/product-image.jpg"
            style={{ aspectRatio: '500/500', objectFit: 'cover' }}
            width="500"
          />
        </div>
      </div>
    </section>
  );
}
