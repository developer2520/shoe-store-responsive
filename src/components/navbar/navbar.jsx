import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/navbar-logo.png';
import Menu from '../../assets/menu.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <a href='/' className="logo-link">
        <img className="logo" src={Logo} alt="Logo" />
      </a>

      <button className="menuButton" onClick={toggleMenu}>
        <img src={Menu} alt="Menu" />
      </button>

      <div className={`navigation ${isMenuOpen ? 'active' : ''}`}>
        <a href="#main" onClick={toggleMenu}>
          Главная
        </a>
        <a href="#discounted" onClick={toggleMenu}>Оформление заказа</a>
        <a href="#qrcode" onClick={toggleMenu}>Акция</a>
        <a href="#why_us" onClick={toggleMenu}>Калькулятор стоимости</a>
        <a href="#products" onClick={toggleMenu}>Товары в Москве</a>
        <a href="#sizetable" onClick={toggleMenu}>Таблица размеров</a>
      </div>

      <div className="button">
        <a href="https://abboskhonov.t.me">Сделать заказ</a>
        <i className="fa-solid fa-paper-plane"></i>
      </div>
    </div>
  );
}
