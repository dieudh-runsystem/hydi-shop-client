import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <aside className="footerHolder overflow-hidden bg-lightGray pt-xl-23 pb-xl-8 pt-lg-10 pb-lg-8 pt-md-12 pb-md-8 pt-10">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4 mb-lg-0 mb-4">
              <h3 className="headingVI fwEbold text-uppercase mb-7">
                Contact Us
              </h3>
              <ul className="list-unstyled footerContactList mb-3">
                <li className="mb-3 d-flex flex-nowrap pr-xl-20 pr-0">
                  <span className="icon icon-place mr-3"></span>
                  <address className="fwEbold m-0">
                    Address: London Oxford Street, 012 United Kingdom.
                  </address>
                </li>
                <li className="mb-3 d-flex flex-nowrap">
                  <span className="icon icon-phone mr-3"></span>
                  <span className="leftAlign">
                    Phone: <a href="tel:(+032) 3456 7890">(+032) 3456 7890</a>
                  </span>
                </li>
                <li className="email d-flex flex-nowrap">
                  <span className="icon icon-email mr-2"></span>
                  <span className="leftAlign">
                    Email:{" "}
                    <a href="mailto:Botanicalstore@gmail.com">
                      Botanicalstore@gmail.com
                    </a>
                  </span>
                </li>
              </ul>
              <ul className="list-unstyled followSocailNetwork d-flex flex-nowrap">
                <li className="fwEbold mr-xl-11 mr-md-8 mr-3">Follow us:</li>
                <li className="mr-xl-6 mr-md-5 mr-2">
                  <a href="#" className="fab fa-facebook-f"></a>
                </li>
                <li className="mr-xl-6 mr-md-5 mr-2">
                  <a href="#" className="fab fa-twitter"></a>
                </li>
                <li className="mr-xl-6 mr-md-5 mr-2">
                  <a href="#" className="fab fa-pinterest"></a>
                </li>
                <li className="mr-2">
                  <a href="#" className="fab fa-google-plus-g"></a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 pl-xl-14 mb-lg-0 mb-4">
              <h3 className="headingVI fwEbold text-uppercase mb-6">
                Information
              </h3>
              <ul className="list-unstyled footerNavList">
                <li className="mb-1">
                  <a href="#">New Products</a>
                </li>
                <li className="mb-2">
                  <a href="#">Top Sellers</a>
                </li>
                <li className="mb-2">
                  <a href="#">Our Blog</a>
                </li>
                <li className="mb-2">
                  <a href="#">About Our Shop</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 pl-xl-12 mb-lg-0 mb-4">
              <h3 className="headingVI fwEbold text-uppercase mb-7">
                My Account
              </h3>
              <ul className="list-unstyled footerNavList">
                <li className="mb-1">
                  <a href="#">My account</a>
                </li>
                <li className="mb-2">
                  <a href="#">Discount</a>
                </li>
                <li className="mb-2">
                  <a href="#">Orders history</a>
                </li>
                <li>
                  <a href="#">Personal information</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-lg-2 pl-xl-18 mb-lg-0 mb-4">
              <h3 className="headingVI fwEbold text-uppercase mb-5">
                PRODUCTS
              </h3>
              <ul className="list-unstyled footerNavList">
                <li className="mb-2">
                  <a href="#">Delivery</a>
                </li>
                <li className="mb-2">
                  <a href="#">Legal notice</a>
                </li>
                <li className="mb-2">
                  <a href="#">Prices drop</a>
                </li>
                <li className="mb-2">
                  <a href="#">New products</a>
                </li>
                <li>
                  <a href="#">Best sales</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <footer id="footer" className="overflow-hidden bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-12 copyRightHolder v-II text-center pt-md-3 pb-md-4 py-2">
              <p className="mb-0">
                Copyright 2023 by <a href="#">Botanical Store</a> - All right
                reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
