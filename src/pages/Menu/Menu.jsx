import 'bootswatch/dist/cosmo/bootstrap.min.css';
import { useState } from 'react';
function Menu() {

  const [activateMenuApartment, setActivateMenuApartment] = useState(false);
  const [activateMenuSpot, setActivateMenuSpot] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Allocate PkSpot</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link dropdown-toggle" onClick={() => setActivateMenuSpot(!activateMenuSpot)} data-bs-toggle="dropdown" 
                href="#" role="button" aria-haspopup="true" aria-expanded="false">Vaga</a>
                                <div className={
                  activateMenuSpot ? 'dropdown-menu show' : 'dropdown-menu'
                }>
                  <a className="dropdown-item" href="/listspot">Listar</a>
                  <a className="dropdown-item" href="/parkingspot">Cadastrar</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" onClick={() => setActivateMenuApartment(!activateMenuApartment)} data-bs-toggle="dropdown" 
                href="#" role="button" aria-haspopup="true" aria-expanded="false">Apartamento</a>
                <div className={
                  activateMenuApartment ? 'dropdown-menu show' : 'dropdown-menu'
                }>
                  <a className="dropdown-item" href="/listapartment">Listar</a>
                  <a className="dropdown-item" href="/apartment">Cadastrar</a>
                  
                </div>
              </li>
            </ul>
            <form className="d-flex">
              
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Menu;