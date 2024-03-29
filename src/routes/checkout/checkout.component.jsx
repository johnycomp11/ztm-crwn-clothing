import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, cartTotal } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span> Product</span>
        </div>
        <div className="header-block">
          <span> Discription</span>
        </div>
        <div className="header-block">
          <span> Quantity</span>
        </div>
        <div className="header-block">
          <span> Price</span>
        </div>
        <div className="header-block">
          <span> Remove</span>
        </div>
      </div>
          {cartItems.map((cartItem) => (  //map through CartItems, and pull name and quantity to display
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))
        }
        <div className="total">
          <span className="total">Total: ${cartTotal}</span>
          </div>
    </div>
  );
};

export default Checkout;
