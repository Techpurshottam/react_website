import React from 'react'

function Terms() {
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

            <div className="main-content">
        <div className="row heros-banner term-condition">
          <div className="heros">
            {/*<img src="img/hero-banner.png">*/}
            <h2>Term &amp; Condition</h2>
          </div>
          <span className="cms-oval-shape">      <img src="img/oval-shape.svg" /></span>
          <div className="logo-s">
            <a href="/"><img src="img/logo.jpeg" /></a>
          </div>
        </div>
        <div className="container">
          <div className="heading-sec">
            <h4>The abilis.ch website and the Abilis mobile app</h4>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 texts">
              <h5>1. Scope and declaration of acceptance</h5>
              <p>	The abilis.ch website and the Abilis mobile app are operated and managed by Ofac cooperative society, Rue Pedro-Meylan 7, 1208 Geneva, and 		these General Conditions of Use govern access and use of the abilis website. .ch and the Abilis mobile app.
                By consulting the abilis.ch website or the Abilis mobile app, you agree to be bound by these General Terms and Conditions of Use and you agree to comply with them. If you do not accept these General Terms and Conditions of Use, please refrain from viewing other pages of the abilis.ch website or the Abilis mobile app.<br />
                These General Conditions of Use, as well as the information and documents contained on the abilis.ch website or on the Abilis mobile app, are subject to change at any time and without prior notice.</p>
              <h5>2. Access and availability</h5>
              <p>The user has no right to access the abilis.ch website and the Abilis mobile app, and Ofac does not guarantee uninterrupted availability of this website and this mobile app either. Access to the abilis.ch website or the abilis mobile app may be interrupted in particular in the event of maintenance or improvement work on the site.<br />
                Ofac may block or restrict access to the abilis.ch website or the Abilis mobile app at any time and without prior notice.</p>
              <h5>3. Site content</h5>
              <p>The abilis.ch website and the Abilis mobile app contain features / applications which are operated by Ofac and other features / applications which are operated by third parties. Ofac makes no warranty of any kind, express or implied, as to the accuracy, timeliness or completeness of the information contained on the abilis.ch website or on the Abilis mobile app, in particular information dealing with medical matters, and disclaims all liability for damages caused to the user by the use of such information. The information and documents published on the abilis.ch website and on the Abilis mobile app are therefore transmitted "as is".<br />
                Furthermore, the information contained on the abilis.ch website and on the Abilis mobile app does not represent a recommendation, a proposal or a binding offer intended for the user. </p>
              <h5>4. Lack of responsibility</h5> 
              <p>To the extent permitted by law, Ofac, its directors, employees or contractual partners will in no way be liable to anyone for direct or indirect losses, costs, charges or damages of any kind, contractual or tort, which includes negligence, resulting from the use of the pages of the abilis.ch website or the Abilis mobile app.<br />
                Ofac also does not guarantee that the abilis.ch website and the Abilis mobile app are free from viruses or other harmful elements (Trojans, malicious program codes, etc.) and assumes no liability for any possible damage suffered by the user or by third parties.<br />
                The user's attention is explicitly drawn to the fact that the medical information on the abilis.ch website and on the Abilis mobile app is not intended to provide complete medical information and can in no way replace personal advice. , examination and / or treatment by a doctor, pharmacist or qualified medical personnel.</p>
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

export default Terms
