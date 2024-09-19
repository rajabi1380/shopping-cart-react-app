import { Row, Col } from "react-bootstrap";
import { useCarts } from "../context/ContextProvider";
import { Link, useNavigate, useParams } from "react-router-dom";

import NavBar from "../Components/Navbar";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

function SingleProduct() {
  const { products, getFavoriteItem, favoriteItem } = useCarts();
  const { IsAuth } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const singleProduct = products.filter((product) => product.id === id);
  const fillterFav = favoriteItem.some((item) => item.id === id);
  console.log(fillterFav);

  function handlerFavorite(cartItem) {
    if (IsAuth) {
      getFavoriteItem(cartItem);
      navigate("/shop");
    } else {
      toast("👀 please login in the website", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <>
      <NavBar />
      <div
        className="item"
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        {" "}
        <Row
          style={{
            // backgroundColor: "green",
            borderRadius: "15px",
            width: "800px",
            boxShadow: "  0px 0px 165px -9px rgb(100,100,100,0.3)",
          }}
        >
          {singleProduct.map((cartItem) => (
            <div
              key={cartItem.id}
              style={{
                width: "100%",
                height: "400px",
                position: "relative",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <>
                <Link
                  to="/shop"
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    top: "-10px",
                    right: "-100px",
                    margin: "5px 0",
                    width: "150px",
                    padding: "10px 15px",

                    fontSize: "25px",
                    fontWeight: "800",
                    textDecoration: "none",
                    color: "#0f172a",
                  }}
                >
                  &times;
                </Link>
                <Col className="pe-3" md="5">
                  <p>
                    {cartItem.description} Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Alias sint doloribus
                    temporibus possimus veniam rem maxime natus ex, eaque,
                    obcaecati officiis molestiae at
                  </p>
                  <div
                    className="footer"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <span>${cartItem.price}</span>
                    <button
                      style={{
                        border: "0",
                        outline: "0",
                        backgroundColor: "transparent",
                        fontSize: "20px",
                      }}
                      onClick={() => handlerFavorite(cartItem)}
                    >
                      {fillterFav ? (
                        <i class="bi bi-dash-circle"></i>
                      ) : (
                        <i class="bi bi-plus-circle"></i>
                      )}
                    </button>
                  </div>
                </Col>
                <Col md="6" key={cartItem.id}>
                  {" "}
                  <img
                    src={cartItem.img}
                    alt=""
                    style={{
                      width: "250px",
                      height: "250px",
                    }}
                  />{" "}
                </Col>{" "}
              </>
            </div>
          ))}
        </Row>
      </div>
    </>
  );
}

export default SingleProduct;
