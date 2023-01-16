import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const CartContainer = () => {
  const[ dataForm, setFormData] = useState({
    Nombre:'',
    Email:'',
    Teléfono:''
  })
  const { cartList, vaciarCarrito, precioTotal, eliminarProd} = useCartContext()
  console.log(cartList)

  const addOrder = (e)=>{
    e.preventDefault()
    const order = {}
    order.buyer= dataForm
    order.price= precioTotal()
    order.items= cartList.map(({id,precio,nombre})=>({id,precio,nombre}))
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    addDoc(queryCollection, order)
      .then(resp => console.log(resp))
      .catch(err=> console.log(err))
      .finally(()=> vaciarCarrito())
}

const handleOnChange=(e)=>{
  setFormData({
    ...dataForm,
    [e.target.name]:e.target.value
  })
}
console.log(dataForm)
  
return (
    <div>
      {cartList.length !== 0 ?
      <>
      {cartList.map(product => <div key={product.id}>
                          <div className='w-50'>
                          <img src={product.foto} alt="foto producto" className ='w-25'/>
                          </div>
                          Nombre:{product.nombre} - Categoría:{product.categoria} - precio:{product.precio} - cantidad:{product.cant}
                          <button onClick={()=>eliminarProd(product.id)} className='btn btn-danger'> X </button>
                          </div>
                          )               
                        }
                        <h4>El valor a abonar es de: {precioTotal()}</h4>
                        <form onSubmit={addOrder}>
                        <input type="text" 
                        onChange={handleOnChange}
                        name='Nombre'
                        value={dataForm.usuario}
                        placeholder="ingrese su nombre"
                        />  
                        <input type="number" 
                        onChange={handleOnChange}
                        name='teléfono'
                        value={dataForm.tel}
                        placeholder="ingrese su teléfono"
                        /> 
                        <input type="text" 
                        onChange={handleOnChange}
                        name='email'
                        value={dataForm.email}
                        placeholder="ingrese su mail"
                        /> 
                        <button className='btn btn-outline-success'>Finalizar compra</button>
                        </form>
                        <button className= "btn-btn-danger" onClick={vaciarCarrito} >Vaciar Carrito</button>
       </>
       :
        <>
        <h2>No hay contenido en su carrito</h2>
        <Link to= '/'>Productos</Link>
        </> 
      } 
    </div>
  )
}

export default CartContainer