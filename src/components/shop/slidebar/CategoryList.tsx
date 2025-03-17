import React from "react";

interface Category {
  name: string;
  count: number;
  link: string;
}

const CategoryList: React.FC = () => {
  const categories: Category[] = [
    { name: "Dried", count: 6, link: "#" },
    { name: "Vegetables", count: 8, link: "#" },
    { name: "Fruits", count: 9, link: "#" },
    { name: "Juice", count: 6, link: "#" },
    { name: "Uncategorized", count: 1, link: "#" },
  ];

  return (
    <section className="widget overflow-hidden mb-9">
      <h3 className="headingVII fwEbold text-uppercase mb-5">
        PRODUCT CATEGORIES
      </h3>
      <ul className="list-unstyled categoryList mb-0">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`mb-${
              index === categories.length - 1 ? "0" : "5"
            } overflow-hidden`}
          >
            <a href={category.link}>
              {category.name}{" "}
              <span className="num border float-right">{category.count}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategoryList;
