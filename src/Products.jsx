import { useEffect, useState } from "react";
import { Loading } from "./Loading";

export const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, []);
  //   const fetchProducts = () => {
  //     fetch("https://fakestoreapi.com/products")
  //       .then((res) => res.json())
  //       .then((json) => setProducts(json));
  //   };
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };
  return (
    <div className="grid grid-cols-2">
      {!!products.length ? (
        products.map((product) => {
          return (
            <div className="flex flex-col gap-3 border rounded-2xl p-4">
              <div className="flex justify-center">
                <img width={200} src={product.image} />
              </div>
              <div className="font-bold">{product.title}</div>
              <div>{product.description}</div>
              <div className="w-full flex justify-start">{`$ ${product.price}`}</div>
            </div>
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};
