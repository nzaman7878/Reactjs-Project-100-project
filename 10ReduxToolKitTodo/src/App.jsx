// Importing the 'useState' function from the 'react' library
import { useState } from 'react'

// Importing the 'reactLogo' image from a local file
import reactLogo from './assets/react.svg'

// Importing the 'viteLogo' image from a local file
import viteLogo from '/vite.svg' // This path should be verified, it may not be correct.

// Importing the styles defined in 'App.css'
import './App.css'

// Importing two React components: 'AddTodo' and 'Todos'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

// This is the main component of the application, named 'App'
function App() {
  return (
    <>
      {/* Displaying a heading with some text */}
      <h1>Learn about redux toolkit</h1>

      {/* Rendering the 'AddTodo' component, which allows adding new todos */}
      <AddTodo />

      {/* Rendering the 'Todos' component, which displays the list of todos */}
      <Todos />
    </>
  )
}

// Exporting the 'App' component as the default export of this module
export default App
