import './projects.css';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import sampleImage from '../../assets/landing-bg.png';
import Card from '../../components/Card';

const allprojects = [
  { id: 1, name: 'projecto Aurora', type: 'Tipologia T1', image: sampleImage },
  { id: 2, name: 'projecto Prisma', type: 'Tipologia T2', image: sampleImage },
  { id: 3, name: 'projecto Lúmen', type: 'Tipologia T3', image: sampleImage },
  { id: 4, name: 'projecto Eclipse', type: 'Tipologia T4', image: sampleImage },
  { id: 5, name: 'projecto Solaris', type: 'Tipologia T5', image: sampleImage },
  { id: 6, name: 'projecto Atlas', type: 'Tipologia T5', image: sampleImage },
  { id: 7, name: 'projecto Neptune', type: 'Tipologia T4', image: sampleImage },
];

const latestprojects = allprojects.slice(-6);

export default function Projects() {
  return (
    <div className="projects">
        <Grid container className="landing__grid">
            <Grid size={{ xs: 12, md: 1 }} />
            <Grid size={{ xs: 12, md: 10 }} className="landing__content">
                <div className="title">
                  <h2>Os nossos projectos</h2>
                </div>

                <Grid container spacing={5} className="projects__grid">
                  {latestprojects.map((project) => (
                    <Grid key={project.id} item size={{ xs: 12, sm: 6, md: 4 }}>
                        <Card name={project.name} type={project.type} image={project.image} />
                    </Grid>
                  ))}
                </Grid>
                <div className="projects__action">
                    <Button variant="contained">Ver todos os projectos</Button>
                </div>
            </Grid>
            <Grid size={{ xs: 12, md: 1 }} />
        </Grid>    
    </div>
  );
}
