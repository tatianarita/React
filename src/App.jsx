import { useState } from 'react'
import {BrowserRouter, Route, Navigate, Routes} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartContainer from './components/CartContainer/CartContainer'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  let greeting = 'Bienvenidos!'

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting ={greeting}/>}/>
        <Route path='/categoria/:id' element={<ItemListContainer/>}/>
        <Route path='/detalle/:productId' element={<ItemDetailContainer/>}/>
        <Route path='/carrito' element={<CartContainer/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
