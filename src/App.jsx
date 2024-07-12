import { CartContextProvider } from "./Store/CartContext";
import { Header } from "./components/Header";
import { Meals } from "./components/Meals";
import { UserProgressContextProvider } from "./Store/userProgressContext";
import Cart from "./components/UI/Cart";
import Checkout from "./components/CheckOut";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
