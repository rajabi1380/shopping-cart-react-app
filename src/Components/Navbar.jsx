import { Phone, ShoppingCart, House, Swatches } from "phosphor-react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useCarts } from "../context/ContextProvider";
import "./Navbar.css";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-bootstrap";

function NavBar() {
  const { cartItems, favoriteItem } = useCarts();
  const { IsAuth, logout } = useAuth();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          position: "relative",
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
        {IsAuth && (
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
        )}{" "}
        <>
          <Navbar.Toggle
            className="btnNav"
            onClick={handleShow}
          ></Navbar.Toggle>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <Link
                  style={{
                    textDecoration: "none",
                    color: " rgb(51, 54, 74)",
                    fontSize: "25px",
                    fontWeight: "600",
                    fontFamily: "Leckerli",
                  }}
                  to="/shop"
                >
                  Rajabi app
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                style={{ fontFamily: "Leckerli" }}
                className=" justify-content-end flex-column flex-grow-1 pe-4"
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#0f172a",

                    fontSize: "20px",
                    fontWeight: "500",
                    padding: "10px 15px",
                  }}
                  to="/shop"
                >
                  <i class="bi bi-cart3 IconNav"></i> Home
                </Link>{" "}
                {IsAuth ? (
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#0f172a",

                      fontSize: "20px",
                      fontWeight: "500",
                      padding: "10px 15px",
                    }}
                    onClick={handleClick}
                  >
                    <i class="bi bi-arrow-left-circle IconNav"></i> Logout
                  </Link>
                ) : (
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#0f172a",

                      fontSize: "20px",
                      padding: "10px 15px",
                      fontWeight: "500",
                    }}
                    to="/login"
                  >
                    <i class="bi bi-arrow-right-circle IconNav"></i> Login
                  </Link>
                )}
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#0f172a",
                    padding: "10px 15px",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                  to="/connection"
                >
                  <i class="bi bi-person-lines-fill IconNav"></i> connect us
                </Link>{" "}
              </Nav>
              <hr />
              <Container
                style={{
                  display: "flex ",
                  justifyContent: "space-around",
                  fontSize: "25px",
                  margin: "10px 0",
                }}
              >
                <NavLink>
                  <i class="bi bi-instagram"></i>
                </NavLink>
                <NavLink>
                  <i class="bi bi-linkedin"></i>
                </NavLink>
                <NavLink>
                  <i class="bi bi-telegram"></i>
                </NavLink>
                <NavLink>
                  <i class="bi bi-facebook"></i>
                </NavLink>
              </Container>
            </Offcanvas.Body>
          </Offcanvas>
        </>
        <div className="navTitle">
          {" "}
          <Link
            style={{
              textDecoration: "none",
              color: "#0f172a",

              fontSize: "20px",
              fontWeight: "500",
              padding: "10px 15px",
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

                fontSize: "20px",
                fontWeight: "500",
                padding: "10px 15px",
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

                fontSize: "20px",
                padding: "10px 15px",
                fontWeight: "500",
              }}
              to="/login"
            >
              Login
            </Link>
          )}{" "}
        </div>{" "}
        <Link className="iconShop" to="/cart">
          <ShoppingCart size={30} />

          {cartItems.length > 0 && (
            <span className="numberOfCart">{cartItems.length}</span>
          )}
        </Link>
      </Container>{" "}
    </Navbar>
  );
}

export default NavBar;
