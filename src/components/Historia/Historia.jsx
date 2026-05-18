import React from 'react';

export default function Historia({ usuario = 'gatito', avatar = '/public/avatar-placeholder.png' }) {
  return (
    <div className="historia">
      <img src={avatar} alt={usuario} className="historia-avatar" />
      <small>{usuario}</small>
    </div>
  );
}
