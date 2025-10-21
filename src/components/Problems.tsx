import React from 'react';
import { Brain, Bone, Weight, Shield, AlertCircle, TrendingDown } from 'lucide-react';

const Problems = () => {
  const consequences = [
    { icon: Brain, title: 'Atrasos no desenvolvimento do sistema nervoso', color: 'text-red-500' },
    { icon: Bone, title: 'Formação óssea comprometida', color: 'text-orange-500' },
    { icon: Weight, title: 'Baixo peso fetal', color: 'text-yellow-500' },
    { icon: Brain, title: 'Problemas cognitivos no futuro', color: 'text-purple-500' },
    { icon: Shield, title: 'Imunidade fraca no bebê', color: 'text-blue-500' },
  ];

  return (
    <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
      <div className="container mx-auto px-4">
        {/* Shopping Cart Image */}
        <div className="text-center mb-12">
          <img 
            src="https://i.imgur.com/kTZKIPc.png=800" 
            alt="Mãe contando moedas no mercado"
            className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
          />
        </div>

        {/* Warning about supplements */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <AlertCircle className="w-7 h-7 text-yellow-600 mr-3" />
              "Mas eu já tomo vitamina prenatal..."
            </h3>
            <p className="text-lg text-gray-700 mb-6">OK. Mas você sabia que:</p>
            
            <div className="grid md:grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-800"><span className="font-bold text-red-600">83%</span> das gestantes usam suplemento errado ou na dose errada</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-800">Muitos nutrientes <span className="font-bold">NÃO são absorvidos</span> sem o alimento certo junto</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-800">A maioria das fórmulas <span className="font-bold text-red-600">NÃO contém</span> os 21 elementos que o bebê precisa</p>
              </div>
            </div>

            <div className="text-center mt-6 p-4 bg-red-100 rounded-lg">
              <p className="text-xl font-bold text-red-800">
                Ou seja... Você esta gastando à toa e ainda achando que tá arrasando.
              </p>
            </div>
          </div>
        </div>

        {/* Consequences */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que acontece se continuar ignorando:
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {consequences.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
              <item.icon className={`w-10 h-10 ${item.color} mb-4`} />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="bg-red-600 text-white p-8 rounded-2xl max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <img 
              src="https://i.imgur.com/zg5ZIIT.png=600" 
              alt="Ultrassom com mãe preocupada"
              className="w-full max-w-sm mx-auto rounded-xl opacity-90"
            />
          </div>
          <TrendingDown className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">E pior: tudo isso sem sintoma na gestação.</h3>
          <p className="text-xl">
            Você só vai descobrir lá na frente. <span className="font-bold">Quando não der mais tempo.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problems;
