import React from 'react';
import Image from 'next/image';

export default function Bonus() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-100 border-t border-b">
      <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Você ainda leva esses bônus exclusivos:
          </h2>
          <ul className="text-base text-muted-foreground list-disc list-inside space-y-2">
            <li><strong>Lista de compras mensal:</strong> tudo que você precisa com economia e praticidade</li>
            <li><strong>Guia para aliviar sintomas:</strong> estratégias naturais para reduzir inchaço, azia, cansaço e falta de apetite</li>
            <li><strong>Checklist da imunidade:</strong> nutrientes que blindam o corpo da mãe e do bebê</li>
            <li><strong>Cardápio da semana:</strong> sugestões equilibradas, simples e baratas para cada fase da gestação</li>
          </ul>
          <p className="text-lg font-semibold">
            Todos os bônus são digitais e chegam junto com seu guia no e-mail
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            alt="Bônus inclusos"
            className="rounded-xl shadow-md"
            height="500"
            src="/bonus-image.jpg"
            style={{ aspectRatio: '500/500', objectFit: 'cover' }}
            width="500"
          />
        </div>
      </div>
    </section>
  );
}
