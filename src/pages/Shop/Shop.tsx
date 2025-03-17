import React from "react";
import IntroBanner from "../../components/common/IntroBanner";
import ProductGrid from "../../components/shop/ProductGrid";
import Slidebar from "../../components/shop/Slidebar";

const Shop: React.FC = () => {
  return (
    <main>
      <IntroBanner />
      <div className="twoColumns container pt-lg-23 pb-lg-20 pt-md-16 pb-md-4 pt-10 pb-4">
        <div className="row">
          <div className="col-12 col-lg-9 order-lg-3">
            <ProductGrid />
          </div>
          <div className="col-12 col-lg-3 order-lg-1">
            <Slidebar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
