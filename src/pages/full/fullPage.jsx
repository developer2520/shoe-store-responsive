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


export default function fullPage() {
  return (
    <div>
        <Navbar />
        <section id='main'>

        <Main />
        </section>

        <div className="products">

        <Products />


        </div>

        <div id="features">
          <Features />
        </div>
       
        
        <WhyUs />
        <SizeTable />
        <Footer />
      
    </div>
  )
}
