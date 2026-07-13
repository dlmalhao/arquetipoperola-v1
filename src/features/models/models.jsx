import './models.css';
import Grid from '@mui/material/Grid';
import sampleImage from '../../assets/landing-bg.png';
import Card from '../../components/Card';

const allmodels = [
  { id: 1, name: 'modelo Aurora', type: 'Tipologia T1', image: sampleImage },
  { id: 2, name: 'modelo Prisma', type: 'Tipologia T2', image: sampleImage },
  { id: 3, name: 'modelo Lúmen', type: 'Tipologia T3', image: sampleImage },
  { id: 4, name: 'modelo Eclipse', type: 'Tipologia T4', image: sampleImage },
  { id: 5, name: 'modelo Solaris', type: 'Tipologia T5', image: sampleImage },
  { id: 6, name: 'modelo Atlas', type: 'Tipologia T5', image: sampleImage },
  { id: 7, name: 'modelo Neptune', type: 'Tipologia T4', image: sampleImage },
];

const latestmodels = allmodels.slice(-6);

export default function Models() {
  return (
    <div id="models" className="models">
        <Grid container className="landing__grid">
            <Grid size={{ xs: 12, md: 1 }} />
            <Grid size={{ xs: 12, md: 10 }} className="landing__content">
                <div className="title">
                  <h2>Os nossos modelos</h2>
                </div>

                <Grid container spacing={5} className="models__grid">
                  {latestmodels.map((model) => (
                    <Grid key={model.id} item size={{ xs: 12, sm: 6, md: 4 }}>
                        <Card name={model.name} type={model.type} image={model.image} />
                    </Grid>
                  ))}
                </Grid>
            </Grid>
            <Grid size={{ xs: 12, md: 1 }} />
        </Grid>    
    </div>
  );
}
