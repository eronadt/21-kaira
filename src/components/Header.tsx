import React from 'react';
import { Heart, Shield } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-50 to-blue-50 py-4 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-3">
          <Heart className="w-8 h-8 text-pink-500" />
          <span className="text-2xl font-bold text-gray-800 text-center">
            Protocolo 21 Nutrientes para Gestantes
          </span>
          <Shield className="w-8 h-8 text-blue-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
