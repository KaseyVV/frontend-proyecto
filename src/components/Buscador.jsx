import React from 'react';

function Buscador({ onSearch }) {
  return (
    <div>
      <input
        type="search"
        placeholder="Buscar juegos..."
        onChange={(e) => onSearch && onSearch(e.target.value)}
      />
    </div>
  );
}

export default Buscador;
