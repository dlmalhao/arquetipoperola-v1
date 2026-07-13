import './App.css';
import Box from '@mui/material/Box';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Landing from './features/landing/landing.jsx';
import About from './features/about/about.jsx';
import Projects from './features/projects/projects.jsx';
import Models from './features/models/models.jsx';
import Contact from './features/contact/contact.jsx';

function App() {
  return (
    <Box>
      <Navbar />
      <Landing />
      <About />
      <Models />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
