import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import IntroDiv from '../../components/IntroDiv/IntroDiv'


const InicioPage = () => {
  return (
    <>
      <IntroDiv />
      <div className='flex flex-col justify-center items-center pb-24 px-44'>
        <h1 className='text-2xl font-semibold my-16'>TEMPORADA 2024</h1>
        <ItemListContainer/>
      </div>
    </>
  )
}

export default InicioPage
