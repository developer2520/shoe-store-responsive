import React from 'react'
import background from './../../assets/background-curved.png'
import './main.css'
import shoe from '../../assets/shoe.png'
import Frame from '../../assets/Frame 5.png'

export default function main() {
  return (
    <div className='main'>
        <div className="main-left">
            <img className='frame' src={Frame} alt="" />
            <div className="text-main">
                <h1>Margiela Service - <br/>
                правильный выбор!</h1>
                <h6>После ухода любимых брендов не можете найти себе обувь? Мы решим вашу проблему с быстрой доставкой в любую точку страны по выгодной цене</h6>
            </div>
        </div>

        <div className="main-right">
            <img className='background' src={background} alt="" />
            <img  className='shoe' src={shoe} alt="" />


        </div>
      
    </div>
  )
}
