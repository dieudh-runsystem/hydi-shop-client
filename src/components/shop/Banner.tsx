import React from "react";
import bg4 from "../../assets/images/b-bg4.jpg";

const Banner: React.FC = () => {
  return (
    <section className="bannerBlockHolder position-relative">
      <div className="slick-fade">
        <div>
          <div
            className="align w-100 d-flex align-items-center bgCover"
            style={{ backgroundImage: `url(${bg4})` }}
          >
            <div className="container position-relative holder pt-xl-10">
              <div className="row">
                <div className="col-12 col-xl-7">
                  <div className="txtwrap pr-xl-10">
                    <span className="title d-block text-uppercase fwEbold position-relative pl-2 mb-md-5 mb-sm-3">
                      welcome to botanical
                    </span>
                    <h1 className="fwEbold position-relative mb-md-7 mb-sm-4">
                      Houseplant{" "}
                      <span className="text-break d-block">
                        The Perfect Choice.
                      </span>
                    </h1>
                    <p className="mb-md-15 mb-sm-10">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <a
                      href="/shop"
                      className="btn btnTheme btnShop fwEbold text-white md-round py-3 px-4"
                    >
                      Shop Now <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slickNavigatorsWrap">
        <a href="#" className="slick-prev">
          <i className="icon-leftarrow"></i>
        </a>
        <a href="#" className="slick-next">
          <i className="icon-rightarrow"></i>
        </a>
      </div>
    </section>
  );
};

export default Banner;
