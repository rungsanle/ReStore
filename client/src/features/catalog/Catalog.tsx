import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/Products")
      .then((response) => response.json())
      .catch((err) => {
        throw new Error(err);
      })
      .then((data) => setProducts(data))
      .catch((err) => {
        throw new Error(err);
      })
      .catch((error) => console.log("Authorization failed : " + error.message));
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
