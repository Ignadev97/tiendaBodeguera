import React, { useEffect, useState } from 'react'
import CardItem from '../CardItem/CardItem'
import 'tailwindcss/tailwind.css';

import { Link } from "react-router-dom"

//import de firestore 
import { db } from '../../firebase/firebaseConfig'
import { collection, query, getDocs} from 'firebase/firestore'

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {

    const traerProductos = async () => {
      const q = query(collection(db, "productos"))
      const querySnapshot = await getDocs(q)
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      
      setItems(docs);
    }
    traerProductos();
      
  }, []);

  return (
    <div className=" grid grid-cols-3 ">
      {items.map((item) => {
        return(
          <div className='p-5'>
            <Link to={`/detalles/${item.id}`}> 
              <CardItem item={item} key={item.id} />
            </Link>
          </div>
        )
      })}
    </div>
  );
};

export default ItemListContainer

