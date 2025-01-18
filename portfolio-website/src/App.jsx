import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import BannerMessage from './components/BannerMessage'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div>
      <Navbar/>
    </div>
    <BannerMessage/>

  </>
  )
}

export default App
