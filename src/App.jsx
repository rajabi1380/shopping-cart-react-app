import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Page/Shop";
import Cart from "./Page/Cart";
import Connect from "./Page/Connect";
import { ContextApp } from "./context/ContextProvider";
import SingleProduct from "./Page/SingleProduct";
import FavoriteItems from "./Page/FavoriteItems";
import HomePage from "./Page/HomePage";
import LogIn from "./Page/LogIn";
import { AuthContext } from "./context/AuthContext";

function App() {
  return (
    <AuthContext>
      {" "}
      <ContextApp>
        {" "}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="shop" element={<Shop />} />
            <Route path="cart" element={<Cart />} />
            <Route path="singleproduct/:id" element={<SingleProduct />} />
            <Route path="favoriteitems" element={<FavoriteItems />} />
            <Route path="login" element={<LogIn />} />
            <Route path="connection" element={<Connect />} />
          </Routes>
        </BrowserRouter>
      </ContextApp>
    </AuthContext>
  );
}

export default App;
