import React, { useState } from 'react';

import type { Cogumelo } from '../types';

function CogumeloCard({ cogumelo }: { cogumelo: Cogumelo }) {

  const [isFlipped, setIsFlipped] = useState(false);

  const tipoEstilos = {
    'comestivel': 'bg-green-100 text-green-800 border-green-400',
    'venenoso': 'bg-red-100 text-red-800 border-red-400',
    'nao-comestivel': 'bg-yellow-100 text-yellow-800 border-yellow-400',
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm border border-stone-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 overflow-hidden group">
      <div className="w-full h-48 overflow-hidden">
        <img 
          src={cogumelo.imagemUrl} 
          alt={`Imagem de ${cogumelo.nomePopular}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-2xl font-bold text-stone-800 font-serif">{cogumelo.nomePopular}</h3>
        <p className="text-sm text-stone-500 italic mb-3">{cogumelo.nomeCientifico}</p>
        
        <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-4 ${tipoEstilos[cogumelo.tipo]}`}>
          {cogumelo.tipo.replace('-', ' ')}
        </span>
        
        <p className="text-stone-600 text-base">
          {cogumelo.descricao}
        </p>
      </div>
    </div>
  );
}

// Exportamos o componente para que o App.tsx o possa usar.
export default CogumeloCard;