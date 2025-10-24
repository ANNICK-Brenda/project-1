import { useState } from "react";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductCardsContainer"; // product grid
import CartContainer from "./CartContainer";

/**
 * GroceriesAppContainer
 */
export default function GroceriesAppContainer({ products = [] }) {
  const [cartItems, setCartItems] = useState([]);

  const normalizedProducts = (products || []).map((p) => {
    const raw = p.price == null ? "" : String(p.price);
    const num = parseFloat(raw.replace(/[^0-9.-]+/g, ""));
    return {
      ...p,
      price: Number.isFinite(num) ? num : 0,
    };
  });


  /**
   * addToCart(product, qty)
   */
  const addToCart = (product, qty) => {
    const quantity = Number(qty) || 0;
    if (quantity <= 0) {
      alert("Please choose a quantity before adding to the cart.");
      return;
    }

    // defensive: ensure price is a Number
    const normalizedProduct = {
      ...product,
      price: Number(product.price) || 0,
    };

    setCartItems((prev) => {
      const found = prev.find((p) => p.id === normalizedProduct.id);
      if (found) {
        // increment existing quantity
        return prev.map((p) =>
          p.id === normalizedProduct.id
            ? { ...p, quantity: Number(p.quantity || 0) + quantity }
            : p
        );
      } else {
        // add new cart item
        return [...prev, { ...normalizedProduct, quantity: Number(quantity) }];
      }
    });
  };

  
  const updateCartQuantity = (id, newQty) => {
    const quantity = Number(newQty) || 0;
    setCartItems((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, quantity: Math.max(0, quantity) } : p))
        .filter((p) => p.quantity > 0) // remove items with 0 quantity
    );
  };

  // remove an item completely
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };

  // empty the whole cart
  const emptyCart = () => setCartItems([]);

  const cartCount = cartItems.reduce((sum, it) => sum + Number(it.quantity || 0), 0);
  const cartTotal = cartItems
    .reduce((sum, it) => sum + (Number(it.price) || 0) * (Number(it.quantity) || 0), 0)
    .toFixed(2);

  return (
    <>
      <NavBar cartCount={cartCount} />

      <div className="GroceriesApp-Container">
        <ProductsContainer products={normalizedProducts} addToCart={addToCart} />

        <CartContainer
          cartItems={cartItems}
          updateCartQuantity={updateCartQuantity}
          removeFromCart={removeFromCart}
          emptyCart={emptyCart}
          cartTotal={cartTotal}
        />
      </div>
    </>
  );
}
