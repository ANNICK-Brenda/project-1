import cartEmpty from "../assets/cart-empty.png";
import cartFull from "../assets/cart-full.png";

/**
 NavBar
 */
export default function NavBar({ cartCount = 0 }) {
  const cartImage = cartCount > 0 ? cartFull : cartEmpty;

  return (
    <header className="NavBar">
      <div className="NavDiv NavUser">Hello, username</div>

      {/* Center: app title */}
      <div className="NavDiv NavTitle">
        <h1>Groceries App 🍑</h1>
      </div>

      <div className="NavDiv NavCart">
        <img src={cartImage} alt="Cart" className="CartIconImg" />
      </div>
    </header>
  );
}
