import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll' 
import Logo from '../../assets/navbar-logo.png'
import { useState } from 'react'
import Menu from '../../assets/menu.png'
import FullPage from '../../pages/full/fullPage'                                                                               
 


export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <div className='navbar'>
        <Link path="/" >
        <img className='logo' src={Logo} alt="" />
        
        </Link>
          

            <button className='menuButton' onClick={toggleMenu}>
                <img src={Menu} alt="" />

            </button>


        
        <div className={`navigation ${isMenuOpen ?'active' : ''}`}>
             <a href='#main' to='main' smooth={true} duration={500}>Главная</a>
             <a to='#about' >Оформление заказа</a>
             <a to='#' >Акция</a>
             <a to='#about' >Калькулятор стоимости</a>
             <a to='#products' >Товары в Москве</a>
             <a to='#about' >Таблица размеров</a> 
        </div>
        <div className="button">
            {/* bu yerda buton bor  */}
           <a href="https://abboskhonov.t.me">Сделать заказ</a>
           <i class="fa-solid fa-paper-plane"></i>
            
        </div>

      
    </div>
  )
}
