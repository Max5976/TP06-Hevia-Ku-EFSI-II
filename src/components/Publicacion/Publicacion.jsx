import React, { useState } from 'react';

export default function Publicacion({ publicacion, seleccionar }) {
  const [likeado, setLikeado] = useState(false);
  const [likes, setLikes] = useState(publicacion?.likes ?? Math.floor(Math.random() * 500) + 20);

	const llevarACaboLike = (likear) => {
		likear.stopPropagation();
		if (!likeado) {
			setLikes(likes + 1);
			setLikeado(true);
		} else {
			setLikes(likes - 1);
			setLikeado(false);
		}
	};

  const imageUrl = publicacion?.url || (publicacion?.image && publicacion.image.url) || '';

  return (
    <article className="publicacion" onClick={() => seleccionar && seleccionar(publicacion)}>
      <header className="pub-header">
        <img className="avatar" src="/avatar-placeholder.png" alt="avatar" />
        <div className="usuario">
          <strong>gatito_usuario</strong>
          <span>Ubicación</span>
        </div>
      </header>

      <div className="pub-image-wrapper">
        <img src={imageUrl} alt="post gato" className="pub-image" />
      </div>

      <div className="pub-actions">
        <button type="button" className="like-btn" onClick={llevarACaboLike} aria-label="Like">
          <svg width="20" height="20" viewBox="0 0 24 24" fill={liked ? '#e0245e' : 'none'} xmlns="http://www.w3.org/2000/svg">
            <path d="M3.172 5.172a4 4 0 015.656 0L12 8.343l3.172-3.171a4 4 0 115.656 5.656L12 21.657 3.172 10.828a4 4 0 010-5.656z" stroke="#111" strokeWidth="0.8" />
          </svg>
        </button>

        <button type="button" className="comment-btn" aria-label="Comment">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#111" strokeWidth="1" />
          </svg>
        </button>

        <button type="button" className="share-btn" aria-label="Share">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2L11 13" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 2l-7 20-4-9-9-4 20-7z" stroke="#111" strokeWidth="1" fill="none" />
          </svg>
        </button>
      </div>

      <div className="pub-stats">
        <strong>{likes} likes</strong>
      </div>

      <div className="pub-caption">
        <strong>gatito_usuario</strong> Un hermoso gato desde la API. #cats
      </div>

      <div className="pub-footer">
        <small>Hace 2 días</small>
      </div>
    </article>
  );
}

