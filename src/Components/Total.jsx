import { useCarts } from "../context/ContextProvider";
import "./Total.css";

function Total({ totalAmount }) {
  const { cartItems, setCartItems } = useCarts();
  function removeAllItems() {
    setCartItems([]);
  }

  return (
    <div style={{ paddingBottom: "25px" }}>
      <h1 className="titleTotal">YOUR CART SUMMARY</h1>
      <p>
        <span>Total Items</span> : {cartItems.length}
      </p>
      <p>
        {" "}
        <span>Total Amount</span> : ${totalAmount}
      </p>

      <button className="btnTotal" onClick={removeAllItems}>
        Checkout Now
      </button>
    </div>
  );
}

export default Total;
