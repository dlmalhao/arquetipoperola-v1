import { useParams, Link } from 'react-router-dom';
import { useMemo } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import { getProjectById } from './projectsData';
import './projects.css';
import '@coreui/coreui/dist/css/coreui.min.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = useMemo(() => getProjectById(id), [id]);

  if (!project) {
    return (
      <div className="projects">
        <Grid container className="landing__grid">
          <Grid size={{ xs: 12, md: 1 }} />
          <Grid size={{ xs: 12, md: 10 }} className="landing__content">
            <p>Projeto não encontrado.</p>
            <Link to="/projects">Voltar aos projetos</Link>
          </Grid>
          <Grid size={{ xs: 12, md: 1 }} />
        </Grid>
      </div>
    );
  }

  return (
    <div className="projects">
      <Grid container className="landing__grid">
        <Grid size={{ xs: 1, md: 1 }} />
        <Grid size={{ xs: 10, md: 10 }} className="landing__content">
          <Grid container spacing={4} className="projects__grid">
            <Grid item size={{ xs: 12, md: 6 }}>
              <div className="project-detail__carousel">
                <CCarousel controls indicators>
                  {project.images.map((image, index) => (
                    <CCarouselItem key={`image-${index}`}>
                      <CImage className="d-block w-100" src={image} alt={`${project.name} ${index + 1}`} />
                    </CCarouselItem>
                  ))}
                </CCarousel>
              </div>
            </Grid>
            <Grid className="project-detail__container" item size={{ xs: 12, md: 6 }}>
              <div className="project-detail__info">
                <div>
                  <div className="title">
                    <h2>{project.name}</h2>
                  </div>
                  <div className="project-detail__type">
                      <p className="project-detail__type">{project.type}</p>
                  </div>
                  <div className="project-detail__description">
                    <p>{project.description}</p>
                  </div>
                </div>
                <Button component={Link} to="/projetos" variant="contained">
                  Voltar aos projetos
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 1, md: 1 }} />
      </Grid>
    </div>
  );
}
