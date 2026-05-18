import React from 'react';
import ListaPublicaciones from '../ListaPublicaciones/ListaPublicaciones';

export default function Feed({ publicaciones = [], onSelect }) {
  return (
    <main className="feed">
      <ListaPublicaciones publicaciones={publicaciones} onSelect={onSelect} />
    </main>
  );
}
