import CartContext from "../Store/CartContext.jsx";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import { useContext } from "react";
import userProgressContext from "../Store/userProgressContext.jsx";

export function Header() {
  const { items } = useContext(CartContext);
  const { showCart } = useContext(userProgressContext);

  const totalCartItems = items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  function handleShowCart() {
    // console.log("Clicked");
    showCart();
    // console.log("After show cart");
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h2>React Food</h2>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          cart({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
