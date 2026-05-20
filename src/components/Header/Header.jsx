import React from 'react';

export default function Header() {
  return (
    <header className="app-header">
      <div className="logo">Catstagram</div>
      <nav className="nav-icons">
        <button className="search" aria-label="Home">Home</button>
        <button aria-label="Search">Search</button>
        <button aria-label="Create">Create</button>
        <button aria-label="Likes">Likes</button>
        <button aria-label="Profile">Profile</button>
      </nav>
    </header>
  );
}
