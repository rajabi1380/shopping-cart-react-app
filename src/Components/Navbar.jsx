import {  ShoppingCart } from "phosphor-react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useCarts } from "../context/ContextProvider";
import "./Navbar.css";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

function NavBar() {
  const { cartItems, favoriteItem } = useCarts();
  const { IsAuth, logout } = useAuth();

  function handleClick() {
    if (!cartItems.length) logout();
    else {
      toast.error("please complete your shop");
    }

   
  }
  return (
    <Navbar expand="lg" className="mb-3">
      <Container
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          padding: "0 25px",
          fontFamily: "Leckerli",
        }}
        fluid
      >
        <Link
          style={{
            textDecoration: "none",
            color: " rgb(51, 54, 74)",
            fontSize: "35px",
            fontWeight: "600",
          }}
          to="/"
        >
          Rajabi Shop
        </Link>{" "}
        <Link to="/favoriteitems" className="iconHeart">
          <span>
            {" "}
            <i
              style={{ color: "rgb(51, 54, 74)" }}
              className="bi bi-suit-heart"
            ></i>
          </span>

          {favoriteItem.length > 0 && (
            <span className=" numberOfFavoriteItems ">
              {favoriteItem.length}
            </span>
            
          )}
        </Link>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              <Link
                style={{
                  textDecoration: "none",
                  color: " rgb(51, 54, 74)",
                  fontSize: "25px",
                  fontWeight: "600",
                }}
                to="/shop"
              >
                React App
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-4">
              <Link
                style={{
                  textDecoration: "none",
                  color: "#0f172a",
                  margin: "0 15px",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
                to="/shop"
              >
                Home
              </Link>{" "}
              {IsAuth ? (
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#0f172a",
                    margin: "0 15px",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                  onClick={handleClick}
                >
                  Logout
                </Link>
              ) : (
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#0f172a",
                    margin: "0 15px",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                  to="/login"
                >
                  Login
                </Link>
              )}
              <Link
                className="iconShop"
                style={{
                  textDecoration: "none",

                  color: "#0f172a",
                }}
                to="/cart"
              >
                <ShoppingCart size={30} />

                {cartItems.length > 0 && (
                  <span className="numberOfCart">{cartItems.length}</span>
                )}
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
