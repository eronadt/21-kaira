import React from 'react';
import { CheckCircle, Lightbulb, Users } from 'lucide-react';

const Benefits = () => {
  const discoveries = [
    'Os 21 nutrientes essenciais para o desenvolvimento neurológico, imunológico e ósseo do bebê',
    'Por que a maioria das gestantes está errando feio na dieta mesmo tentando acertar',
    'Quais alimentos estão sugando seu bolso e podem ser substituídos por opções baratas e eficazes',
    'Um cardápio simples, objetivo, acessível e validado por nutricionistas que realmente atendem mães de verdade'
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Image */}
        <div className="text-center mb-8">
          <img 
            src="https://i.imgur.com/A8Hge2p.png=800" 
            alt="Checklist nutricional e cardápio na mesa"
            className="w-full max-w-lg mx-auto rounded-2xl shadow-lg"
          />
        </div>

        <div className="text-center mb-12">
          <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que você vai receber:
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {discoveries.map((discovery, index) => (
              <div key={index} className="flex items-start space-x-4 bg-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-800 font-medium">{discovery}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full">
            <Users className="w-5 h-5 mr-2" />
            <span className="font-semibold">Centenas de gestantes já estão aplicando esse método</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
