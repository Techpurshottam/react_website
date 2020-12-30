import React from 'react'
import './Intro.css'

function Intro() {
    return (
        <div className="Inro-container">
            <div className="big-img">
               <img className="imgq" src="/images/img-2.png"></img>
            </div>
            <div className="sm-img">
                <img className="imgw" src="/images/img-3.png"></img>
            </div>

            <div className="img-items">
               <h1>Reconnect to your health</h1>

                <div className="sec-1">
                <img className="imgi" src="/images/img-4.png"></img>
                <img className="imgi" src="/images/img-5.png"></img>
                </div>

                <div className="sec-2">
                <img className="imgi" src="/images/img-6.png"></img>
                <img className="imgi" src="/images/img-7.png"></img>
                </div>

                <div className="sec-3">
                <img className="imgi" src="/images/img-8.png"></img>
                <img className="imgi" src="/images/img-9.png"></img>
                </div>

            </div>

            <div className="new-img">
                <img className="n-img" src="/images/img-10.png"></img>
            </div>

        </div>
   
    )
}

export default Intro
