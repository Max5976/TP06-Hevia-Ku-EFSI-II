import React from 'react';

export default function ModalPublicacion({ publicacion, onClose }) {
  if (!publicacion) return null;

  const imageUrl = publicacion?.url || (publicacion?.image && publicacion.image.url) || '';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>Cerrar</button>
        <img src={imageUrl} alt="detalle" className="modal-image" />
        <div className="modal-body">
          <h4>gatito_usuario</h4>
          <p>Descripción ampliada del post. Aquí se pueden simular likes, comentarios y fecha.</p>
          <p><strong>Likes:</strong> {publicacion.likes ?? 0}</p>
        </div>
      </div>
    </div>
  );
}
