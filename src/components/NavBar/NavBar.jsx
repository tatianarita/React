import { Link, NavLink } from "react-router-dom"
import CartContainer from "../CartContainer/CartContainer"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/categoria:id">Tienda</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/categoria/plantas">Plantas</Link>
        <Link className="nav-link" to='/categoria/macetas'>Macetas</Link>
        <NavLink className="nav-link" to='/carrito'><CartContainer/></NavLink>
        
      </div>
    </div>
  </div>
</nav>
</div>
  )
}

export default NavBar