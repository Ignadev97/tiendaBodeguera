import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "tailwindcss/tailwind.css";
import ItemList from "../ItemList/ItemList";


//import de firestore
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  let {categoria} = useParams()

  useEffect(() => {
    const traerProductos = async () => {
      const q = categoria
        ? query(
            collection(db, "productos"),
            where("categoria", "==", categoria)
          )
        : query(collection(db, "productos"));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setItems(docs);
    };
    traerProductos();
  }, [categoria]);

  return (
    <div className=" grid grid-cols-3 ">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
