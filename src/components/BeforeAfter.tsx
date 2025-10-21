import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const BeforeAfter = () => {
  const testimonials = [
    {
      image: 'https://i.imgur.com/mWlJQRk.png',
      alt: 'Feedback de mãe sobre o protocolo 21 nutrientes'
    },
    {
      image: 'https://i.imgur.com/ooIkKAk.png',
      alt: 'Depoimento de gestante satisfeita com os resultados'
    },
    {
      image: 'https://i.imgur.com/iuNTYFE.png',
      alt: 'Relato de mãe sobre economia e nutrição'
    },
    {
      image: 'https://i.imgur.com/oNBxhDl.png',
      alt: 'Testemunho de gestante sobre o método'
    },
    {
      image: 'https://i.imgur.com/0VQ0f2a.png',
      alt: 'Feedback positivo sobre o guia nutricional'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-8 h-8 text-yellow-500 mr-2" />
            <Star className="w-8 h-8 text-yellow-500 mr-2" />
            <Star className="w-8 h-8 text-yellow-500 mr-2" />
            <Star className="w-8 h-8 text-yellow-500 mr-2" />
            <Star className="w-8 h-8 text-yellow-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Que as Mães Estão Falando
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Centenas de gestantes já transformaram sua alimentação com o Protoco 21 Nutrientes
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Slides */}
            <div className="relative h-96 md:h-[500px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? 'bg-green-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-gray-600">Mães Satisfeitas</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Taxa de Aprovação</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">30 dias</div>
              <p className="text-gray-600">Garantia Total</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
