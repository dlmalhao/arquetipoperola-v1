import './App.css';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Landing from './features/landing/landing.jsx';
import About from './features/about/about.jsx';
import Projects from './features/projects/projects.jsx';
import ProjectsPage from './features/projects/ProjectsPage.jsx';
import ProjectDetail from './features/projects/ProjectDetail.jsx';
import Models from './features/models/models.jsx';
import Contact from './features/contact/contact.jsx';

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Landing />
                <About />
                <Models />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/projetos/:id" element={<ProjectDetail />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
