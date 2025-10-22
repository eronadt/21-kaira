import React from "react";

export default function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white border-t">
      <div className="container px-4 md:px-6 space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Uma gestação mais segura, leve e saudável com orientações simples
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            O Guia Nutricional te entrega o passo a passo prático para proteger o desenvolvimento do seu bebê — sem complicações, mesmo com rotina corrida e orçamento apertado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-orange-50 p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">Orientação nutricional acessível</h3>
            <p className="text-muted-foreground">
              Você aprende como montar refeições completas com alimentos baratos, simples e que realmente fazem diferença.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">Redução de sintomas comuns</h3>
            <p className="text-muted-foreground">
              Saiba como aliviar inchaço, azia, falta de apetite e cansaço com ajustes simples e naturais na alimentação.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">Mais tranquilidade emocional</h3>
            <p className="text-muted-foreground">
              Tenha confiança de que está fazendo o melhor pelo seu bebê — com base em ciência, e não em achismos ou palpites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
