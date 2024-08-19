import React from 'react'

const Footer = () => {
  return (
    <footer className='flex items-center justify-center gap-10 bg-blue-700 h-12'>
        <a href="linkedin" className='text-white font-extrabold hover:transform hover:scale-110 transition-transform'>Linkedin</a>
        <a href="github" className='text-white font-extrabold hover:transform hover:scale-110 transition-transform'>Github</a>
        <a href="instagram" className='text-white font-extrabold hover:transform hover:scale-110 transition-transform' >Instagram</a>
    </footer>
  )
}

export default Footer
