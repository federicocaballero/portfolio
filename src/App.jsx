import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import ProjectsContainer from './containers/ProjectsContainer';
import Contact from './components/Contact'
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Skills/>
    <ProjectsContainer/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
