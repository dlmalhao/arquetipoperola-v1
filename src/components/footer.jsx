import './footer.css';
import Grid from '@mui/material/Grid';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <Grid container className="footer__grid">
        <Grid size={{ xs: 12, md: 1 }} />
        <Grid container size={{ xs: 12, md: 10 }} className="footer__content">
          <Grid item size={{ xs: 12, md: 6 }} className="footer__brand">
            <img src={logo} alt="Logo do site" className="footer__logo" />
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }} className="footer__links">
            <a href="#">Início</a>
            <a href="#">Sobre Nós</a>
            <a href="#">Modelos</a>
            <a href="#">Projetos</a>
            <a href="#">Contacto</a>
            <p className="footer__copyright">© 2026 Arquetipo</p>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 1 }} />
      </Grid>
    </footer>
  );
}
