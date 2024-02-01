import { createContext, useState } from 'react'

export const ItemsContext = createContext();

 
export const ItemsProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([])

    const actualizarCart = (datosCart) => {
        setCartItems(datosCart)
    }


   

    // console.log (cartItems)

    return (
        <ItemsContext.Provider value={ { cartItems, actualizarCart, setCartItems} }>
            {children}
        </ItemsContext.Provider>
    )
}
