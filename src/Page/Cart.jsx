import { Col, Container, Row } from "react-bootstrap";
import { useCarts } from "../context/ContextProvider";
import CartItem from "../Components/CartItem";
import Total from "../Components/Total";
import "./Cart.css";
import { Link } from "react-router-dom";
import NavBar from "../Components/Navbar";
import { useState, useEffect } from "react";

function Cart() {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cartItems } = useCarts();

  useEffect(() => {
    setTotalAmount(cartItems.reduce((acc, curr) => acc + +curr.price, 0));
  }, [cartItems]);


  return (
    <>
      <NavBar />
      {cartItems.length > 0 ? (
        <>
          {" "}
          <Container style={{ marginTop: "50px" }}>
            <Row>
              <Col md="7">
                {cartItems.map((cartItem) => (
                  <>
                    {" "}
                    <CartItem cartItem={cartItem} key={cartItem.id} />
                  </>
                ))}
              </Col>{" "}
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
                md="4"
              >
                {" "}
                <Total totalAmount={totalAmount} />
              </Col>
            </Row>
          </Container>{" "}
        </>
      ) : (
        <Link
          to="/shop"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "200px 0",
            textDecoration: "none",
          }}
        >
          <button className="goShop">Go shop</button>
        </Link>
      )}{" "}
    </>
  );
}

export default Cart;
