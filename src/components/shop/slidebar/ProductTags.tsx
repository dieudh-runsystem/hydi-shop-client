import React from "react";

const ProductTags: React.FC = () => {
  const tags = [
    "Plant",
    "Floor",
    "Indoor",
    "Green",
    "Healthy",
    "Cactus",
    "House plant",
    "Office tree",
  ];

  return (
    <section className="widget mb-9">
      <h3 className="headingVII fwEbold text-uppercase mb-5">product tags</h3>
      <ul className="list-unstyled tagNavList d-flex flex-wrap mb-0">
        {tags.map((tag, index) => (
          <li key={index} className="text-center">
            <a href="#" className="md-round d-block">
              {tag}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductTags;
