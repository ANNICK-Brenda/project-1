import { useState } from "react";
import QuantityCounter from "./QuantityCounter";

/**
 * ProductCard

 */
export default function ProductCard({ id, productName, brand, image, price, addToCart }) {
  const [count, setCount] = useState(0);

  const priceNumber = Number(price) || 0;

  const handleAddToCart = () => {
    const qty = Number(count) || 0;

    if (qty <= 0) {
      alert("Please choose a quantity before adding to the cart.");
      return;
    }

    if (addToCart) {
      addToCart({ id, productName, brand, image, price: priceNumber }, qty);
      setCount(0); // reset the counter after adding
    }
  };

  return (
    <div className="ProductCard">
      <h3>{productName}</h3>

      {/* product image */}
      <img src={image} alt={productName} />

      <p>{brand}</p>

      {/* quantity selector (re-usable component) */}
      <div className="ProductQuantityDiv">
        <QuantityCounter value={count} onChange={setCount} min={0} />
      </div>

      {/* show the price (2 decimals) */}
      <p>Price: ${priceNumber.toFixed(2)}</p>

      {/* add to cart button */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
