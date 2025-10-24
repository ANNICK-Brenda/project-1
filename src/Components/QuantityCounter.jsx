import React from "react";

/**
 * QuantityCounter
 */
export default function QuantityCounter({ value = 0, onChange = () => {} }) {
  // make sure we work with a number
  const qty = Number(value || 0);

  // decrease but never below 0
  const dec = () => {
    const newQty = Math.max(0, qty - 1);
    onChange(newQty);
  };

  // increase by 1
  const inc = () => {
    const newQty = qty + 1;
    onChange(newQty);
  };

  return (
    <div
      className="QuantityCounter"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        justifyContent: "center",
        
      }}
    >
      {/* Decrease button */}
      <button
        type="button"
        className="QuantityBtn"
        onClick={dec}
        aria-label="decrease quantity"
      >
        -
      </button>

      <div
        className="qty-value"
        aria-live="polite"
        style={{ minWidth: 26, textAlign: "center" }}
      >
        {qty}
      </div>

      {/* Increase button */}
      <button
        type="button"
        className="QuantityBtn"
        onClick={inc}
        aria-label="increase quantity"
      >
        +
      </button>
    </div>
  );
}
