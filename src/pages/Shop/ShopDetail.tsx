import React, { use, useEffect } from "react";
import IntroBanner from "../../components/common/IntroBanner";
import ProductGallery from "../../components/shop/shop-detail/ProductGallery";
import ProductDetail from "../../components/shop/shop-detail/ProductDetail";
import ProductTabs from "../../components/shop/shop-detail/ProductTabs";
import BestSeller from "../../components/common/BestSeller";
import { useParams } from "react-router-dom";
import { Product } from "../../types/product";
import { useState } from "react";
import { products } from "../../datas/Product";

const ShopDetail: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang khi component được render lại
    const foundProduct = products.find((p) => p.id === Number(id));
    console.log(foundProduct);
    setProduct(foundProduct || null);
  }, [id]);

  if (!product) {
    return <div className="container text-center py-5">Loading product...</div>;
  }

  return (
    <main>
      <IntroBanner />
      <div className="twoColumns container pt-xl-23 pb-xl-20 pt-lg-20 pb-lg-20 py-md-16 py-10">
        <div className="row mb-6">
          <div className="col-12 col-lg-6 order-lg-1">
            <ProductGallery product = {product}/>
          </div>
          <div className="col-12 col-lg-6 order-lg-3">
            <ProductDetail product={product}/>
          </div>
        </div>
        
        {/* <ProductTabs /> */}
      </div>
      <BestSeller />
    </main>
  );
};

export default ShopDetail;
