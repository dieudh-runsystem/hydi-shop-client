import React from "react";
import ProductCard from "../common/ProductCard";
import { Product } from "../../types/product";
import img41 from "../../assets/images/img41.jpg";
import { products } from "../../datas/Product";


const ProductGrid: React.FC = () => {
  // const products: Product[] = [
  //   {
  //     id: 1,
  //     image: img41,
  //     title: "Pellentesque aliquet",
  //     price: 68.0,
  //     oldPrice: 80.5,
  //     isHot: true,
  //     isSale: true,
  //   },
  //   {
  //     id: 1,
  //     image: img41,
  //     title: "Pellentesque aliquet",
  //     price: 68.0,
  //     oldPrice: 80.5,
  //     isHot: true,
  //     isSale: true,
  //   },
  //   {
  //     id: 1,
  //     image: img41,
  //     title: "Pellentesque aliquet",
  //     price: 68.0,
  //     oldPrice: 80.5,
  //     isHot: true,
  //     isSale: true,
  //   },
  //   {
  //     id: 1,
  //     image: img41,
  //     title: "Pellentesque aliquet",
  //     price: 68.0,
  //     oldPrice: 80.5,
  //     isHot: true,
  //     isSale: true,
  //   },
  // ];

  return (
    <article id="content">
      <header className="show-head d-flex flex-wrap justify-content-between mb-7">
        <ul className="list-unstyled viewFilterLinks d-flex flex-nowrap align-items-center">
          <li className="mr-2">
            <a href="#" className="active">
              <i className="fas fa-th-large"></i>
            </a>
          </li>
          <li className="mr-2">
            <a href="#">
              <i className="fas fa-list"></i>
            </a>
          </li>
          <li className="mr-2">Showing 1–9 of 24 results</li>
        </ul>
        <div className="sortGroup">
          <div className="d-flex flex-nowrap align-items-center">
            <strong className="groupTitle mr-2">Sort by:</strong>
            <div className="dropdown">
              <button
                className="dropdown-toggle buttonReset"
                type="button"
                id="sortGroup"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Default sorting
              </button>
              <ul
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="sortGroup"
              >
                <li>
                  <a href="#">Default Order</a>
                </li>
                <li>
                  <a href="#">Default Order</a>
                </li>
                <li>
                  <a href="#">Default Order</a>
                </li>
                <li>
                  <a href="#">Default Order</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="row">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-lg-4 featureCol mb-7"
          >
            <ProductCard product={product} />
          </div>
        ))}
        <div className="col-12 pt-3 mb-lg-0 mb-md-6 mb-3">
          <ul className="list-unstyled pagination d-flex justify-content-center align-items-end">
            <li>
              <a href="#">
                <i className="fas fa-chevron-left"></i>
              </a>
            </li>
            <li className="active">
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>...</li>
            <li>
              <a href="#">
                <i className="fas fa-chevron-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ProductGrid;
