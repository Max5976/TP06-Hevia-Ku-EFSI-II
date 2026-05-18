import React from 'react';
import Publicacion from '../Publicacion/Publicacion';

export default function ListaPublicaciones({ publicaciones = [], onSelect }) {
  return (
    <div className="lista-publicaciones">
      {publicaciones.map((pub) => (
        <Publicacion
          key={pub.id}
          publicacion={pub}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}