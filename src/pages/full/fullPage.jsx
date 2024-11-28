import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import Main from '../../components/main/main';
import Products from '../../components/products/products';
import WhyUs from '../../components/why_us/whyUs';
import Product from '../../components/product/product';
import SizeTable from '../../components/sizeTable/sizeTable';
import Footer from '../../components/footer/footer';
import Features from '../../components/features/features';
import Discounted from '../../components/discounted/discounted';
import Qrcode from '../../components/qrcode/qrcode';


export default function fullPage() {
  return (
    <div>
        <Navbar />
        <section id='main'>

        <Main />
        </section>

        <section id='discounted'>

          <Discounted />


        </section>
        <div id="features">
          <Features />
        </div>

        <section className='qrcode'>
          <Qrcode />
        </section>

        <div id="products">

        <Products />


        </div>

        
       
        
        <WhyUs />

        <section id='sizetable'>
        <SizeTable />



        </section>
      
        <Footer />
      
    </div>
  )
}
