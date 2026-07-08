import './navbar.css';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegação principal">
      <div className="navbar__brand">
        <img src={logo} alt="Logo do site" className="navbar__logo" />
      </div>
      <div className="navbar__links">
        <a href="#">Início</a>
        <a href="#">Sobre Nós</a>
        <a href="#">Modelos</a>
        <a href="#">Projetos</a>
        <a href="#">Contacto</a>
      </div>
    </nav>
  );
}