import React, { useState } from 'react';
import '../header/header.css';
import { Link } from "react-router-dom";

function Header() {
  // Estado para controlar a visibilidade do menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        <Link to="/">
          <img src="../assets/images/logo-miuda.png" alt="Logo"/>
        </Link>
      
        
        <div className="search-container">
          <input type="search" placeholder="Pesquisar..." />
          <span className="material-symbols-outlined">search</span>
        </div>
        
        <div className='icones-header'>
          <span className="material-symbols-outlined">favorite</span>
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="material-symbols-outlined">person</span>
        </div>
        
        <span className="material-symbols-outlined" id='menu' onClick={toggleMenu}>
          menu
        </span>
      </header>
      
      {/* Menu Header - Visível quando isMenuOpen é true */}
      {isMenuOpen && (
        <div className='menu-header'>
          <ul>
            <li><a href="">Favoritos</a></li>
            <li><a href="">Carrinho</a></li>
            <li><a href="">Café</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
