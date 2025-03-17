import React from "react";
import { Product } from "../../../types/product";

export interface ProductProps {
  product: Product;
}

const ProductGallery: React.FC<ProductProps> = ({ product }) => {
  return (
    <>
      <div className="productSliderImage mb-lg-0 mb-4 slick-initialized slick-slider">
        <div className="paggSlider">
          {
            <div>
              <img src={product.image} alt="Thumbnail" className="img-fluid" />
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default ProductGallery;
