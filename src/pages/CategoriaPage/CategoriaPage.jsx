import { useState,useEffect } from "react"
import CardItem from "../../components/CardItem/CardItem"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

//import de firestore 
import { db } from '../../firebase/firebaseConfig'
import { collection, query, getDocs, where} from 'firebase/firestore'

const PaginaCategoria = () => {
    const [items,setItems] = useState([]);
    let { categoria }  = useParams();

    
    useEffect(() => {

      const traerProductos = async () => {
        const q = query(collection(db, "productos"),where('categoria', '==', categoria))
        const querySnapshot = await getDocs(q)
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setItems(docs);
      }
      
      traerProductos();
    }, [categoria]);
    

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
  )
}

export default PaginaCategoria