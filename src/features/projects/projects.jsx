import './projects.css';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import { allProjects } from './projectsData';

const latestProjects = allProjects.slice(-6);

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
                  {latestProjects.map((project) => (
                    <Grid key={project.id} item size={{ xs: 12, sm: 6, md: 4 }}>
                        <Link to={`/projetos/${project.id}`} className="project-card__link">
                            <Card
                              name={project.name}
                              type={project.type}
                              image={project.images?.[0]}
                            />
                        </Link>
                    </Grid>
                  ))}
                </Grid>
                <div className="projects__action">
                    <Button component={Link} to="/projetos" variant="contained">
                      Ver todos os projectos
                    </Button>
                </div>
            </Grid>
            <Grid size={{ xs: 12, md: 1 }} />
        </Grid>    
    </div>
  );
}
