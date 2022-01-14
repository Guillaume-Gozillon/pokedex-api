import Home from "./components/Home"
import { Routes, Route } from "react-router"
import Pokemon from "./components/Pokemon"

const App = () => {
  return (
    <div className='App'>
      <h1>Hello</h1>
      <Routes>
        
      
      <Route path='/' element={<Home />} />
        <Route path='/pokemon' element={<Pokemon />} />
      </Routes>
    </div>
  )
}

export default App
