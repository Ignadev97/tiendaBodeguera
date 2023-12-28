import React, { useEffect, useState } from 'react'
import CardItem from '../CardItem/CardItem'
import axios from 'axios';

const ItemListContainer = ({}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios('URLAPIITEMS').then((res) => setChars(res.data.item))
  }, []);
  
  
  return (
    <div className="mt-20 flex justify-center container mx-auto p-4 bg-gray-200 border rounded-lg">
    {items.map ((item) => {
      return (
        <div>
            <CardItem item={item} />  
        </div>
      );
      })}
  </div>
  );
}

export default ItemListContainer
