import React from 'react'
import './product.css'
import data from '../products/products.json'
import { useParams } from 'react-router-dom'

export default function prouct() {
    const { productId } = useParams()
    const product = data.find((item) => String(item.id) === productId)

    if (!product) {
      return <h1>Product not found nigga </h1>
    }
  return (
    <div className='productContainer'>
      <div className="left">
        <div className="productImageContainer">

        <img className='productImage' src={product.img} alt="" />

        </div>
    

      </div>
      <div className="right">
      <h1>{product.title}</h1>
      <h3>{product.description}</h3>
      <div className="prices">
        <h1 className='discounted_price'>  ${product.discounted_price}</h1>
        <h1 className='real_price'>${product.real_price} </h1>
      </div>

      <a className='buyButton' href="https://abboskhonov.t.me">Сделать заказ</a>


      </div>
      
   
      
    </div>
  )
}
