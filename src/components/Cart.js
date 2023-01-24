import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import "./Cart.css";
const Cart = () => {
  const quantity = useSelector(state => state.cart.totalQuantity);
  const dispatch=useDispatch();
  const toggleShowCart = () => {
    dispatch(cartActions.setShowCart())
  }
  return (
    <div className="cartIcon">
      <h3 onClick={toggleShowCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
