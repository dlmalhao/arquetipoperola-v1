import './about.css';
import Grid from '@mui/material/Grid';

export default function About() {
  return (
    <div className="about">
      <Grid container className="about__grid">
        <Grid size={{ xs: 12, md: 1 }} />
        <Grid size={{ xs: 12, md: 10 }} className="about__content">
          <div className="title">
            <h2>Sobre Nós</h2>
          </div>
          <div className="description">
            <span>Acreditamos que a arquitetura vai além do betão e das linhas retas.</span>
            <span>Projetamos habitações que unem a máxima eficiência construtiva a uma identidade única, moldada para cada família</span>
          </div>          
            <Grid container spacing={5} className="about__cards">
                <Grid size={{ xs: 12, md: 6, xl: 4 }}>
                    <div className="card">
                      <h3>Custos controlados</h3>
                      <p>Habitações planeadas para otimizar custos sem nunca abdicar da qualidade, segurança e design contemporâneo</p>
                    </div>
                </Grid>
                <Grid size={{ xs: 12, md: 6, xl: 4 }}>
                  <div className="card">
                    <h3>Prontas a Entrar</h3>
                    <p>O nosso método de construção  permite-nos entregar 4 habitações por mês, prontas a habitar.</p>
                  </div>
                </Grid>
                <Grid size={{ xs: 12, md: 6, xl: 4 }}>
                  <div className="card">
                    <h3>Flexibilidade</h3>
                    <p>Soluções flexíveis para todas as famílias, com projetos disponíveis nas tipologias de T1 a T5.</p>
                  </div>
                </Grid>
            </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 1 }} />
      </Grid>
    </div>
  );
}