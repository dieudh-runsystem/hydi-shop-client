import React from "react";
import "jquery-ui/ui/widgets/slider";

const PriceFilter: React.FC = () => {
  return (
    <section className="widget mb-9">
      <h3 className="headingVII fwEbold text-uppercase mb-6">
        Filter by price
      </h3>
      <form action="#" className="filter-ranger-form">
        <div id="slider-range"></div>
        <input type="hidden" id="amount1" name="amount1" />
        <input type="hidden" id="amount2" name="amount2" />
        <div className="get-results-wrap d-flex align-items-center justify-content-between">
          <button
            type="button"
            className="btn btnTheme btn-shop fwEbold md-round px-3 pt-1 pb-2 text-uppercase"
          >
            Filter
          </button>
          <p id="amount" className="mb-0"></p>
        </div>
      </form>
    </section>
  );
};

export default PriceFilter;
