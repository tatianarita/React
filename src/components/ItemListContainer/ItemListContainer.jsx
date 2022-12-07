import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import gFetch from "../../helpers/gFetch"
import ItemList from "../ItemList/ItemList"
import Title from "../Title/Title"


const Logo = () => {
    return(
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTT4LMyPjeMbIZngFO_WfRBOvEl7ACiK5kmw&usqp=CAU" alt="logo"/>
    </div>)
  }

const ItemListContainer = ({greeting}) => {
  const [products, setProduct] = useState([])  
  const [loading, setLoading] = useState(true)
  const {id} = useParams()
  console.log(id)

  useEffect(()=>{
    if (id) {
      gFetch()
      .then(data => setProduct(data.filter(prod => prod.categoria === id)))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
      
    } else{
      gFetch()
      .then(data => setProduct(data))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }
  }, [id])
  
  return (
    <div>  
      <Logo/>
      <Title 
      titulo="VIVER" 
      subtitulo='VIbra VERde'/>
      <p>{greeting}</p>

    {loading ?
        <h2>loading ...</h2>
      :   
        <ItemList products={products}/>
      }
    
    </div>
  )
}

export default ItemListContainer
