import "tailwindcss/tailwind.css";
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import MenuDesplegable from '../MenuDesplegable/MenuDesplegable'


const Navbar = () => {
  return (
    <>
        <nav >
        <ul className='flex bg-blue-700 h-12 justify-evenly items-center space-x-11 shadow-2xl px-28'>
          <Link className='text-white font-extrabold hover:transform hover:scale-110 transition-transform' to="/">Inicio</Link>
          <Link className='text-white font-extrabold hover:transform hover:scale-110 transition-transform' to="/productos" >Productos</Link> 
          <MenuDesplegable />
          <Link className='text-white font-extrabold hover:transform hover:scale-110 transition-transform' to="/contacto" >Contacto</Link> 
          <Link className='text-white font-extrabold hover:transform hover:scale-110 transition-transform' to="/ayuda">Ayuda</Link>
          
          <Link to={'/carrito'}><CartWidget /></Link>
        </ul>
        </nav>
    </>
  )
}

export default Navbar
