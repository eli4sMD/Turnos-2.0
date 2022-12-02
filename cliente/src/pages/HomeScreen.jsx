import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavBar } from '../ui/NavBar'
import { TodosScreen } from './TodosScreen'


export const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <div>
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta charSet="utf-8" />
          <title>Turnos.</title>
          {/* SEO Meta Tags*/}
          <meta name="description" content="Around - Multipurpose Bootstrap Template" />
          <meta name="keywords" content="bootstrap, business, consulting, coworking space, services, creative agency, dashboard, e-commerce, mobile app showcase, multipurpose, product landing, shop, software, ui kit, web studio, landing, html5, css3, javascript, gallery, slider, touch, creative" />
          <meta name="author" content="Createx Studio" />
          {/* Viewport*/}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* Favicon and Touch Icons*/}
          <link rel="apple-touch-icon" sizes="180x180" href="https://around.createx.studio/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="https://around.createx.studio/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="https://around.createx.studio/favicon-16x16.png" />
          <link rel="manifest" href="https://around.createx.studio/site.webmanifest" />
          <link rel="mask-icon" color="#5bbad5" href="https://around.createx.studio/safari-pinned-tab.svg" />
          <meta name="msapplication-TileColor" content="#766df4" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="stylesheet" href="/public/css/Turnos.css" />
          <main className="page-wrapper">
            {/* Navbar Floating light for Index page only*/}
            {/* Remove "navbar-sticky" class to make navigation bar scrollable with the page.*/}
            {/* Page content*/}
            {/* Intro*/}
            <section className=" align-items-center position-relative bg-size-cover bg-position-center min-vh-100 overflow-hidden pt-6 pb-lg-5" style={{backgroundColor: 'rgb(66, 142, 223)'}}>
              <section className="py-1 py-md-6 pb-lg-1 mb-2 " style={{backgroundColor: 'rgb(66, 142, 223)'}}>
                <div className="container pb-3 pt-4 pb-lg-2 bg-light border rounded-3">
                  <div className="row justify-content-center mb-4 pb-2">
                    <div className="col-xl-6 col-lg-7 col-md-8">
                      <h2 className="h1 mb-4 text-center">Escoja una<span className="bg-faded-primary rounded text-primary px-3 py-2">especialidad</span></h2>
                      <p className="text-muted text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatem placeat impedit
                        cupiditate culpa ducimus nemo quae aperiam consequuntur voluptate, voluptatum reiciendis modi praesentium aspernatur sit id 
                        quos commodi mollitia!</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <ul className="nav nav-tabs media-tabs justify-content-center justify-content-lg-start" role="tablist" style={{width: '800px', height: '201px', 'margin-left': '260px'}}>
                        <li className="nav-item mb-3" style={{width: '16.5rem'}}>
                          <a className="nav-link me-2 active" href="#pediatria" data-bs-toggle="tab" role="tab">
                            <div className="d-flex align-items-center"><img className="rounded" src="img/icon/pediatra.png" alt="User Account" width={60} />
                              <div className="w-100 ps-2 ms-1">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="fs-sm pe-1">Pediatría</div><i className="ai-chevron-right lead ms-2 me-1" />
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item mb-3" style={{width: '16.5rem'}}>
                          <a className="nav-link me-2" href="#cardiologia" data-bs-toggle="tab" role="tab">
                            <div className="d-flex align-items-center">
                              <img className="rounded" src="img/icon/enfermero.png" alt="Portfolio" width={60} />
                              <div className="w-100 ps-2 ms-1">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="fs-sm pe-1">Cardiología</div><i className="ai-chevron-right lead ms-2 me-1" />
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item mb-3" style={{width: '16.5rem'}}>
                          <a className="nav-link me-2" href="#obstetricia" data-bs-toggle="tab" role="tab">
                            <div className="d-flex align-items-center"><img className="rounded" src="img/icon/doctor.png" alt="Obstetricia" width={60} />
                              <div className="w-100 ps-2 ms-1">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="fs-sm pe-1">Obstetricia</div><i className="ai-chevron-right lead ms-2 me-1" />
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item mb-3" style={{width: '16.5rem'}}>
                          <a className="nav-link me-2" href="#kinesiologia" data-bs-toggle="tab" role="tab">
                            <div className="d-flex align-items-center"><img className="rounded" src="img/icon/cirujano.png" alt="Kinesiología" width={60} />
                              <div className="w-100 ps-2 ms-1">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="fs-sm pe-1">Kinesiología</div><i className="ai-chevron-right lead ms-2 me-1" />
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item mb-3" style={{width: '16.5rem'}}>
                          <a className="nav-link me-2" href="#odontologia" data-bs-toggle="tab" role="tab">
                            <div className="d-flex align-items-center"><img className="rounded" src="img/icon/enfermero(1).png" alt="Odontología" width={60} />
                              <div className="w-100 ps-2 ms-1">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="fs-sm pe-1">Odontología</div><i className="ai-chevron-right lead ms-2 me-1" />
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item mb-3" style={{width: '16.5rem'}}>
                          <a className="nav-link me-2" href="#oftalmologia" data-bs-toggle="tab" role="tab">
                            <div className="d-flex align-items-center"><img className="rounded" src="img/icon/enfermero.png" alt="Oftalmología" width={60} />
                              <div className="w-100 ps-2 ms-1">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="fs-sm pe-1">Oftalmología</div><i className="ai-chevron-right lead ms-2 me-1" />
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="fade active show" id="calendario">
                    <section className="ftco-section">
                      <div className="container">
                        <div className="row">
                          <TodosScreen/>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </section>
            </section>
          </main>
          {/* Back to top button*/}
          <a className="btn-scroll-top show" href="#top" data-scroll data-fixed-element>
            <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span><img src="/proy_int/img/icon/up-arrow.png" alt="" />
          </a>
          {/* Vendor scrits: js libraries and plugins*/}
          {/* Main theme script*/}
        </div>
    </>
  )
}
