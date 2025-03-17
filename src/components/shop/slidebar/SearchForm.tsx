import React from "react";

const SearchForm: React.FC = () => {
  return (
    <section className="widget overflow-hidden mb-9">
      <form action="#" className="searchForm position-relative border">
        <fieldset>
          <input
            type="search"
            className="form-control"
            placeholder="Search product..."
          />
          <button className="position-absolute">
            <i className="icon-search"></i>
          </button>
        </fieldset>
      </form>
    </section>
  );
};

export default SearchForm;
