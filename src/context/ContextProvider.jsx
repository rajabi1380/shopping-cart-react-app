import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

const BASE_URL = "https://json-server-beta-three.vercel.app";

const ContextProducts = createContext();

function ContextApp({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const [favoriteItem, setFavoriteItem] = useState([]);
  const { IsAuth } = useAuth();

  useEffect(function () {
    async function fetchData() {
      try {
        const res = await fetch(`${BASE_URL}/products`);

        const data = await res.json();

        setProducts(data);
      } catch (error) {
        toast.error("there is a problem!try again");
      }
    }
    fetchData();
  }, []);

  function getCartById(prodcut) {
    if (IsAuth) {
      setProducts(
        products.map((p) =>
          p.id === prodcut.id ? { ...prodcut, status: !prodcut.status } : p
        )
      );
      setCartItems([
        ...cartItems,
        { ...prodcut, quantity: 1, status: !prodcut.status },
      ]);
    } else {
      // navigate("/login"),
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
  function revemoCartItem(product) {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    setProducts(
      products.map((p) =>
        p.id === product.id ? { ...product, status: !product.status } : p
      )
    );
    if (existingProduct.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  }
  function checkSoldOut() {
    setCartItems([]);
    setProducts(
      products.map((product) =>
        product.status
          ? { ...product, status: !product.status, soldOut: !product.soldOut }
          : { ...product, status: product.status, soldOut: product.soldOut }
      )
    );
    toast("😎 Thank for your shop!", {
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

  function getFavoriteItem(cartItem) {
    const isExsited = favoriteItem.find((item) => item.id === cartItem.id);
    if (isExsited) {
      const newFavoriteItem = favoriteItem.filter(
        (item) => item.id !== cartItem.id
      );
      setFavoriteItem(newFavoriteItem);
    } else {
      setFavoriteItem((favorites) => [...favorites, cartItem]);
    }
  }

  return (
    <ContextProducts.Provider
      value={{
        products,
        cartItems,
        getCartById,
        revemoCartItem,
        setFavoriteItem,
        setCartItems,
        checkSoldOut,
        getFavoriteItem,
        favoriteItem,
      }}
    >
      {children}
    </ContextProducts.Provider>
  );
}

function useCarts() {
  const context = useContext(ContextProducts);
  return context;
}
export { useCarts, ContextApp };
