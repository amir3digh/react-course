import { useCallback, useEffect, useState } from "react";
import ShippingForm from "./ShippingForm";

export default function ProductPage({ productId, theme }) {
  const handleSubmit = useCallback(
    (orderDetails) => {
      post("/product/" + productId + "buy", {
        orderDetails,
      });
    },
    [productId]
  );
  // here useCallback and useEffect do the same thing
  // const [handleSubmit, setHandleSubmit] = useState(() => {
  //   return (orderDetails) => {
  //     post("/product/" + productId + "buy", {
  //       orderDetails,
  //     });
  //   };
  // });
  // useEffect(() => {
  //   setHandleSubmit(() => {
  //     return (orderDetails) => {
  //       post("/product/" + productId + "buy", {
  //         orderDetails,
  //       });
  //     };
  //   });
  // }, [productId]);
  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

function post(url, data) {
  // Imagine this sends a request...
  console.log("POST /" + url);
  console.log(data);
}
