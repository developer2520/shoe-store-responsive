import React from 'react'
import './features.css'
import Number1 from '../../assets/01png.png'
import Number2 from '../../assets/02png.png'
import Number3 from '../../assets/03png.png'
import Number4 from '../../assets/04png.png'
import Vektor2 from '../../assets/vektor2.png'

export default function features() {
  return (
    <div className='features-container'>
        <h1 className="features-title">Оформление заказа товаров с POZION</h1>
        <div className="features-box">
            <div className="box-feature">

            <div className="top">
                <img src={Number1} alt="" />
                {/* <img src={Vektor2} alt="" /> */}
            </div>
            <h3>Оформление заказа займёт не более 5 минут (мы помогаем найти/подобрать товар по фото, определиться с размером)</h3>


            </div>
            <div className="box-feature">

            <div className="top">
                <img src={Number2} alt="" />
                {/* <img src={Vektor2} alt="" /> */}
            </div>
            <h3>Выкуп товара в день оплаты (выкупы происходят круглосуточно).</h3>


            </div>
            <div className="box-feature">

            <div className="top">
                <img src={Number3} alt="" />
                {/* <img src={Vektor2} alt="" /> */}
            </div>
            <h3>По просьбе клиентов мы предоставляем дополнительные фото/видео интересующей пары</h3>


            </div>
            <div className="box-feature">

            <div className="top">
                <img src={Number4} alt="" />
                {/* <img src={Vektor2} alt="" /> */}
            </div>
            <h3> Каждый клиент получает от нас трек-номер, по которому сам может отслеживать посылку</h3>


            </div>
           
           
        </div>
      
    </div>
  )
}
