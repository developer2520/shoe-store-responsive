import React from 'react'
import Logo from '../../assets/Group 3.png'
import './footer.css'
import { Link } from 'react-router-dom'

export default function footer() {
  return (
    <div className='footer'>
        <div className="logo">
            <img src={Logo} alt="" />
            <h1>MARGIELA <br />
            SERVICE</h1>
        </div>

        <div className="navigation-footer">

        <div className="navi">
             <a href='#main' >Главная</a>
             <a href to='#about' >Акция</a>
             <a href to='#about' >Оформление заказа</a>
             <a href to='#about' >Калькулятор стоимости</a>
             <a href='#products' >Товары в Москве</a>
             <a href to='#about' >Таблица размеров</a> 
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
