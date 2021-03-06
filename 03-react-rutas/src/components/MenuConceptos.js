import React from "react";
import { Link, NavLink } from "react-router-dom";

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Menu con enlaces html (no recomendado)</span>
          <a href="/"> Home </a>
          <a href="/acerca"> Acerca </a>
          <a href="/contacto"> Contacto </a>
        </li>
        <li>
          <span>Componente Link (recomendado)</span>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/no-existe">Error 404</Link>
        </li>
        <li>
          <span>Componente NavLink</span>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink exact to="/acerca" activeClassName="active">
            Acerca
          </NavLink>
          <NavLink exact to="/contacto" activeClassName="active">
            Contacto
          </NavLink>
        </li>
        <li>
          <span>Parametros</span>
          <NavLink exact to="/usuario/saul">
            Saul
          </NavLink>
        </li>
        <li>
          <span>Parametros de cosulta</span>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <span>Redirecciones</span>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <span>Rutas anidadas: </span>
          <Link to="/reactTopics">React</Link>
        </li>
        <li>Rutas privadas: </li>
        <Link to="/login">Login</Link>
        <Link to ="/dashboard">Dashboard</Link>

      </ol>
    </nav>
  );
};

export default MenuConceptos;
