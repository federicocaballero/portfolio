import './App.css';
import AboutMe from './components/AboutMe';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import ProjectsContainer from './containers/ProjectsContainer';

function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <AboutMe/>
    <Skills/>
    <ProjectsContainer/>
    </>
  );
}

export default App;
