import React from 'react'
import data from './products.json'
import './products.css'
import { Link } from 'react-router-dom'

export default function products() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This will make the scroll smooth
    });
  }



  return (
    <div className='productsPage'>
        <h1 className='titlee'>Товары в наличии на складе <b>в Москве</b></h1>
        <div className="catalog">

        {data.map((product) => (
            <div className='product' key={product.id}>
              <img src={product.img} alt="" />
                <h1 className='title'>{product.title}</h1>
                <h4 className='color'>{product.color}</h4>

                <div className="prices">
                <h5 className='discounted_price'>${product.discounted_price}</h5>
                <h5 className='real_price'>${product.real_price}</h5>


                </div>
                <Link onClick={scrollToTop} className='add-to-cart' to={`/product/${product.id}`}>Оформить заказ!    <i class="fa-solid fa-paper-plane"></i></Link>
               

            </div>
        ))}



        </div>
       
      
    </div>
  )
}
