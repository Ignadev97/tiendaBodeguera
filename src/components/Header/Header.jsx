import React from 'react'
import img from "../../assets/elUnicoInternacional.jpeg"

const Header = () => {
  return (
    <div className=' h-60 bg-blue-100 flex justify-center '>
      <img src={img} alt='EL UNICO INTERNACIONAL' className='w-100 h-100'/>
    </div>
  )
}

export default Header
