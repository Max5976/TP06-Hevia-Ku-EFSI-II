import React from 'react';

export default function Perfil({ avatarApi }) {
  const data = {
    username: 'mi_usuario',
    avatar: avatarApi || 'https://cdn2.thecatapi.com/images/1.jpg', 
    bio: 'Amante de los gatos',
    publicaciones: 12,
    seguidores: 340,
    seguidos: 180,
  };

  return (
    <aside className="perfil">
      {}
      <div className="perfil-avatar-borde">
        <img src={data.avatar} alt={data.username} className="perfil-avatar" />
      </div>
      
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