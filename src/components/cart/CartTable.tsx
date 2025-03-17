import React from "react";
import { Link } from 'react-router-dom';
import { CartItem } from "../../types/cart";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { removeFromCart, updateQuantity } from "../../store/cartSlice";

const CartTable: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  console.log("Current cart items:", cartItems);

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <table className="table cartTable mb-xl-22">
      <thead>
        <tr>
          <th scope="col" className="text-uppercase fwEbold border-top-0">
            product
          </th>
          <th scope="col" className="text-uppercase fwEbold border-top-0">
            price
          </th>
          <th scope="col" className="text-uppercase fwEbold border-top-0">
            quantity
          </th>
          <th scope="col" className="text-uppercase fwEbold border-top-0">
            total
          </th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id} className="align-items-center">
            <td className="d-flex align-items-center border-top-0 border-bottom px-0 py-6">
              <div className="imgHolder">
                <img src={item.image} alt={item.title} className="img-fluid" />
              </div>
              <span className="title pl-2">
                <Link to={`/shop/${item.id}`}>{item.title}</Link>
              </span>
            </td>
            <td className="fwEbold border-top-0 border-bottom px-0 py-6">
              {item.price.toFixed(2)} $
            </td>
            <td className="border-top-0 border-bottom px-0 py-6">
              <input 
                type="number" 
                value={item.quantity} 
                min="1"
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              />
            </td>
            <td className="fwEbold border-top-0 border-bottom px-0 py-6">
              {item.total.toFixed(2)} $
              <button 
                className="fas fa-times float-right border-0 bg-transparent"
                onClick={() => handleRemoveItem(item.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
