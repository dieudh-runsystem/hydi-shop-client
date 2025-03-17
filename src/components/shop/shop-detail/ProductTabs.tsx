import React, { useState } from "react";
import img58 from "../../../assets/images/img58.jpg";
import img59 from "../../../assets/images/img59.jpg";
import img60 from "../../../assets/images/img60.jpg";
import img61 from "../../../assets/images/img61.jpg";
import img62 from "../../../assets/images/img62.jpg";
import img63 from "../../../assets/images/img63.jpg";
import img64 from "../../../assets/images/img64.jpg";

const ProductTabs: React.FC = () => {
  const images = [img58, img59, img60, img61, img62, img63, img64];
  const [activeTab, setActiveTab] = useState("description");

  const tabs = {
    description: {
      title: "Description",
      content: `Aenean id ullamcorper libero. Vestibulum imperdiet nibh. Lorem ullamcorper volutpat. 
        Vestibulum lacinia risus. Etiam sagittis ullamcorper volutpat. Vestibulum lacinia risus sed ligula 
        malesuada volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
        turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.`,
    },
    reviews: {
      title: "Reviews ( 2 )",
      content: `Aenean id ullamcorper libero. Vestibulum imperdiet nibh. Lorem ullamcorper volutpat. 
        Vestibulum lacinia risus. Etiam sagittis ullamcorper volutpat. Vestibulum lacinia risus sed ligula 
        malesuada volutpat.`,
    },
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="paggSlider">
          {images.map((image, index) => (
            <div key={index} className="imgBlock">
              <img src={image} alt="Thumbnail" className="img-fluid" />
            </div>
          ))}
        </div>
        <ul className="list-unstyled tabSetList d-flex justify-content-center mb-9">
          {Object.entries(tabs).map(([key, { title }]) => (
            <li
              key={key}
              className={key === "reviews" ? "" : "mr-md-20 mr-sm-10 mr-2"}
            >
              <a
                href={`#${key}`}
                className={`${
                  activeTab === key ? "active" : ""
                } playfair fwEbold pb-2`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(key);
                }}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
        <div className="tab-content mb-xl-11 mb-lg-10 mb-md-8 mb-5">
          {Object.entries(tabs).map(([key, { content }]) => (
            <div
              key={key}
              id={key}
              className={activeTab === key ? "active" : "hidden"}
            >
              <p>{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
