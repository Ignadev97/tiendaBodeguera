import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//components
import Navbar from './components/Navbar/Navbar'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />  
      </div> 
      <div>
        <ItemListContainer greeting={'Hola Bodeguero! ¿Cómo va tu día?'} />
      </div>
    </>
  )
}

export default App
