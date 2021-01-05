import React from 'react'
import Slider from "react-slick"

function SingleProduct() {


  var settings2 = {
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
                <a className="nav-link how-to-join"> <span className="clearfix d-sm-inline-block">How To Join</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"> <i className="fa fa-shopping-cart" /> </a>
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

            {/* main */}

            <div className="main-content">
        {/*<div class="row heros-banner confidentialite">
			<div class="heros">
				<!--<img src="img/hero-banner.png">*/}
        {/*<h2>Wellness</h2>
				</div>
			<span class="cms-oval-shape">      <img src="img/oval-shape.svg"></span>
			<!--<div class="logo-s">
			<a href="/"><img src="img/logo.png"></a>
			
			</div>*/}
        {/*</div>*/}
        <div className="container">
          {/*<div class="pro-heading">
		<h4>Wellness</h4>
		</div>
		<div class="product-show-option">
			<div class="row">
				<div class="col-lg-6 col-md-6">
					<div class="select-option">
						<select name="cars" id="cars">
							<option value="volvo">Brand</option>
							<option value="saab">Saab</option>
							<option value="opel">Opel</option>
							<option value="audi">Audi</option>
						</select>

					</div>
				</div>
		<div class="col-lg-6 col-md-6">
				<p>28 products</p>
				</div>
			</div>
		</div>


					<div class="product-show-short">
			<div class="row">
				
		<div class="col-lg-6 col-md-6">
				<p><button type="button">Reset Dafault</button></p>
				</div>
				
				<div class="col-lg-6 col-md-6 text-right">
					<div class="select-option">
					sort by:
						<select name="cars" id="sort">
							<option value="volvo">Brand</option>
							<option value="saab">Saab</option>
							<option value="opel">Opel</option>
							<option value="audi">Audi</option>
						</select>

					</div>
				</div>
			</div>
		</div>*/}
          <div className="row products single">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="single-product">
                <div className="slideshow-container">
                  <Slider {...settings2}>
                  <div >
                    <img src="img/1_256.jpg" style={{width: '100%'}} />
                  </div>
                  <div >
                    <img src="img/1_256.jpg" style={{width: '100%'}} />
                  </div>
                  <div >
                    <img src="img/1_256.jpg" style={{width: '100%'}} />
                  </div>
                  </Slider>
                </div>

              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="single-product-content">
                <h4 className="product-heading">Product Title</h4>
                <p className="price">$ 20</p>
                <p className="quality">Quality</p>
                <form>
                  <div className="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                  <input type="number" id="number" defaultValue={0} />
                  <div className="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                </form>
                <p className="product-description">After a hard day or intense physical exertion, there is nothing better than this Weleda Arnica organic massage oil. Enriched with vegetable oils, it is suitable for sporty recreation . It provides permanent relief, its light texture guarantees quick and easy application.</p>
                <button type="button" className="addtocart" value="Add To Cart">Add to Cart</button>
              </div>
            </div>
            <div className="container">
              <div className="tab">
                <button className="tablinks" onclick="openCity(event, 'Description')" id="defaultOpen">Description</button>
                <button className="tablinks" onclick="openCity(event, 'Details')">Details</button>
              </div>
              <div id="Description" className="tabcontent">
                <p>After a hard day or intense physical exertion, there is nothing better than this Weleda Arnica organic massage oil. Enriched with vegetable oils, it is suitable for sporty recreation . It provides permanent relief, its light texture guarantees quick and easy application.</p>
              </div>
              <div id="Details" className="tabcontent">
                <p>After a hard day or intense physical exertion, there is nothing better than this Weleda Arnica organic massage oil. Enriched with vegetable oils, it is suitable for sporty recreation . It provides permanent relief, its light texture guarantees quick and easy application.</p> 
              </div>
            </div>
            <div className="container">
              <div className="related-product-heading">
                <h4>Related Products</h4>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-6">
                <div className="product">
                  <a href="/"><img src="img/1_256.jpg" /></a>
                  <div className="product-content">
                    <a href="/"><h5 className="product-title">Product Title</h5></a>
                    <p className="price">$ 20</p>
                    <button type="button" className="addtocart" value="Add To Cart">Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-6">
                <div className="product">
                  <a href="/"><img src="img/1_256.jpg" /></a>
                  <div className="product-content">
                    <a href="/"><h5 className="product-title">Product Title</h5></a>
                    <p className="price">$ 20</p>
                    <button type="button" className="addtocart" value="Add To Cart">Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-6">
                <div className="product">
                  <a href="/"><img src="img/1_256.jpg" /></a>
                  <div className="product-content">
                    <a href="/"><h5 className="product-title">Product Title</h5></a>
                    <p className="price">$ 20</p>
                    <button type="button" className="addtocart" value="Add To Cart">Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-6">
                <div className="product">
                  <a href="/"><img src="img/1_256.jpg" /></a>
                  <div className="product-content">
                    <a href="/"><h5 className="product-title">Product Title</h5></a>
                    <p className="price">$ 20</p>
                    <button type="button" className="addtocart" value="Add To Cart">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* footer */}

            <footer>
        <div className="row top-footer">
          <div className="container">
            <div className="col-md-5" style={{verticalAlign: 'middle'}}>
              <div className="sc-kfGgVZ ewBkLQ"><div className="sc-esjQYD cDJIof">Paiement sécurisé par Datatrans</div>
                <div className="sc-kIPQKe hNJTwe">La protection de vos données est la priorité d'Abilis.</div>
              </div>
            </div>
            <div className="col-md-7">
              <img src="img/payment-card.png" />
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
                  <li><a href="/">About Dr.Farma</a></li>
                  <li><a href="/">Contact</a></li>
                </ul>
              </div>
              <div className="col-md-3 col-xs-6">
                <h6>Dr.Farma</h6>
                <ul>
                  <li><a href="/">News</a></li>
                  <li><a href="/">How to join</a></li>
                  <li><a href="/">Advantages</a></li>
                  <li><a href="/">Faq</a></li>
                </ul>
              </div>
              <div className="col-md-3 col-xs-6">
                <h6>Legal Notice</h6>
                <ul>
                  <li><a href="/">Term and Conditions</a></li>
                  <li><a href="/">Confidentiality and data protection</a></li>
                </ul>
              </div>
              <div className="col-md-3 col-xs-6">
                <h6>Health professionals</h6>
                <ul>
                  <li><a href="/">To become partner</a></li>
                  <li><a href="/">To log in</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="third-sec-footer">
          <div className="container">
            <div className="col-md-7 col-xs-12 subscriber">
              <p>Stay informed with our Dr.Farma newsletter <a href="/" className="register">Register</a></p>
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

export default SingleProduct
