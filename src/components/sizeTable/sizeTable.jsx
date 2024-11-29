import React from 'react'
import './sizeTable.css'
import Table from '../../assets/table.png'
import Picture01 from '../../assets/01png.png'
import Line from '../../assets/line.png'
import QoraTufli from '../../assets/qora-tufli.png'
import Vektor from '../../assets/vektor-chiziq.png'

export default function sizeTable() {
  return (
    <>
    <h1 className='main-title'>Как правильно подобрать размер обуви?</h1>
    <div className='table-container'>
        
        
        <div className="one">
            <img src={Table} alt="" />
        </div>
        <div className="two">
            
            <div className="minibox">
                <img src={Picture01} alt="" />
                <h3>Поставь ногу на лист бумаги так, чтоб пятка касалась стены</h3>

            </div>
            <img className='line' src={Line} alt="" />
            <div className="minibox">
                <img src={Picture01} alt="" />
                <h3>Поставь ногу на лист бумаги так, чтоб пятка касалась стены</h3>

            </div>
            <img className='line' src={Line} alt="" />
            <div className="minibox">
                <img src={Picture01} alt="" />
                <h3>Поставь ногу на лист бумаги так, чтоб пятка касалась стены</h3>

            </div>
            <img className='line' src={Line} alt="" />
            <div className="minibox">
                <img src={Picture01} alt="" />
                <h3>Поставь ногу на лист бумаги так, чтоб пятка касалась стены</h3>

            </div>
            
        </div>

        <div className="three">
            <img className='qoraTufli' src={QoraTufli} alt="" />
            <img className='vektor' src={Vektor} alt="" />

        </div>
      
    </div>
    </>
  )
}
