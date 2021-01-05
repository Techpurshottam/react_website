import React from 'react'
import Slider from "react-slick"
import {Link} from 'react-router-dom'

function Home() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
   

    return (

      <div>

        {/* header */}
        
        <header className="fixed-top">
        <div className="container-fluid">
          <div className="col-md-2 col-xs-2 col-sm-2 logo">	
            <a href="/"><img src="img/logo.jpeg" /></a>
          </div>
          <div className="col-md-3 col-xs-3 col-sm-3">
            <form className="search-form" role="search">
              <div className="form-group md-form mt-0 pt-1 waves-light">
                <i className="fas fa-search" aria-hidden="true" /><input type="text" className="form-control" placeholder="Search" />
              </div>
            </form>
          </div>
          <div className="col-md-7 col-xs-7 col-sm-7">
            <ul className="nav navbar-nav nav-flex-icons ml-auto">
              <li className="nav-item">
               <a className="nav-link how-to-join"> 
               <span className="clearfix d-sm-inline-block">
                 How To Join
                 </span> 
                 </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"> <Link to="/cart"><i className="fa fa-shopping-cart" /> </Link> </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user" /></a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <p>I have an Abilis account.</p>
                  <a className="dropdown-item" href="#">How To Join</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
  
       {/* Main */}

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
              <img src="img/logo.jpeg" />
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
            <div className="text"><h1>The Advantages Of Dr.Farma</h1>
              <p>  You can access your medication plan when you need it for better monitoring of your treatment </p>
              <a href="/"> Learn more</a></div>
          </div>
        </div>
        
       
      
        <div>
          
          <img src="img/slider-banner.png" style={{width:'100%'}} />
          <div className="container">
            <div className="text"><h1>The Advantages Of Dr.Farma</h1>
              <p>  You can access your medication plan when you need it for better monitoring of your treatment </p>
              <a href="/"> Learn more</a></div>
          </div>
        </div>
        

        
        <div>
         
          <img src="img/slider-banner.png" style={{width:'100%'}} />
          <div className="container">
            <div className="text"><h1>The Advantages Of Dr.Farma</h1>
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
      
    </div>


    {/* Footer */}
    <footer>
        <div className="row top-footer">
          <div className="container">
            <div className="col-md-5" style={{verticalAlign: 'middle'}}>
              <div className="sc-kfGgVZ ewBkLQ"><div className="sc-esjQYD cDJIof">Paiement sécurisé par Datatrans</div>
                <div className="sc-kIPQKe hNJTwe">La protection de vos données est la priorité d'Abilis.</div>
              </div>
            </div>
            <div className="col-md-7">
              <Link to="/checkout"><img src="img/payment-card.png" /> </Link>
            </div>
          </div>
        </div>
        <div className="middle-footer">
          <div className="row">
            <div className="container logo">
              <img src="img/logo.jpeg" />
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="col-md-3 col-xs-6">
                <h6>Know us</h6>
                <ul>
                  <li><a href="!#"><Link to="/about">About Dr.Farma</Link></a></li>
                  <li><a href="!#"><Link to="/contact">Contact</Link></a></li>
                </ul>
              </div>
              <div className="col-md-3 col-xs-6">
                <h6>Dr.Farma</h6>
                <ul>
                  <li><a href="!#"><Link to="/wellness">News</Link></a></li>
                  <li><a href="!#"><Link to="/singleproduct">How to join</Link></a></li>
                  <li><a href="!#"><Link to="/advantage">Advantages</Link></a></li>
                  <li><a href="!#"><Link to="/faq">Faq</Link></a></li>
                </ul>
              </div>
              <div className="col-md-3 col-xs-6">
                <h6>Legal Notice</h6>
                <ul>
                  <li><a href="!#"><Link to="/terms">Term and Conditions</Link></a></li>
                  <li><a href="!#"><Link to="/privacy">Confidentiality and data protection</Link></a></li>
                </ul>
              </div>
              <div className="col-md-3 col-xs-6">
                <h6>Health professionals</h6>
                <ul>
                  <li><a href="!#">To become partner</a></li>
                  <li><a href="!#"><Link to="/login">To log in</Link></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="third-sec-footer">
          <div className="container">
            <div className="col-md-7 col-xs-12 subscriber">
              <p>Stay informed with our Dr.Farma newsletter <a href="/" className="register">
              <Link to="/register">Register</Link></a></p>
            </div>
            <div className="col-md-5 col-xs-12 social-sec">
              <p>Follow Us </p>
              <span><ul className="social-icon">
                  <li><a href="/"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="/"><i className="fab fa-twitter" /></a></li>
                  <li><a href="/"><i className="fab fa-instagram" /></a></li>
                  <li><a href="/"><i className="fab fa-linkedin-in" /></a></li>
                </ul></span></div>	
          </div>
        </div>
        <div className="last-sec">
          <div className="container">
            <b>The security of your data is guaranteed.</b>
            <p>Protecting your personal data is one of Abilis' priorities. The identification and authentication system put in place, based on the use of an electronic identifier certified by the Confederation, guarantees that only you can access your sensitive data. Located in Switzerland, the secure datacenters that host this data benefit from certifications attesting to compliance with legislation on IT security and data protection.</p>
          </div>
          <ul className="fot-logo-sec">
            <li><a href="/"><img src="img/fot-logo-1.png" /></a></li>
            <li><a href="/"><img src="img/fot-logo-2.png" /></a></li>
            <li><a href="/"><img src="img/fot-logo-3.png" /></a></li>
          </ul>
        </div>
        <div className="copyright">
          <p>© drro.ro </p>
        </div>
      </footer>

    </div>

    )
}

export default Home
