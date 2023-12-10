import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <>
        <nav>
        <ul className='flex rounded-2xl bg-blue-700 h-12 justify-evenly items-center space-x-11 shadow-2xl'>
          <li className='text-white font-extrabold hover:transform hover:scale-110 transition-transform'>Inicio</li>

          <li className='text-white font-extrabold hover:transform hover:scale-110 transition-transform'>Contacto</li>

          <li className='text-white font-extrabold hover:transform hover:scale-110 transition-transform'>Ayuda</li>

          <CartWidget />
        </ul>
        </nav>
       
    </>
  )
}

export default Navbar
