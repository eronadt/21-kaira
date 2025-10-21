import React from 'react';
import { Package, CheckCircle, Clock } from 'lucide-react';

const Product = () => {
  const includes = [
    'Protocolo 21 nutrientes essenciais (sem enrolação)',
    'Cardápio semanal com substituições acessíveis',
    'Lista de mercado por trimestre gestacional',
    'Opções para quem tem restrições alimentares',
    'Checklist imprimível de evolução nutricional',
    'BÔNUS: Guia de preparo de refeições rápidas e nutritivas',
    'BÔNUS: Lista pronta de compras para cada trimestre da gestação já filtrada para caber no seu bolso',
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
      <div className="container mx-auto px-4">
        {/* Imagem do Produto */}
        <div className="text-center mb-8">
          <img
            src="https://i.imgur.com/MMrL54J.jpeg"
            alt="Flat lay com caderno, celular, checklist e alimentos saudáveis"
            loading="lazy"
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg"
          />
        </div>

        {/* Headline */}
        <div className="text-center mb-12">
          <p className="text-green-600 font-semibold mb-2">
            Nutrição prática e acessível para gestantes
          </p>
          <Package className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O QUE VOCÊ RECEBE COM O PROTOCOLO DOS 21 NUTRIENTES PARA GESTANTES?
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded"></div>
        </div>

        {/* Conteúdo */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Lista de Benefícios */}
          <div className="grid gap-4 mb-8 divide-y divide-gray-100">
            {includes.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-100"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Extras */}
          <div className="border-t border-gray-200 pt-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <Package className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Formato Digital</h3>
                <p className="text-gray-600">Tudo online. Receba acesso imediato no seu e-mail.</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Acesso Vitalício</h3>
                <p className="text-gray-600">Pagamento único, sem mensalidades ou pegadinhas.</p>
              </div>
            </div>

            {/* Pricing + CTA (seu card clicável atual) */}
            <a
              href="https://pay.kiwify.com.br/4qRdenZ"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-white text-gray-900 p-8 rounded-xl border border-green-300 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <span className="inline-block bg-yellow-300 text-gray-900 font-bold px-3 py-1 rounded-full mb-4">
                Oferta por tempo limitado
              </span>

              {/* Bloco do preço */}
              <div className="mb-4">
                <p className="text-lg line-through text-red-500">De R$ 97,90</p>
                <p className="text-4xl md:text-5xl font-extrabold text-green-600">
                  APENAS R$ 19,90
                </p>
                <p className="text-lg mt-2">Pagamento único • Sem mensalidade</p>
              </div>

              {/* Selos de confiança */}
              <img
                src="https://i.imgur.com/UpR3p9z.png"
                alt="Selos de compra segura, garantia e formas de pagamento"
                loading="lazy"
                className="w-full max-w-md mx-auto mt-4"
              />
            </a>

            {/* NOVO BOTÃO VERDE — igual ao da imagem, com texto “QUERO COMPRAR AGORA” */}
            <div className="mt-6">
              <a
                href="https://pay.kiwify.com.br/4qRdenZ"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-md mx-auto text-center bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold uppercase tracking-wide py-4 px-6 rounded-lg shadow-lg shadow-green-500/30 transition-transform duration-200 hover:scale-[1.02]"
              >
                QUERO COMPRAR AGORA
              </a>
            </div>

            <p className="text-sm text-gray-500 text-center mt-2">
              Compra 100% segura • Receba agora mesmo no seu e-mail
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
