import React from "react";
import CartCard from "./CartCard";
//Annick Brenda 

/**
 * CartContainer
 * - Shows cart summary and the list of CartCard components.
 */
export default function CartContainer({
  cartItems = [],
  updateCartQuantity,
  removeFromCart,
  emptyCart,
  cartTotal = 0,
}) {
 let totalItems = 0;

for (const item of cartItems) {
  const qty = Number(item.quantity) || 0;
  totalItems += qty;
}

const cartCount = totalItems;

  return (
    <section className="CartContainer">
      <h3>Cart items: {cartCount}</h3>

      {cartItems.length === 0 ? (
        <div className="empty-message" style={{ padding: 12, color: "#bbb" }}>
          No items in cart
        </div>
      ) : (
        <div className="CartList">
          {cartItems.map((item) => (
            <CartCard
              key={item.id}
              item={item}
              updateCartQuantity={updateCartQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      )}

      <div style={{ marginTop: 12 }}>
        <div>
          <strong>Total: ${Number(cartTotal).toFixed(2)}</strong>
        </div>

        {/* only show these buttons when cart has items */}
        {cartItems.length > 0 ? (
          <div className="CartListBtns" style={{ marginTop: 12 }}>
            <button
              className="RemoveButton"
              onClick={emptyCart}
              type="button"
              aria-label="empty cart"
            >
              Empty Cart
            </button>

            <button
              id="BuyButton"
              type="button"
              onClick={() =>
                alert(`Checkout - total: $${Number(cartTotal).toFixed(2)}`)
              }
            >
              Checkout: ${Number(cartTotal).toFixed(2)}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
