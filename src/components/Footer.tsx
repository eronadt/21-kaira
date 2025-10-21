import React from 'react';
import { Heart, Shield, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="w-8 h-8 text-pink-500" />
            <span className="text-2xl font-bold">Protocolo 21 Nutrientes para Gestantes</span>
            <Shield className="w-8 h-8 text-blue-500" />
          </div>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Você não está só gestando um bebê. Está construindo um legado.
          </p>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex justify-center items-center space-x-8 mb-6">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">21nutrientes@contato.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-400">Suporte: (11) 99245-6989</span>
              </div>
            </div>
            
            <p className="text-gray-500 text-sm">
              © 2025 Protocolo 21 Nutrientes. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
