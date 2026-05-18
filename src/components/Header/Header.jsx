import React from 'react';

export default function Header() {
  return (
    <header className="app-header">
      <div className="logo">Instagram Clone</div>
      <div className="search">Buscar</div>
      <nav className="nav-icons">
        <button aria-label="Home">Home</button>
        <button aria-label="Search">Search</button>
        <button aria-label="Create">Create</button>
        <button aria-label="Likes">Likes</button>
        <button aria-label="Profile">Profile</button>
      </nav>
    </header>
  );
}
