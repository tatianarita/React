import { Link } from 'react-router-dom'
import { React, useContext, useState  } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({product}) => {
    const [isCant, setIsCant] = useState (false)
    const {agregarCarrito} = useContext(CartContext)

    const onAdd = (cant) => {
        agregarCarrito({ ...product, cant })
        setIsCant(true)
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
                {isCant ?
                    <>
                    <Link to= '/carrito'>
                    <button className='btn btn-primary'>Ir al carrito</button>
                    </Link>
                    <Link to= '/'>
                    <button className='btn btn-primary'>Seguir comprando</button>
                    </Link>
                    </>
                :
                    <ItemCount
                        stock={product.stock}
                        initial={1}
                        onAdd={onAdd}
                    />
                }
            </div>

        </div>
    </div>
  )
}
  

export default ItemDetail