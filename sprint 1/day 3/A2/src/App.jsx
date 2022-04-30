import { useState } from 'react'
import './App.css'
import { Counter } from './components/counter'

function App() {
  const [count, setCount] = useState(0)

  const handle = (value) =>{
    setCount(count + value)
  }

  let Color;
  if(count%2==0){
    Color = "green";
  }else{
    Color = "red";
  }

  return (
    <div className="App">
        <h1 style={{color:Color}}>Counter : {count}</h1>
        <Counter CoUnt = {handle}/>
    </div>
  )
}

export default App
