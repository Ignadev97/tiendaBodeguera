import React from 'react'
import { Link } from 'react-router-dom';
import Item from '../Item/Item';

const ItemList = ({items}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-screen bg-slate-100">
      {items.map((item) => {
        return (
          <div className=" p-5" key={item.id}>
            <Link to={`/detalles/${item.id}`}>
              <Item item={item} />
            </Link>
          </div>
        );
      })}
    </div>
  )
}

export default ItemList
