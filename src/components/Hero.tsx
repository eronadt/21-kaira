import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-b">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Você pode estar prejudicando o cérebro do seu bebê — sem saber…
            </h1>
            <p className="text-xl text-muted-foreground">
              Mesmo comendo “bem”, a maioria das gestantes não recebe os 21 nutrientes essenciais para o desenvolvimento do cérebro, da imunidade e do crescimento saudável do bebê.
            </p>
            <p className="text-lg text-muted-foreground">
              Descubra o protocolo validado por especialistas, usado por centenas de mães que vivem uma gestação segura e saudável — mesmo sem acesso a alimentos caros como salmão, castanhas e chia.
            </p>
            <ul className="text-muted-foreground text-base list-disc list-inside">
              <li>Entrega imediata</li>
              <li>Revisado por nutricionistas</li>
              <li>Acesso vitalício</li>
              <li>Bônus: lista de compras + cardápio prático</li>
              <li>Garantia de 7 dias</li>
            </ul>
            <div className="pt-4">
              <Button className="text-lg px-8 py-6 rounded-xl">
                ACESSE O GUIA AGORA — ENQUANTO ESTÁ DISPONÍVEL
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              alt="Grávida protegendo o bebê"
              className="rounded-xl object-cover"
              height="500"
              src="/hero-image.jpg"
              style={{ aspectRatio: '500/500', objectFit: 'cover' }}
              width="500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
