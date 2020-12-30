import React from 'react'
import './Health.css'

function Health() {
    return (
        <div className="health">
            <div className="health-title">
                <h1>Health Info</h1>
            </div>

            <div className="info">

              <div className="info-1">
                  <div className="info-img-1">
                     <img className="imgo" src="/images/img-23.png"></img>
                  </div>
                  <div className="information">
                     <span className="para">Prevention and screening of breast cancer...</span>
                     <p className="hed">12-15-2020</p>
                     <p className="ruf">Breast cancr- or mammary carcinoma - is th most common cancer i</p>
                  </div>
              </div>

              <div className="info-2">
                  <div className="info-img-2">
                     <img className="imgo" src="/images/img-24.png"></img>
                  </div>
                  <div className="information">
                     <span className="para">How to protect yourself from the</span>
                     <p className="hed">12-15-2020</p>
                     <p className="ruf">Breast cancr- or mammary carcinoma - is th most common cancer i</p>
                  </div>
              </div>

              <div className="info-3">
                  <div className="info-img-3">
                     <img className="imgo" src="/images/img-25.png"></img>
                  </div>
                  <div className="information">
                     <span className="para">Discovring Probiotics more effectively</span>
                     <p className="hed">12-15-2020</p>
                     <p className="ruf">Breast cancr- or mammary carcinoma - is th most common cancer i</p>
                  </div>
              </div>

            </div>

            <div className="payment">
                <div className="fad">
                  <span id="p-1">Paiement sécurisé par Datatrans</span>
                  <p>La protection de vos données est la priorité d'Abilis.</p>
                </div>

                <div className="lad">
                    <img id="lad-1" src="/images/img-26.png"></img>
                 </div>
            </div>
           
        </div>
    )
}

export default Health
