

import './App.css'
import {BrowserRouter,Routes , Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import List from './pages/List'
import Signup from './pages/Signup'
import Browe from './pages/Browe'

function App() {


  return (
    <BrowserRouter>

    <Routes>
 
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/list' element={<List/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/browse' element={<Browe/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
