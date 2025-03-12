import React from 'react';
import logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
  return (
    <header id="header" className="position-relative">
      <div className="headerHolderCol pt-lg-4 pb-lg-5 py-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4">
              <a href="tel:(602) 462 8889" className="tel d-flex align-items-end">
                <i className="icon-call mr-2"></i> Hotline: (602) 462 8889
              </a>
            </div>
            <div className="col-12 col-sm-4 text-center">
              <span className="txt d-block">Welcome To Botanical Store</span>
            </div>
            <div className="col-12 col-sm-4">
              <ul className="nav nav-tabs langListII justify-content-end border-bottom-0">
                <li className="dropdown">
                  <span>Currency: </span>
                  <a className="d-inline dropdown-toggle text-uppercase">USD</a>
                </li>
                <li className="dropdown m-0">
                  <span>Languages: </span>
                  <a className="d-inline dropdown-toggle text-uppercase">EN</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="headerHolder container pt-lg-5 pb-lg-7 py-4">
        <div className="row">
          <div className="col-6 col-sm-2">
            <div className="logo">
              <a href="/"><img src={logo} alt="Botanical" className="img-fluid" /></a>
            </div>
          </div>
          <div className="col-6 col-sm-7 col-lg-8 static-block">
            <nav className="navbar navbar-expand-lg navbar-light p-0 pageNav2 position-static">
              <button type="button" className="navbar-toggle collapsed position-relative">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto text-uppercase d-inline-block">
                  <li className="nav-item active">
                    <a href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a href="/store">Store</a>
                  </li>
                  <li className="nav-item">
                    <a href="/about">About</a>
                  </li>
                  <li className="nav-item">
                    <a href="/blog">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-sm-3 col-lg-2">
            <ul className="nav nav-tabs wishListII pt-5 justify-content-end border-bottom-0">
              <li className="nav-item ml-0"><a className="nav-link icon-search" href="#"></a></li>
              <li className="nav-item">
                <a className="nav-link position-relative icon-cart" href="#">
                  <span className="num rounded d-block">2</span>
                </a>
              </li>
              <li className="nav-item"><a className="nav-link icon-profile" href="#"></a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 