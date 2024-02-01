import React from "react";

//context 
import { useContext, useState, useEffect } from "react";
import { ItemsContext } from "../../context/ItemContext";

import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const CartWidget = () => {

  const { cartItems } = useContext(ItemsContext)

  const [numeroItems, setNumeroItems] = useState(cartItems.length)

  useEffect(() => {
    setNumeroItems(cartItems.length)
  },[cartItems])

  return (
    <>
      <div className="flex hover:transform hover:scale-110 transition-transform">
        <span>
          <ShoppingCartRoundedIcon sx={{ color: "white" }} />
        </span>
        <p className="text-white">{numeroItems}</p>
      </div>
    </>
  );
};

export default CartWidget;
