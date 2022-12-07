import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({ product }) => {
  return (
    <div
        style={{ marginLeft: 100}}
        className='col-nd-3'
    >
        <div className="card w-100 mt-5">
            <div className="card-header">
                {`${product.nombre} - ${product.categoria}`}
            </div>
            <div className="card-body">
                <img src="{product.foto}" alt="" className='w-50' />
                {product.precio}
            </div>
        <div className="card-footer">
            <Link to={`/detalle/${product.id}`}>
                <button className="btn btn-outline-primary btn-block">
                Descripción
                </button>
            </Link>
        </div>
        </div>
    </div>
     )
    }

export default Item