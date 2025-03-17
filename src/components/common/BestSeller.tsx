import React from "react";
import ProductCard from "./ProductCard";
import SectionHeader from "./SectionHeader";
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

const BestSeller: React.FC = () => {
  // Lọc các sản phẩm có thuộc tính isHot và lấy 3 sản phẩm đầu tiên
  const hotProducts = products.filter(product => product.isHot).slice(0, 3);

  return (
    <section className="featureSec container overflow-hidden pt-xl-11 pb-xl-18 pt-lg-10 pb-lg-20 pt-md-8 pb-md-16 pt-5 pb-5">
      <SectionHeader
        title="Best seller"
        description="These are the shop's best selling products."
      />
      <div className="row">
        {hotProducts.map((product) => (
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

export default BestSeller;
