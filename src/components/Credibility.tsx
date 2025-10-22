import React from "react";

export default function Bonus() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white border-t">
      <div className="container px-4 md:px-6 space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Você recebe muito mais do que um simples guia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Ao garantir o seu acesso hoje, você leva 3 bônus exclusivos para te ajudar a viver uma gestação blindada — por dentro e por fora.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-orange-50 p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">Bônus 1: Guia Antiestresse Natural</h3>
            <p className="text-muted-foreground">
              Técnicas simples pra controlar a ansiedade, dormir melhor e proteger o emocional do bebê.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">Bônus 2: Receitas Rápidas e Nutritivas</h3>
            <p className="text-muted-foreground">
              Pratos prontos em até 15 minutos com tudo que o seu bebê precisa — sem complicação.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">Bônus 3: Lista dos 21 Nutrientes Essenciais</h3>
            <p className="text-muted-foreground">
              Saiba exatamente quais alimentos ajudam a formar o cérebro, fortalecer a imunidade e evitar deficiências ocultas.
            </p>
          </div>
        </div>

        <div className="text-center pt-10">
          <p className="text-lg font-medium">
            Tudo isso pra te ajudar a viver uma gestação segura, completa e saudável — do primeiro ao último trimestre.
          </p>
        </div>
      </div>
    </section>
  );
}
