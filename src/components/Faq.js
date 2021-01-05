import React from 'react'

function Faq() {
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

            <div className="main-content faaq">
        <div className="row heros-banner faqs">
          <div className="heros">
            {/*<img src="img/hero-banner.png">*/}
            <h2>FAQ - Gernal</h2>
          </div>
          <span className="cms-oval-shape">      <img src="img/oval-shape.svg" /></span>
          <div className="logo-s">
            <a href="/"><img src="img/logo.jpeg" /></a>
          </div>
        </div>
        <div className="container">
          <div className="heading-sec">
            <p>the abilis.ch website and the Abilis mobile app</p>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 texts">
              <section className="faq-section">
                <div className="container">
                  <div className="row">
                    {/* ***** FAQ Start ***** */}
                    <div className="col-md-12">
                    </div>
                    <div className="col-md-12">
                      <div className="faq" id="accordion">
                        <div className="card">
                          <div className="card-header" id="faqHeading-1">
                            <div className="mb-0">
                              <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-1" data-aria-expanded="true" data-aria-controls="faqCollapse-1">
                                <span className="badge">1</span>What is Lorem Ipsum?
                              </h5>
                            </div>
                          </div>
                          <div id="faqCollapse-1" className="collapse" aria-labelledby="faqHeading-1" data-parent="#accordion">
                            <div className="card-body">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="faqHeading-2">
                            <div className="mb-0">
                              <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-2" data-aria-expanded="false" data-aria-controls="faqCollapse-2">
                                <span className="badge">2</span> Where does it come from?
                              </h5>
                            </div>
                          </div>
                          <div id="faqCollapse-2" className="collapse" aria-labelledby="faqHeading-2" data-parent="#accordion">
                            <div className="card-body">
                              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="faqHeading-3">
                            <div className="mb-0">
                              <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-3" data-aria-expanded="false" data-aria-controls="faqCollapse-3">
                                <span className="badge">3</span>Why do we use it?
                              </h5>
                            </div>
                          </div>
                          <div id="faqCollapse-3" className="collapse" aria-labelledby="faqHeading-3" data-parent="#accordion">
                            <div className="card-body">
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.</p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="faqHeading-4">
                            <div className="mb-0">
                              <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-4" data-aria-expanded="false" data-aria-controls="faqCollapse-4">
                                <span className="badge">4</span> Where can I get some?
                              </h5>
                            </div>
                          </div>
                          <div id="faqCollapse-4" className="collapse" aria-labelledby="faqHeading-4" data-parent="#accordion">
                            <div className="card-body">
                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="faqHeading-5">
                            <div className="mb-0">
                              <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-5" data-aria-expanded="false" data-aria-controls="faqCollapse-5">
                                <span className="badge">5</span> What is Lorem Ipsum?
                              </h5>
                            </div>
                          </div>
                          <div id="faqCollapse-5" className="collapse" aria-labelledby="faqHeading-5" data-parent="#accordion">
                            <div className="card-body">
                              <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="faqHeading-6">
                            <div className="mb-0">
                              <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-6" data-aria-expanded="false" data-aria-controls="faqCollapse-6">
                                <span className="badge">6</span> Where does it come from?
                              </h5>
                            </div>
                          </div>
                          <div id="faqCollapse-6" className="collapse" aria-labelledby="faqHeading-6" data-parent="#accordion">
                            <div className="card-body">
                              <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="faqHeading-7">
                            <div className="mb-0">
                              <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-7" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                                <span className="badge">7</span> Why do we use it?
                              </h5>
                            </div>
                          </div>
                          <div id="faqCollapse-7" className="collapse" aria-labelledby="faqHeading-7" data-parent="#accordion">
                            <div className="card-body">
                              <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>	
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

export default Faq
