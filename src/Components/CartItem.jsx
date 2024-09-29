import { Row, Col } from "react-bootstrap";
import "./CartItem.css";
import { Trash } from "phosphor-react";
import { useCarts } from "../context/ContextProvider";
import { toast } from "react-toastify";

function CartItem({ cartItem }) {
  const { revemoCartItem } = useCarts();
  const { id, img, productName, price } = cartItem;

  function removeItem() {
    revemoCartItem(cartItem);
    cartItem.status && toast.error("Item remove from cart");
  }

  return (
    <div
      className="item"
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "25px 0",
        alignItems: "center",
      }}
    >
      {" "}
      <Row
        style={{
          width: "800px",
          padding: "25px 15px",

          borderRadius: "15px",

          boxShadow:
            "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <>
            <Col className="pe-3 " style={{ margin: "15px 10px" }} md="4">
              <p
                style={{
                  fontWeight: "700",
                  fontSize: " 25px",
                  textAlign: "center",
                  color: "#0f172a",
                }}
              >
                {" "}
                {productName}
              </p>
              <div
                className="footer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                {" "}
                <span style={{ fontSize: "18px", fontWeight: "500" }}>
                  ${price}
                </span>{" "}
                <span className="cartItemtrash">
                  <Trash onClick={() => removeItem(cartItem)} />{" "}
                </span>
              </div>
            </Col>
            <Col md="5" key={id}>
              {" "}
              <img
                src={img}
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
            </Col>
          </>
        </div>
      </Row>
    </div>
  );
}

export default CartItem;
