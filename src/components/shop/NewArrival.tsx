import React from "react";
import ProductCard from "../common/ProductCard";
import SectionHeader from "../common/SectionHeader";
import { products } from "../../datas/Product";

export interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
  isHot?: boolean;
  isSale?: boolean;
}

const NewArrival: React.FC = () => {
  // Lấy 3 sản phẩm cuối cùng từ mảng products
  const latestProducts = products.slice(-3);

  return (
    <section className="featureSec container overflow-hidden pt-xl-12 pb-xl-9 pt-lg-10 pb-lg-4 pt-md-8 pb-md-2 pt-5">
      <SectionHeader
        title="New Arrival"
        description="These are the shop's newest products."
      />
      <div className="row">
        {latestProducts.map((product) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-lg-4 featureCol mb-7"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
