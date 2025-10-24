import ProductCard from "./ProductCard";

/**
 * ProductsContainer
 */
export default function ProductsContainer({ products, addToCart }) {
  return (
    <div className="ProductsContainer">
      {products.map((item) => (
        <ProductCard key={item.id}
         {...item}
         addToCart={addToCart} />
      ))}
    </div>
  );
}
