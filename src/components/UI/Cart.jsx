import { useContext, useEffect } from "react";
import CartContext from "../../Store/CartContext";
import Modal from "./Modal";
import userProgressContext from "../../Store/userProgressContext";
import { currencyFormatter } from "../../util/formatting";
import Button from "./Button";
import CartItem from "./cartItem";

export default function Cart() {
  const { items, addItem, removeItem } = useContext(CartContext);
  const userProgressCtx = useContext(userProgressContext);

  const cartTotal = items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }
  function handleGoToCheckout() {
    userProgressCtx.showCheckOut();
  }

  useEffect(() => {
    console.log("Progress: ", userProgressCtx.progress); // Debugging line
  }, [userProgressCtx.progress]);

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem key={item.id} {...item} onIncrease={() => addItem(item)} onDecrease={() => removeItem(item.id)} />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {items.length > 0 && <Button onClick={handleGoToCheckout}>Go To checkout</Button>}
      </p>
    </Modal>
  );
}
