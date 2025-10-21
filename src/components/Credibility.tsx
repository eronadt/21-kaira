import React from 'react';
import { Award, Users, BookOpen, Star } from 'lucide-react';

const faqs: { question: string; answer: string }[] = [
  {
    question: 'Como recebo o Protocolo 21 Nutrientes após a compra?',
    answer:
      'O acesso chega imediatamente no seu e-mail assim que o pagamento é confirmado, permitindo que você entre na plataforma e consulte todo o conteúdo na mesma hora.',
  },
  {
    question: 'Por quanto tempo terei acesso ao conteúdo?',
    answer:
      'O acesso é vitalício. Você realiza um único pagamento e pode revisar as orientações sempre que precisar durante a gestação e até no pós-parto.',
  },
  {
    question: 'Serve para todas as fases da gestação?',
    answer:
      'Sim. O método está organizado por trimestre gestacional, com listas de mercado, cardápios e orientações específicas para cada fase.',
  },
  {
    question: 'Vou precisar comprar alimentos caros ou suplementos importados?',
    answer:
      'Não. Todo o plano é focado em comida de verdade acessível, com substituições econômicas e ingredientes que você encontra facilmente no mercado.',
  },
  {
    question: 'E se eu tiver restrições alimentares ou enjoos?',
    answer:
      'Você recebe opções de substituição e cardápios adaptáveis para as restrições mais comuns, além de sugestões para lidar com enjoos e aversões típicas da gestação.',
  },
];

const Credibility = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quem criou esse método:
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded"></div>
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mb-12">
            <div className="mb-6">
              <img 
                src="https://i.imgur.com/zCzTGZL.jpeg=800" 
                alt="Nutricionista feminina sorrindo com alimentos saudáveis"
                className="w-64 h-64 mx-auto rounded-full object-cover shadow-lg border-4 border-blue-200"
              />
            </div>

            <div className="flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Joana Sabino</h3>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              Desenvolvido por mim, já atuo há mais de 
              <span className="font-bold text-blue-600"> 12 anos em clínicas com gestantes, </span> 
              tanto no sistema público quanto no privado.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <BookOpen className="w-6 h-6 text-green-500 mb-2" />
                <p className="font-semibold text-gray-800">Baseado em evidências reais</p>
                <p className="text-gray-600 text-sm">Nada de dieta da moda ou suplemento importado</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <Star className="w-6 h-6 text-yellow-500 mb-2" />
                <p className="font-semibold text-gray-800">Experiência Comprovada</p>
                <p className="text-gray-600 text-sm">Milhares de gestantes atendidas com sucesso</p>
              </div>
            </div>
          </div>

          {/* Perguntas Frequentes */}
          <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-sm mb-12 text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Perguntas Frequentes</h3>
            <dl className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-blue-50 p-6 rounded-xl border border-blue-100"
                >
                  <dt className="text-lg font-semibold text-gray-800">{faq.question}</dt>
                  <dd className="text-gray-600 mt-2 leading-relaxed">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Final Warning */}
          <div className="bg-gray-800 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">
            </h3>
            <p className="text-lg mb-4">
              Tem mãe gastando mais de <span className="font-bold text-red-400">R$300 por mês</span> em suplemento 
              e achando que tá segura...
            </p>
            <p className="text-lg mb-4">
              ...mas errando no básico: <span className="font-bold text-green-400">comida de verdade</span>.
            </p>
            <a 
              href="https://pay.kiwify.com.br/4qRdenZ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-green-600 p-4 rounded-lg hover:bg-green-700 transition-colors duration-300 cursor-pointer transform hover:scale-105"
            >
              <p className="text-xl font-bold">
                Por R$19,90 você tem acesso ao que resolve.
              </p>
              <p className="text-lg opacity-90">O resto é ilusão vendida por farmácia.</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
