import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore"
import ItemList from "../ItemList/ItemList"
import Title from "../Title/Title"
import Loading from "../Loading/Loading"


const Logo = () => {
    return(
    <div>
      <img src="/public/logopeque.png" alt="logo"/>
    </div>)
  }

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]) 
  const [loading, setLoading] = useState(true)
  const {id} = useParams()

  useEffect(()=>{
      const db = getFirestore ()
      const queryCollection = collection (db, 'products')
      const queryFiltrada = id ? query (queryCollection, where ('categoria', '==',id)) : queryCollection
      
        getDocs (queryFiltrada)
        .then (data => setProducts(data.docs.map (product =>({ id:product.id, ...product.data() }))))
        .catch(err=> console.log(err))
        .finally(()=> setLoading(false))
  }, [id])
  
  return (
    <div>  
      <Logo/>
      <Title 
      titulo="VIVER" 
      subtitulo='VIbra VERde'/>
      <p>{greeting}</p>

        {loading ?
            <Loading/>
          :   
            <ItemList products={products}/>
        }
    </div>
  )
}

export default ItemListContainer
