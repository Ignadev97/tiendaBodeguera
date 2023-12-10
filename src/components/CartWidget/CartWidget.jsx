import React from 'react'

import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const CartWidget = () => {
  return (
   <>
        <div className='flex hover:transform hover:scale-110 transition-transform'>
          <span>
          <ShoppingCartRoundedIcon sx={{color:'white'}} /> 
          </span>
          <p className='text-white'>3</p>
          </div>
       
   </>
  )
}

export default CartWidget
