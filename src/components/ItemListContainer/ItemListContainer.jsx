import React, { useEffect, useState } from 'react'
import CardItem from '../CardItem/CardItem'
import axios from 'axios';

import { Link } from "react-router-dom"


const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios("../../url_items.json").then((res) =>
      setItems(res.data.productos) 
    );
   
  }, []);

  return (
    <div className="Cards-List">
      {items.map((item) => {
        return (
          <div key={item.id} className="mt-20 flex justify-center container mx-auto p-4 bg-gray-200 border rounded-lg">
            <Link to={`/detalles/${item.id}`} >
              <CardItem item={item} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemListContainer

