import { useState } from "react";
import ProductPage from "./ProductPage";
import "./style.css";

export default function MainUseCallback() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <ProductPage productId={523} theme={isDark ? "dark" : "light"} />
    </>
  );
}
