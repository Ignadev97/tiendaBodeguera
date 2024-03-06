import React, {useState , useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import {db} from '../../firebase/firebaseConfig.js';
import { collection, query, getDocs, where, documentId } from "firebase/firestore";



const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        const traerProducto = async () => {
            const q = query(collection(db,"productos"), where(documentId(), '==', id))
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setItem({ ...doc.data(), id: doc.id, quantity: 1 })
            })
        }
        traerProducto()
    }, [id])

  
  return (
    <div>
      {item && <ItemDetail item={item}/>}
    </div>
    
  )
}

export default ItemDetailContainer
