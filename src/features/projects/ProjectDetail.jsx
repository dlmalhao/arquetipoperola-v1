import { useParams, Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import Grid from '@mui/material/Grid';
import { MobileStepper, Button } from '@mui/material';
import { getProjectById } from './projectsData';
import './projects.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = useMemo(() => getProjectById(id), [id]);
  const [activeStep, setActiveStep] = useState(0);

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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % project.images.length);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="projects">
      <Grid container className="landing__grid">
        <Grid size={{ xs: 12, md: 1 }} />
        <Grid size={{ xs: 12, md: 10 }} className="landing__content">
          <Grid container spacing={4} className="projects__grid">
            <Grid item size={{ xs: 12, md: 6 }}>
              <div className="project-detail__carousel">
                <img src={project.images[activeStep]} alt={`${project.name} ${activeStep + 1}`} className="project-detail__image" />
                <MobileStepper
                  steps={project.images.length}
                  position="static"
                  activeStep={activeStep}
                  nextButton={
                    <Button size="small" onClick={handleNext} disabled={project.images.length <= 1}>
                      Próximo
                    </Button>
                  }
                  backButton={
                    <Button size="small" onClick={handleBack} disabled={project.images.length <= 1}>
                      Anterior
                    </Button>
                  }
                />
              </div>
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }}>
              <div className="project-detail__info">
                <div className="title">
                  <h2>{project.name}</h2>
                </div>
                <div className="project-detail__type">
                    <p className="project-detail__type">{project.type}</p>
                </div>
                <div className="project-detail__description">
                  <p>{project.description}</p>
                </div>
                
                <Link to="/projetos" className="project-detail__link">Voltar aos projetos</Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 1 }} />
      </Grid>
    </div>
  );
}
