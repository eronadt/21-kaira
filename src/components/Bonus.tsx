import React from 'react';
import { Gift, Clock, BookOpen } from 'lucide-react';

const Bonus = () => {
  const bonuses = [
    {
      icon: BookOpen,
      title: 'Guia de Preparo Rápido',
      description: 'Refeições nutritivas em menos de 15 minutos',
      image: 'https://i.imgur.com/yzaDm2X.png=600'
    },
    {
      icon: BookOpen,
      title: 'Lista pronta de compras',
      description: 'Lista pronta de compras para cada trimestre da gestação já filtrada para caber no seu bolso',
      image: 'https://i.imgur.com/o4CJKS9.png=600'
    }
  ];

  return (
    <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Gift className="w-12 h-12 text-purple-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bônus Exclusivos Inclusos
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {bonuses.map((bonus, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <img 
                    src={bonus.image}
                    alt={bonus.title}
                    className="w-full h-48 object-contain rounded-xl mb-4"
                  />
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <bonus.icon className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  BÔNUS: {bonus.title}
                </h3>
                <p className="text-gray-600 text-center text-lg">
                  {bonus.description}
                </p>
                <div className="text-center mt-4">
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                    GRÁTIS
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-2xl">
            <Clock className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Valor Total dos Bônus: R$ 147,00</h3>
            <p className="text-xl">
              Mas hoje você leva <span className="font-bold text-yellow-300">TUDO GRÁTIS</span> junto com o método!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonus;
