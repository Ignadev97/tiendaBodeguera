import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'

//pages 

import InicioPage from './pages/inicioPage/inicioPage'
import AyudaPage from './pages/ayudaPage/ayudaPage'
import ContactoPage from './pages/contactoPage/contactoPage'
import ProductosPage from './pages/productosPage/productosPage'

//components
import Navbar from './components/Navbar/Navbar'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() { 

  return (
    <>
      <Router> 
      <div>
        <Navbar />  
      </div> 
      <div>
        <ItemListContainer greeting={'Hola Bodeguero! ¿Cómo va tu día?'} />
      </div>
      <Routes>
        <Route path='/' element={ <InicioPage /> }/>
        <Route path='/ayuda' element={ <AyudaPage /> }/>
        <Route path='/contacto' element={ <ContactoPage /> }/>
        <Route path='/productos' element={ <ProductosPage /> }/>


      </Routes>
        
      </Router> 
    
    </>
  )
}

export default App
