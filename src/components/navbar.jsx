import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegação principal">
      <div className="navbar__brand">
        <Link to="/">
          <img src={logo} alt="Logo do site" className="navbar__logo" />
        </Link>
      </div>
      <div className="navbar__links">
        <Link to="/#home">Início</Link>
        <Link to="/#about">Sobre Nós</Link>
        <Link to="/#models">Modelos</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/#contact">Contacto</Link>
      </div>
    </nav>
  );
}