import React from 'react'
import Logo from '../../assets/Group 3.png'
import './footer.css'
import { Link } from 'react-router-dom'

export default function footer() {


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className='footer'>
        <div className="logo">
            <img src={Logo} alt="" />
            <h1>MARGIELA <br />
            SERVICE</h1>
        </div>

        <div className="navigation-footer">

        <div className="navi">
        <a href="#main" onClick={toggleMenu}>
          Главная
        </a>
        <a href="#discounted" onClick={toggleMenu}>Оформление заказа</a>
        <a href="#qrcode" onClick={toggleMenu}>Акция</a>
        <a href="#why_us" onClick={toggleMenu}>Калькулятор стоимости</a>
        <a href="#products" onClick={toggleMenu}>Товары в Москве</a>
        <a href="#sizetable" onClick={toggleMenu}>Таблица размеров</a>
        </div>

        <a className='buy' href="https://abboskhonov.t.me">Сделать заказ <i class="fa-solid fa-paper-plane"></i> </a>


        </div>

        <div className="copyright">
            <h6>Developed by abboskhonov</h6>
            <h6>All rights reserved ©2024</h6>
        </div>

       
      
    </div>
  )
}
