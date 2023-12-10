import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//components
import Navbar from './components/Navbar/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />    
    </>
  )
}

export default App
