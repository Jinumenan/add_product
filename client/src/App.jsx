import './App.css'
import Login from './Login'
import Register from './Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateProduct from './CreateProduct'
import UpdateProduct from './UpdateProduct'
import Home from './Home'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/> }/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/create' element={<CreateProduct/>}/>
        <Route path='/update/:id' element={<UpdateProduct/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
