import { Container, Col } from "react-bootstrap";
import { useCarts } from "../context/ContextProvider";
import ProductItem from "../Components/ProductItem";
import NavBar from "../Components/Navbar";

function Shop() {
  const { products } = useCarts();

  return (
    <>
      <NavBar />
      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "50px",
          alignItems: "center",
        }}
      >
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}{" "}
      </Container>
    </>
  );
}

export default Shop;
