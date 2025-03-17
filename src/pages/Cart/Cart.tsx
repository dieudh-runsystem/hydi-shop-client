import React from "react";
import IntroBanner from "../../components/common/IntroBanner";
import CartTable from "../../components/cart/CartTable";
import CartNote from "../../components/cart/CartNote";
import CartSummary from "../../components/cart/CartSummary";

const Cart: React.FC = () => {
  return (
    <main>
      <IntroBanner />
      <div className="cartHolder container pt-xl-21 pb-xl-24 py-lg-20 py-md-16 py-10">
        <div className="row">
          <div className="col-12 table-responsive mb-lg-20 mb-md-16 mb-10">
            <CartTable />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <CartNote />
          </div>
          <CartSummary />
        </div>
      </div>
    </main>
  );
};

export default Cart;
