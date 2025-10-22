import React from 'react';
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50 border-t border-b">
      <div className="container px-4 md:px-6 text-center space-y-6">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Proteja o futuro do seu bebê com orientações simples, acessíveis e validadas por especialistas
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Você vai receber o protocolo nutricional completo + bônus exclusivos pra garantir uma gestação segura, saudável e econômica. Tudo em um único guia com entrega imediata.
        </p>
        <div className="pt-4">
          <Button className="text-lg px-10 py-6 rounded-xl">
            LIBERAR ACESSO COM DESCONTO AGORA
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Acesso vitalício | Garantia de 7 dias | Compra 100% segura
        </p>
      </div>
    </section>
  );
}
