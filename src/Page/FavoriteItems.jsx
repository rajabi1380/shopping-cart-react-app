import { Container } from "react-bootstrap";
import { useCarts } from "../context/ContextProvider";
import NavBar from "../Components/Navbar";
import { Trash } from "phosphor-react";
import "./FavoriteItems.css";

function FavoriteItems() {
  const { favoriteItem, setFavoriteItem } = useCarts();

  function removeFavItems(item) {
    const removeFav = favoriteItem.filter((favItem) => favItem.id !== item.id);

    setFavoriteItem(removeFav);
  }
  return (
    <>
      {" "}
      <NavBar />{" "}
      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          fontFamily: "Leckerli",
        }}
      >
        {" "}
        {favoriteItem.length > 0 ? (
          favoriteItem.map((item) => (
            <div className="favItem">
              {" "}
              <div className="right">
                <div className="bg-rigth"></div>{" "}
              </div>
              <span className="trashFav" onClick={() => removeFavItems(item)}>
                {" "}
                <Trash />{" "}
              </span>{" "}
              <img
                style={{
                  width: "100%",
                  height: "250px",
                }}
                src={item.img}
                alt={item.productName}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  padding: "0 10px",
                }}
              >
                <h3 style={{ textAlign: "center", margin: "15px 0" }}>
                  {item.productName}
                </h3>
                <span style={{ fontSize: "18px" }}>${item.price}</span>
              </div>
            </div>
          ))
        ) : (
          <h2 style={{ fontFamily: "Leckerli" }}>
            {" "}
            You don't have Favorite Items!
          </h2>
        )}
      </Container>
    </>
  );
}

export default FavoriteItems;
