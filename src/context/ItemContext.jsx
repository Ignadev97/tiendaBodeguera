import { createContext, useState } from 'react'

export const ItemsContext = createContext();

 
export const ItemsProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([])
    const [cantidad, setCantidad] = useState (1)

    const vaciarCarrito = () => {
        setCartItems([])
      }

    const quitarObjeto = (id) => {       
        const index = cartItems.findIndex( producto => producto.id == id)
         
        if (index !== -1){
            const newCartItems = [...cartItems];
            newCartItems.splice(index, 1);
            setCartItems(newCartItems);
        }
     
     }    
   

    return (
        <ItemsContext.Provider value={ { cartItems, setCartItems, cantidad, setCantidad, vaciarCarrito, quitarObjeto} }>
            {children}
        </ItemsContext.Provider>
    )
}
