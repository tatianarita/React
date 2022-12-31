import React, { createContext } from 'react'
import { useState } from 'react'
import { useContext } from 'react'

const CartContext = createContext([]) 
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const IsInCart = () => cartList.findIndex(product => product.id === product.id)
    const agregarCarrito = (product) =>{
        const idx = IsInCart ()
        if (idx !== -1){
            cartList[idx].cant += product.cant
            setCartList([...cartList])
        }else {
        setCartList([...cartList, product])
    }}

const precioTotal = () => cartList.reduce((contador,product)=> contador += (product.precio * product.cant), 0)
const cantidadTotal = () => cartList.reduce((contador,product)=> contador +=  product.cant, 0)
const vaciarCarrito = () => {
    setCartList([])
}
const eliminarProd = (id) => {
    setCartList (cartList.filter(product => product.id !== id))
}

  return (
    <CartContext.Provider value ={{
        cartList,
        agregarCarrito,
        vaciarCarrito,
        precioTotal,
        cantidadTotal,
        eliminarProd
    }}>
        {children}
    </CartContext.Provider>
  )
}