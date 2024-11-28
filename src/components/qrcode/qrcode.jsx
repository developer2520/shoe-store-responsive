import React from 'react'
import './qrcode.css'
import QrcodePng from '../../assets/Vector.png'
import WhiteShoe from '../../assets/white-shoe.png'

export default function qrcode() {
    return (
        <div className='qr-code-container'>
            <div className="left-side">
                <h1>Рассчитай стоимость
                    заказа прямо на сайте</h1>
                <input type="text" placeholder='Цена на товар в юанях' />
                <div className="submit-form">
                    <button>
                        Обувь

                    </button>
                    <button>
                        vv

                    </button>
                </div>
                <h1>Итоговая стоимость: <b>3500₽</b></h1>
                <h6>С учётом доставки</h6>

            </div>

            <div className="right-side">
                <div className="first">
                    <h1>Подходит цена? <br />
                        - скорее заказывай!</h1>

                    <h6>Выбирайте товары в POZION или покупайте <br /> прямо с нашего склада в Москве</h6>

                    <div className="qr-code-container-img">
                        <img src={QrcodePng} alt="" />

                    </div>

                </div>
                <div className="second">
                    <img src={WhiteShoe} alt="" />      

                </div>

            </div>

        </div>
    )
}
