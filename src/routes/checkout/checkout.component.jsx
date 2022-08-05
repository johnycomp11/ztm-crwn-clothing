import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Checkout Page</h1>
      <div>
        {
          //map through CartItems, and pull name and quantity to display
          cartItems.map((cartItem) => {
            const { id, name, quantity } = cartItem;
            return (
              <div key={id}>
                <h2>{name}</h2>
                <h2>{quantity}</h2>
                <span onClick={() => removeItemFromCart(cartItem)}>-</span>
                <span onClick={() => addItemToCart(cartItem)}>+</span>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Checkout;
