import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
//pages 
import InicioPage from './pages/inicioPage/inicioPage'
import AyudaPage from './pages/ayudaPage/ayudaPage'
import ContactoPage from './pages/contactoPage/contactoPage'
import ProductosPage from './pages/productosPage/productosPage'
import PaginaDetalle from './pages/PaginaDetalle/PaginaDetalle'

//components
import Navbar from './components/Navbar/Navbar'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Header from './components/Header/Header'

function App() { 

  return (
    <>
      <Router>
        <Header />
      <div>
        <Navbar />  
      </div> 
      <Routes>
        <Route path='/' element={ <InicioPage /> }/>
        <Route path='/ayuda' element={ <AyudaPage /> }/>
        <Route path='/contacto' element={ <ContactoPage /> }/>
        <Route path='/productos' element={ <ProductosPage /> }/>
        <Route path='/detalles/:id' element={ <PaginaDetalle /> }/> {/* :id es un valor dinámico (unico) */}

      </Routes>
        
      </Router> 
    
    </>
  )
}

export default App
