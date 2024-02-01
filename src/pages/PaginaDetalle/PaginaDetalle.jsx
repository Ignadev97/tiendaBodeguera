import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ButtonIncrementarCantidad from "../../components/ButtonIncrementarCantidad/ButtonIncrementarCantidad";
import ButtonAniadirACarrito from "../../components/ButtonAniadirACarrito/ButtonAniadirACarrito";
import ButtonTalle from "../../components/ButtonTalle/ButtonTalle";
import CartWidget from "../../components/CartWidget/CartWidget";

//import de firestore
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";


const PaginaDetalle = () => {
  const [item, setItem] = useState([]);
  let { id } = useParams();



  useEffect(() => {
    const traerProducto = async () => {
      const q = query(
        collection(db, "productos"),
        where(documentId(), "==", id)
      );
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItem(docs);
    };
    traerProducto();
  }, [id]);


  return (
    <div className=" grid grid-cols-2">
      {item.map((item) => {
        return (
          <>
            
            <div className="w-1/2 p-1">
              <img
                src={item.imagen}
                alt="imágen de referencia"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
            <div className="2-1/2 p-4">
              <h2 className="font-bold text-2xl">{item.descripcion}</h2>
              <p>${item.precio}</p>
              <ButtonTalle />
              <ButtonIncrementarCantidad />
              <ButtonAniadirACarrito dato={item}/>
              <CartWidget />
            </div>
          
          </>
        );
      })}
    </div>
  );
};

export default PaginaDetalle;
