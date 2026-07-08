import './_landing.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function Landing() {
  return (
    <div className="landing">
      <Grid container className="landing__grid">
        <Grid size={{ xs: 12, md: 1 }} />
        <Grid size={{ xs: 12, md: 10 }} className="landing__content">
          <div className="text-component">
            <h1>A evolução da habitação é <span className="break-line">industrial</span></h1>
            <h3>Projetamos e construímos casas modulares de alta performance com custos rigidamente controlados. Arquitetura inteligente, produzida dentro de portas e entregue pronta a habitar</h3>
            <Button variant="contained">Ver Modelos e Tipologias</Button>
          </div>
        </Grid>
        <Grid size={{ xs: 12, md: 1 }} />
      </Grid>
    </div>
  );
}