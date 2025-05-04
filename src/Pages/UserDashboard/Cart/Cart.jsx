import React from "react";
import useCart from "../../../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-4xl"> items:{cart.length}</h2>
        <h2 className="text-4xl"> total price:${totalPrice}</h2>
        <button className="btn btn-primary">Pay</button>
      </div>
    </div>
  );
};

export default Cart;
