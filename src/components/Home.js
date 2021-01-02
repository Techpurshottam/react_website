import React from 'react'
import Slider from "react-slick";

function Home() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
   

    return (
        
      <div className="main-content">
      <div className="row hero-banner">
        <div className="hero">
          <img src="img/hero-banner.png" />
        </div>
        <span className="cms-oval-shape">      <img src="img/oval-shape.svg" /></span>
      </div>
      <div className="second-sec">
        <div className="container">
          <div className="section-content">
            <div className="middle-logo">
              <img src="img/logo.png" />
            </div>
            <h3 className="heading">Reconnect to your health.</h3>
            <div className="col-md-6 health-sec">
              <div className="content first-sec">
                <div className="two-sec">
                  <a href="/"><img src="img/bkg_tuile-renouvellements.png" /></a>
                </div>
                <a href="/"><h3 className="title">Renewals</h3></a>
                <div className="icon">
                  <a href="/"><img src="img/renewals.png" /></a>
                </div>
              </div>		
            </div>
            <div className="col-md-6 health-sec">
              <div className="content medication-sec">
                <div className="two-sec">
                  <a href="/"><img src="img/medication.png" /></a>
                </div>
                <a href="/"><h3 className="title">Medication</h3></a>
                <div className="icon">
                  <a href="/"><img src="img/medi-icon.png" /></a>
                </div>
              </div>		
            </div>
            <div className="col-md-6 health-sec">
              <div className="content alle-sec">
                <div className="two-sec">
                  <a href="/"><img src="img/allegeria.png" /></a>
                </div>
                <a href="/"><h3 className="title">Allergies</h3></a>
                <div className="icon">
                  <a href="/"><img src="img/alle-icon.png" /></a>
                </div>
              </div>		
            </div>
            <div className="col-md-6 health-sec">
              <div className="content tele-sec">
                <div className="two-sec">
                  <a href="/"><img src="img/telemo.png" /></a>
                </div>
                <a href="/"><h3 className="title">Telemedecine</h3></a>
                <div className="icon">
                  <a href="/"><img src="img/tele-icon.png" /></a>
                </div>
              </div>		
            </div>
            <div className="col-md-6 health-sec">
              <div className="content invo-sec">
                <div className="two-sec">
                  <a href="/"><img src="img/irvoices.png" /></a>
                </div>
                <a href="/"><h3 className="title">Invoices</h3></a>
                <div className="icon">
                  <a href="/"><img src="img/invo-icon.png" /></a>
                </div>
              </div>		
            </div>
            <div className="col-md-6 health-sec">
              <div className="content online-order-sec">
                <div className="two-sec">
                  <a href="/"><img src="img/order-online.png" /></a>
                </div>
                <a href="/"><h3 className="title">Order Online</h3></a>
                <div className="icon">
                  <a href="/"><img src="img/order-icon.png" /></a>
                </div>
              </div>		
            </div>	
          </div>
        </div>
      </div>

      <div className="slideshow-container">
        <Slider {...settings}>
          
        <div>
          
          <img src="img/slider-banner.png" style={{width:'100%'}} />
          <div className="container">
            <div className="text"><h1>The Advantages Of Abbils</h1>
              <p>  You can access your medication plan when you need it for better monitoring of your treatment </p>
              <a href="/"> Learn more</a></div>
          </div>
        </div>
        
       
      
        <div>
          
          <img src="img/slider-banner.png" style={{width:'100%'}} />
          <div className="container">
            <div className="text"><h1>The Advantages Of Abbils</h1>
              <p>  You can access your medication plan when you need it for better monitoring of your treatment </p>
              <a href="/"> Learn more</a></div>
          </div>
        </div>
        

        
        <div>
         
          <img src="img/slider-banner.png" style={{width:'100%'}} />
          <div className="container">
            <div className="text"><h1>The Advantages Of Abbils</h1>
              <p>  You can access your medication plan when you need it for better monitoring of your treatment </p>
              <a href="/"> Learn more</a></div>
          </div>
        </div>
       
        
        </Slider>
      </div>

     



      {/*---------------------------- Online Order Start --------------------------*/}
      <div className="order-sec">
        <div className="container">
          <div className="heading">
            <h3>Order in line</h3>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6 online-order-col">
            <a href="/"><img src="img/health.png" /></a>
            <h5> Health</h5>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6 online-order-col">
            <a href="/"><img src="img/well-being.png" /></a>
            <h5> Well-Being</h5>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6 online-order-col">
            <a href="/"><img src="img/sexuality.png" /></a>
            <h5> Sexuality</h5>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6 online-order-col">
            <a href="/"><img src="img/natural.png" /></a>
            <h5> Natural Medicine</h5>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6 online-order-col">
            <a href="/"><img src="img/nutrition.png" /></a>
            <h5> Nutrition &amp; Sport</h5>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6 online-order-col">
            <a href="/"><img src="img/beauty.png" /></a>
            <h5> Beauty &amp; Cosmetic</h5>
          </div>  
          <div className="col-md-3 col-sm-3 col-xs-6 online-order-col">
            <a href="/"><img src="img/first-aid.png" /></a>
            <h5> First Aid &amp; Hygiene</h5>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6 online-order-col">
            <a href="/"><img src="img/pregnancy.png" /></a>
            <h5> Pregnancy, baby and child</h5>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6 online-order-col">
            <a href="/"><img src="img/house.png" /></a>
            <h5> House</h5>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6 online-order-col">
            <a href="/"><img src="img/vete.png" /></a>
            <h5> Veterinary</h5>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6 online-order-col">
            <a href="/"><img src="img/medical.png" /></a>
            <h5> Medical Material</h5>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6 online-order-col">
            <a href="/"><img src="img/covid.png" /></a>
            <h5> COVID-19</h5>
          </div>  	
        </div>
      </div>
      {/*---------------------------- Online Order End --------------------------*/}
      <div className="health-sec">
        <div className="container">
          <div className="heading">
            <h3>Health Info</h3>
          </div>	
          <div className="col-md-4 col-sm-4 col-xs-12 post">
            <div className="post-sec">
              <div className="col-md-5 img-sec">
                <img src="img/first-post.png" />
              </div>
              <div className="col-md-7 content-sec">
                <h6>Prevention and screening  of breast cancer... </h6>
                <p className="date">12-15-2020</p>
                <p className="Description">Breast cancr- or mammary carcinoma - is th most common cancer i</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12 post">
            <div className="post-sec">
              <div className="col-md-5 img-sec">
                <img src="img/sec-post.png" />
              </div>
              <div className="col-md-7 content-sec">
                <h6>How to protect yourself from the</h6>
                <p className="date">12/15/2020</p>
                <p className="Description">Breast cancr- or mammary carcinoma - is th most common cancer i</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12 post">
            <div className="post-sec">
              <div className="col-md-5 img-sec">
                <img src="img/third-post.png" />
              </div>
              <div className="col-md-7 content-sec">
                <h6>Discovring Probiotics more effectively</h6>
                <p className="date">12/15/2020</p>
                <p className="Description">Breast cancr- or mammary carcinoma - is th most common cancer i</p>
              </div>
            </div>
          </div>
        </div>
      </div>	
      {/*    <span class="cms-oval-shapes">  
              <img src="img/oval-shape.svg">
          </span>

          
              <!--<img src="img/hero-banner.png">*/}
      {/*	<span class="cms-oval-shape">      <img src="img/oval-shape.svg"></span>*/}
    </div>
    )
}

export default Home
