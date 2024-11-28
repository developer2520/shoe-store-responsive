import React from 'react';
import Iphone from '../../assets/iPhone 15.png';
import './discounted.css'

export default function discounted() {
  return (
    <div className='discountedPage'>
      <div className="section1 section">
        <h1>Акция на первый заказ!</h1> 
        <br /><br />
        <h6>  <b>Бесплатная доставка</b>  заказанного товара через СДЭК <br /> в любой регион РФ</h6>
        <img className='iphone' src={Iphone} alt="" />
      </div>
      <div className="section2 section">
      <div className="card">
        <h1>Ассортимент Poizon</h1>
        <h5>У нас есть огромный ассортимент товаров, которые уже находятся на нашем складе в Москве</h5>
      </div>

      <div className="card">
        <h1>Ассортимент Poizon</h1>
        <h5>У нас есть огромный ассортимент товаров, которые уже находятся на нашем складе в Москве</h5>
      </div>
      <div className="card">
        <h1>Ассортимент Poizon</h1>
        <h5>У нас есть огромный ассортимент товаров, которые уже находятся на нашем складе в Москве</h5>
      </div>
     
      </div>

      {/* <div className="section3 section">
      <div className="card">
        <h1>Ассортимент Poizon</h1>
        <h5>У нас есть огромный ассортимент товаров, которые уже находятся на нашем складе в Москве</h5>
      </div>
        
      </div> */}
      
        
      
    </div>
  )
}
