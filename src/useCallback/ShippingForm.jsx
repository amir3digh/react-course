import { memo, useEffect, useRef, useState } from "react";

const ShippingForm = memo(function ShippingForm({ onSubmit }) {
  // const [count, setCount] = useState(1);

  console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />");
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderDetails = {
      ...Object.fromEntries(formData),
    };
    onSubmit(orderDetails);
  }

  return (
    <form className="flex flex-col p-4" onSubmit={handleSubmit}>
      <p>
        <b>
          Note: <code>ShippingForm</code> is artificially slowed down!
        </b>
      </p>
      <Counter />
      <label>
        Street:
        <input name="street" />
      </label>
      <label>
        City:
        <input name="city" />
      </label>
      <label>
        Postal code:
        <input name="zipCode" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
});

const Counter = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <input type="hidden" name="count" value={count} />
      <input type="hidden" name="csrfToken" value={"akshjdfbajkhsdbasd"} />
      <label>
        Number of items:
        <button type="button" onClick={() => setCount((prev) => prev - 1)}>
          –
        </button>
        {count}
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          +
        </button>
      </label>
    </div>
  );
};

export default ShippingForm;
