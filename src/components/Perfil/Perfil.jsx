import React from 'react';

export default function Perfil({ usuario }) {
  const data = usuario || {
    username: 'mi_usuario',
    avatar: '/public/avatar-placeholder.png',
    bio: 'Amante de los gatos',
    publicaciones: 12,
    seguidores: 340,
    seguidos: 180,
  };

  return (
    <aside className="perfil">
      <img src={data.avatar} alt={data.username} className="perfil-avatar" />
      <div className="perfil-info">
        <h3>{data.username}</h3>
        <p>{data.bio}</p>
        <ul className="perfil-stats">
          <li><strong>{data.publicaciones}</strong> publicaciones</li>
          <li><strong>{data.seguidores}</strong> seguidores</li>
          <li><strong>{data.seguidos}</strong> seguidos</li>
        </ul>
        <button className="editar-perfil">Editar perfil</button>
      </div>
    </aside>
  );
}
