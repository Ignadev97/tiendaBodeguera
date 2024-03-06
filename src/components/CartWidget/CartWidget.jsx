import React from "react";

//context 
import { useContext} from "react";
import { ItemsContext } from "../../context/ItemContext";

import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const CartWidget = () => {

  const { cartItems } = useContext(ItemsContext)


  const totalCarrito = cartItems.reduce((total, productos) => total + productos.quantity, 0)


  return (
    <>
      <div className="flex hover:transform hover:scale-110 transition-transform">
        <span>
          <ShoppingCartRoundedIcon sx={{ color: "white" }} />
        </span>
        <p className="text-white">{totalCarrito}</p>
      </div>
    </>
  );
};

export default CartWidget;
