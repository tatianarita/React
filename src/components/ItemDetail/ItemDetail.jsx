import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
    const onAdd = (cant) => {
        console.log('seleccionaste: ', cant)
    }
  return (
    <div className='container border border-3 border-primary rounded'>
        <div className='row'>
            <div className='col'>
                <img className='w-50'src={product.foto} alt="foto del producto" />
                <h3>Nombre: {product.nombre}</h3>
                <h4>Categoría: {product.categoria}</h4>
                <h4>Precio: {product.precio}</h4>
            </div>
            <div className='col'>
                <ItemCount
                    stock={10}
                    initial={1}
                    onAdd={onAdd}
                />
            </div>

        </div>
    </div>
  )
}
  

export default ItemDetail