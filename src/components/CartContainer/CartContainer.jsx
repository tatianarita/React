import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'


const CartContainer = () => {
  const[ dataForm, setFormData] = useState({
    nombre:'',
    email:'',
    confirmaemail: '',
    telefono:''
  })
  const [nroCompra, setNroCompra] = useState('')
  const { cartList, vaciarCarrito, precioTotal, eliminarProd} = useCartContext()

  const addOrder = (e)=>{
    e.preventDefault()
    const order = {}
    order.buyer= dataForm
    order.price= precioTotal()
    order.items= cartList.map(({id,precio,nombre,cant})=>({id,precio,nombre,cant}))
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    
    if ((dataForm.email !== dataForm.confirmaemail) || (dataForm.nombre.length == 0) || (dataForm.telefono.length == 0)){ 
      alert ('Debe completar sus datos para avanzar');
      return
    }
    function compra (order) {
      setNroCompra(`Su Nro de compra es: ${order.id}`)
    }

    addDoc(queryCollection, order)
      .then(order => {compra(order)})
      .catch(err=> console.log(err))
      .finally(()=> vaciarCarrito())
}

const handleOnChange=(e)=>{
  setFormData({
    ...dataForm,
    [e.target.name]:e.target.value
  })
}
  
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
                        name='nombre'
                        value={dataForm.nombre}
                        placeholder="ingrese su nombre"
                        />  
                        <input type="text" 
                        onChange={handleOnChange}
                        name='email'
                        value={dataForm.email}
                        placeholder="ingrese su mail"
                        /> 
                        <input type="text" 
                        onChange={handleOnChange}
                        name='confirmaemail'
                        value={dataForm.confirmaemail}
                        placeholder="confirme su mail"
                        />    
                        <input type="number" 
                        onChange={handleOnChange}
                        name='telefono'
                        value={dataForm.telefono}
                        placeholder="ingrese su teléfono"
                        />
                        <button className='btn btn-outline-success'>Finalizar compra</button>
                        </form>
                        
                        <button className= "btn-btn-danger" onClick={vaciarCarrito} >Vaciar Carrito</button>
       </>
       :
        <>
        <h2>No hay contenido en su carrito</h2>
        <p>{nroCompra}</p>
        <Link to= '/'>Productos</Link>
        </> 
      } 
    </div>
  )
}

export default CartContainer