import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { useCarts } from "../context/ContextProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

function ProductItem({ product }) {
  const { getCartById, revemoCartItem } = useCarts();
  const { IsAuth } = useAuth();

  const { productName, price, img, id, status, description, soldOut } = product;
  console.log(product);
  const navigate = useNavigate();

  function addTocart() {
    getCartById(product);

    IsAuth && !product.status && toast.success("Item added to cart");
  }
  function removeCart() {
    revemoCartItem(product);
    product.status && toast.error("Item remove from cart");
  }
  return (
    <Card
      style={
        soldOut
          ? { opacity: "0.8", width: "18rem", margin: "10px " }
          : { width: "18rem", margin: "10px" }
      }
    >
      <Card.Img
        variant="top"
        src={img}
        alt={id}
        onClick={() => !soldOut && navigate(`/singleproduct/${id}`)}
      />
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          {" "}
          <Card.Text style={{ fontSize: "18px" }}>${price}</Card.Text>{" "}
          {status ? (
            <Button variant={"danger"} onClick={() => removeCart(product)}>
              RemoveCart
            </Button>
          ) : (
            <Button
              disabled={soldOut}
              style={{ backgroundColor: "#0f172a", border: "0", outline: "0" }}
              onClick={() => addTocart(product)}
            >
              {soldOut ? "soldOut" : "AddToCart"}
            </Button>
          )}
        </Container>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
