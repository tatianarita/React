import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Tienda</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Plantas</a>
        <a className="nav-link" href="#">Macetas</a>
        <a className="nav-link" href="#">Jardines Verticales</a>
        <a className="nav-link disabled"><CartWidget></CartWidget><div>4</div></a>
        
      </div>
    </div>
  </div>
</nav>
</div>
  )
}

export default NavBar