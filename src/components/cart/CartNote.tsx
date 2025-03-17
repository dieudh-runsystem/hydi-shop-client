import React from "react";

const CartNote: React.FC = () => {
  return (
    <form className="cartForm mb-5">
      <div className="form-group mb-0">
        <label htmlFor="note" className="fwEbold text-uppercase d-block mb-1">
          add note
        </label>
        <textarea id="note" className="form-control" />
      </div>
    </form>
  );
};

export default CartNote;
