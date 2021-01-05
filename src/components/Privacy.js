import React from 'react'

function Privacy() {
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
        <div className="row heros-banner confidentialite">
          <div className="heros">
            {/*<img src="img/hero-banner.png">*/}
            <h2>Confidentiality and data protection</h2>
          </div>
          <span className="cms-oval-shape">      <img src="img/oval-shape.svg" /></span>
          <div className="logo-s">
            <a href="/"><img src="img/logo.jpeg" /></a>
          </div>
        </div>
        <div className="container">
          <div className="heading-sec">
            <h4>Privacy and data protection policy for the abilis.ch website and the Abilis mobile app</h4>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 texts">
              <h5>1. By which company are the abilis.ch website and the Abilis mobile app operated?</h5>
              <p>	The abilis.ch website and the Abilis mobile app are operated and managed by Ofac cooperative society, Rue Pedro-Meylan 7, 1208 Geneva.
                The security and proper use of your personal data, which may include medical data, is a constant concern of Ofac, as is respect for your data protection rights. <br />
                Ofac has three certifications in terms of security and data protection: ISO 27001, for the management of information systems security, GoodPriv @ cy and OCPD for the management of data protection. <br />
                The purpose of this "Privacy and Data Protection Policy" is to define the type of personal data collected through the abilis.ch website and the Abilis mobile app and the procedures for collection, processing, storage, transfer and use of your personal and sensitive data. <br />
                If you do not agree to this “Privacy and Data Protection Policy”, please refrain from using the abilis.ch website and the Abilis mobile app.
                If you cannot find an answer to your questions in this document, you can contact privacy@abilis.ch.</p>
              <h5>2.  What data is collected and processed and for what purpose?</h5>
              <p>In general, we only process the personal data of our users to the extent necessary to provide a functional website and mobile app and to provide the services provided on the abilis.ch website and on the Abilis mobile app.<br />
                When you visit the abilis.ch website or the Abilis mobile app, our web server automatically records certain information relating to your visit (in particular your IP address, the type of browser used, the web pages consulted, including the date and duration of your visit). We also collect personal data that you spontaneously provide via the abilis.ch website or via the Abilis mobile app. This is the case when you complete an online form and when providing your contact details (surname, first name, gender, address, e-mail address, telephone number), when you subscribe to an electronic newsletter or when - and only if - you have expressly consented to share your medical data by accepting the form entitled "Declaration of consent",</p>
              The data processed and collected are as follows:
              <ul>
                <li>Your identity data: name, first name, sex, date of birth;</li>
                <li>The email address with which you would like us to correspond with you;</li>
                <li>Medical data shared by healthcare providers in the ABILIS network;</li>
                <li>Cookies (see number 4 below);</li>
                <li>Other information collected, such as data transmitted during the delivery of an identifier (data known as “IDP membership”, telephone number, etc.).</li>
              </ul>
              The main purpose of data collection and processing relates to the services provided on the abilis.ch website or on the Abilis mobile app, which consist in particular of making it easier for your healthcare providers to manage and share your medical data. <p />
              The secondary purposes are as follows:
              <ul>
                <li>allow us to communicate with you by e-mail, to inform you,</li>
                <li>collection and processing of data in connection with other purposes, such as purchases on the webshop, use of CDSS (Clinical Decision Support System). </li></ul>
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

export default Privacy
