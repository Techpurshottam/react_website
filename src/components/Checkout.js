import React from 'react'
import './Checkout.css'

function Checkout() {
    return (
        <div>
            {/* Header */}

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

            {/* Main */}

            <div className="main-content checkout">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="container">
                <form action="/action_page.php">
                  <div className="row">
                    <div className="col-md-6 col-xs-12">
                      <h3>Billing Address</h3>
                      <label htmlFor="fname"><i className="fa fa-user" /> Full Name</label>
                      <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                      <label htmlFor="email"><i className="fa fa-envelope" /> Email</label>
                      <input type="text" id="email" name="email" placeholder="john@example.com" />
                      <label htmlFor="adr"><i className="fa fa-address-card-o" /> Address</label>
                      <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                      <label htmlFor="city"><i className="fa fa-institution" /> City</label>
                      <input type="text" id="city" name="city" placeholder="New York" />
                      <div className="row">
                        <div className="col-50">
                          <label htmlFor="state">State</label>
                          <input type="text" id="state" name="state" placeholder="NY" />
                        </div>
                        <div className="col-50">
                          <label htmlFor="zip">Zip</label>
                          <input type="text" id="zip" name="zip" placeholder={10001} />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <h3>Payment</h3>
                      <label htmlFor="fname">Accepted Cards</label>
                      <div className="icon-container">
                        <i className="fa fa-cc-visa" style={{color: 'navy'}} />
                        <i className="fa fa-cc-amex" style={{color: 'blue'}} />
                        <i className="fa fa-cc-mastercard" style={{color: 'red'}} />
                        <i className="fa fa-cc-discover" style={{color: 'orange'}} />
                      </div>
                      <label htmlFor="cname">Name on Card</label>
                      <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                      <label htmlFor="ccnum">Credit card number</label>
                      <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                      <label htmlFor="expmonth">Exp Month</label>
                      <input type="text" id="expmonth" name="expmonth" placeholder="September" />
                      <div className="row">
                        <div className="col-50">
                          <label htmlFor="expyear">Exp Year</label>
                          <input type="text" id="expyear" name="expyear" placeholder={2018} />
                        </div>
                        <div className="col-50">
                          <label htmlFor="cvv">CVV</label>
                          <input type="text" id="cvv" name="cvv" placeholder={352} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <label>
                    <input type="checkbox" defaultChecked="checked" name="sameadr" /> Shipping address same as billing
                  </label>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <aside>
                <div className="summary">
                  <div className="summary-total-items"><span className="total-items" /> <h3>Your Order</h3></div>
                  <div className="summary-subtotal">
                    <div className="subtotal-title">Subtotal</div>
                    <div className="subtotal-value final-value" id="basket-subtotal">130.00</div>
                  </div>
                  <div className="summary-shipping">
                    <div className="shipping-title">Shipping</div>
                    <div className="shipping-value final-value" id="basket-subtotal">30.00</div>
                  </div>
                  <div className="summary-total">
                    <div className="total-title">Total</div>
                    <div className="total-value final-value" id="basket-total">160.00</div>
                  </div>
                </div>
              </aside>
              <div className="term-condin">
                <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
              </div>
              <input type="submit" defaultValue="Place Order" className="btn" />
              <div className="summary-checkout">
                <button className="checkout-cta">Proceed to Checkout</button>
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

export default Checkout
