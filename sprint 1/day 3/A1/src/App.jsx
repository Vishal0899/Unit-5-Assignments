import { useState } from 'react'
import './App.css'
import { Inventory } from './components/Inventory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Inventory/>
    </div>
  )
}

export default App
