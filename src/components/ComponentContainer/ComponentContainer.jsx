import {Title} from "../Title/Title"
import NavBar from "../NavBar/NavBar"
const Logo = () => {
    return(
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTT4LMyPjeMbIZngFO_WfRBOvEl7ACiK5kmw&usqp=CAU" alt="logo"/>
    </div>)
  }

const ComponentContainer = ({greeting}) => {
  return (
    <div>
    <Logo/>
    <Title 
    titulo="VIVER" 
    subtitulo='VIbra VERde'/>
    <NavBar/>
    <p>{greeting}</p>
    </div>
  )
}

export default ComponentContainer
