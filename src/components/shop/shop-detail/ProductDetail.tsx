import React from "react";
import { Product } from "../../../types/product";

export interface ProductProps {
  product: Product;
}

interface Size {
  id: string;
  label: string;
  checked: boolean;
}

interface Color {
  className: string;
  href: string;
}

const ProductDetail: React.FC<ProductProps> = ({ product }) => {
  const sizes: Size[] = [
    { id: "check-1", label: "L", checked: true },
    { id: "check-2", label: "M", checked: false },
    { id: "check-3", label: "S", checked: false },
    { id: "check-4", label: "XL", checked: false },
    { id: "check-5", label: "XXL", checked: false },
  ];

  const colors: Color[] = [
    { className: "red", href: "#" },
    { className: "yellow", href: "#" },
    { className: "purple", href: "#" },
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-google-plus-g", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-pinterest-p", href: "#" },
  ];

  return (
    <div className="productTextHolder overflow-hidden">
      <h2 className="fwEbold mb-2">{product.title}</h2>
      <ul className="list-unstyled ratingList d-flex flex-nowrap mb-2">
      </ul>
      <strong className="price d-block mb-5 text-green">
        {product.price} VND
      </strong>
      <p className="mb-5">{product.title}</p>
      <ul className="list-unstyled productInfoDetail mb-5 overflow-hidden">
        <li className="mb-2">
          Product Code: <span>{product.id}</span>
        </li>
        <li className="mb-2">
          Quantity: <span>68 Items</span>
        </li>
      </ul>
      <ul className="list-unstyled sizeList d-flex flex-wrap mb-4">
        <li className="text-uppercase mr-6">Size:</li>
        {sizes.map((size) => (
          <li key={size.id} className="mr-2">
            <label htmlFor={size.id}>
              <input
                id={size.id}
                type="checkbox"
                defaultChecked={size.checked}
              />
              <span className="fake-input"></span>
              <span className="fake-label">{size.label}</span>
            </label>
          </li>
        ))}
      </ul>
      <ul className="list-unstyled colorList d-flex flex-wrap mb-8">
        <li className="text-uppercase mr-2">Color:</li>
        {colors.map((color, index) => (
          <li key={index} className="mr-3">
            <a href={color.href} className={`${color.className} rounded`}></a>
          </li>
        ))}
      </ul>
      <div className="holder overflow-hidden d-flex flex-wrap mb-6">
        <input type="number" placeholder="1" />
        <a
          href="#"
          className="btn btnTheme btnShop fwEbold text-white md-round py-3 px-4 py-md-3 px-md-4"
        >
          Add To Cart <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  );
};

export default ProductDetail;
