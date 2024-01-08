import { useState,useEffect } from "react"
import axios from "axios"
import CardItem from "../../components/CardItem/CardItem"
import { useParams } from "react-router-dom"

const PaginaDetalle = () => {
    const [items,setItems] = useState({});
    let { id }  = useParams();

    
    useEffect(() => {
        axios(`../../url_items.json`).then((json) => setItems(json.data.productos))
    }, [id])
    
  
    return (
    <div>
      esto es una pagina detalle
    </div>
  )
}

export default PaginaDetalle
