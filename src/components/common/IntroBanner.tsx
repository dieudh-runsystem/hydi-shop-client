import React from "react";

const IntroBanner: React.FC = () => {
  return (
    <section
      className="introBannerHolder d-flex w-100 bgCover"
      style={{ backgroundImage: "url(images/banner.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 pt-lg-23 pt-md-15 pt-sm-10 pt-6 text-center">
            <h1 className="headingIV fwEbold playfair mb-4">Shop</h1>
            <ul className="list-unstyled breadCrumbs d-flex justify-content-center">
              <li className="mr-2">
                <a href="/">Home</a>
              </li>
              <li className="mr-2">/</li>
              <li className="active">Shop</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroBanner;
