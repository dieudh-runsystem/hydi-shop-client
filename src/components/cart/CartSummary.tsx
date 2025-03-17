import React, { useState } from "react";
import { CartSummaryData } from "../../types/cart";

const CartSummary: React.FC = () => {
  const [promoCode, setPromoCode] = useState("");
  const summaryData: CartSummaryData = {
    subtotal: 900.0,
  };

  const handlePromoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle promo code submission
  };

  return (
    <>
      <div className="col-12 col-md-6">
        <form onSubmit={handlePromoSubmit} className="couponForm mb-md-0 mb-5">
          <fieldset>
            <div className="mt-holder d-inline-block align-bottom mr-lg-5 mr-0 mb-lg-0 mb-2">
              <label
                htmlFor="code"
                className="fwEbold text-uppercase d-block mb-1"
              >
                promo code
              </label>
              <input
                type="text"
                id="code"
                className="form-control"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btnTheme btnCart fwEbold text-center text-white md-round py-3 px-4 py-md-3 px-md-4"
            >
              Apply
            </button>
          </fieldset>
        </form>
      </div>
      <div className="col-12 col-md-6">
        <div className="d-flex justify-content-between">
          <strong className="txt fwEbold text-uppercase mb-1">subtotal</strong>
          <strong className="price fwEbold text-uppercase mb-1">
            {summaryData.subtotal.toFixed(2)} VND$
          </strong>
        </div>
        <button className="btn btnTheme w-100 fwEbold text-center text-white md-round py-3 px-4 py-md-3 px-md-4">
          Proceed to checkout
        </button>
      </div>
    </>
  );
};

export default CartSummary;
