import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
import Info from './components/Info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <Info />
      <main>
        <About />
        <Interests />
      </main>
      <Footer />
    </div>
  )
}

export default App
