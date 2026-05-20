import React from 'react';
import Publicacion from '../Publicacion/Publicacion';

export default function Feed({ publicaciones = [], seleccionar }) {
  return (
    <main className="feed">
        {publicaciones.map((publi) => (
          <Publicacion
            key={publi.id}
            publicacion={publi}
            seleccionar={seleccionar}
          />
        ))}
    </main>
  );
}
