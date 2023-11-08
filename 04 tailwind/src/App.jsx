import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-500 p-4'>Hello ALLy</h1>
      <Card username="Ally" btnText="click me" />
      <Card username="Alia Baht" btnText="Visit ME"/>
     
    </>
  )
}

export default App
