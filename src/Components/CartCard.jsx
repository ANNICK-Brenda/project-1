import QuantityCounter from "./QuantityCounter";

/**
 * CartCard
 */
export default function CartCard({ item, updateCartQuantity, removeFromCart }) {
  const priceNumber = Number(item.price) || 0;
  const total = priceNumber * (Number(item.quantity) || 0);

  return (
    <div className="CartCard">
      {/* Top section: product image + info + quantity counter */}
      <div className="CartCardTop">
        <img src={item.image} alt={item.productName} />
        <div className="CartCardDetails">
          <p className="CartCardName">{item.productName}</p>
          <p className="CartCardPrice">${priceNumber.toFixed(2)}</p>
        </div>

        {/* QuantityCounter calls updateCartQuantity with the new value */}
        <QuantityCounter
          value={item.quantity}
          onChange={(newQty) => updateCartQuantity(item.id, newQty)}
        />
      </div>

      {/* Bottom section: total for this item and remove button */}
      <div className="CartCardInfo">
        <p className="CartCardTotal">Total: ${total.toFixed(2)}</p>
        <button className="RemoveButton" onClick={() => removeFromCart(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}
