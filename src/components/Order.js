import React from 'react'
import './Order.css'

function Order() {
    return (
        <div className="order">
            <div className="order-title">
                <h1>Order in line</h1>
            </div>

            <div className="order-container">
             <div className="part-1">
              <img className="imgh" src="/images/img-11.png"></img>
              <img className="imgh" src="/images/img-12.png"></img>
              <img className="imgh" src="/images/img-13.png"></img>
              <img className="imgh" src="/images/img-14.png"></img>
             </div>

             <div className="part-2">
              <img className="imgh" src="/images/img-15.png"></img>
              <img className="imgh" src="/images/img-16.png"></img>
              <img className="imgh" src="/images/img-17.png"></img>
              <img className="imgh" src="/images/img-18.png"></img>
             </div>

             <div className="part-3">
              <img className="imgh" src="/images/img-19.png"></img>
              <img className="imgh" src="/images/img-20.png"></img>
              <img className="imgh" src="/images/img-21.png"></img>
              <img className="imgh" src="/images/img-22.png"></img>
             </div>

            </div>
            
        </div>
    )
}

export default Order
