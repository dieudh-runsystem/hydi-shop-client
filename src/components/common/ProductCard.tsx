import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  const dispatch = useDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Adding product to cart:", product);
    dispatch(addToCart(product));
    console.log("Product added to cart");
    alert("Product added to cart successfully!");
  };

  return (
    <div className="border">
      <div className="imgHolder position-relative w-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid w-100"
        />
        <ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
          <li className="mr-2 overflow-hidden">
            <a href="#" className="icon-cart d-block" onClick={handleAddToCart}></a>
          </li>
          <li className="mr-2 overflow-hidden">
            <Link to={`/shop/${product.id}`} className="icon-eye d-block"></Link>
          </li>
        </ul>
      </div>
      <div className="text-center py-5 px-4">
        <span className="title d-block mb-2">
          <Link to={`/shop/${product.id}`}>{product.title}</Link>
        </span>
        <span className="price d-block fwEbold">
          {product.oldPrice && <del>{product.oldPrice.toFixed(2)} VND$</del>}
          {product.price.toFixed(2)} VND$
        </span>
        {product.isHot && (
          <span className="hotOffer fwEbold text-uppercase text-white position-absolute d-block">
            HOT
          </span>
        )}
        {product.isSale && (
          <span className="hotOffer green fwEbold text-uppercase text-white position-absolute d-block ml-8">
            Sale
          </span>
        )}
      </div>
    </div>
    // </div>
  );
};

export default ProductCard;
