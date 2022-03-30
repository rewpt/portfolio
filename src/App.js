import './App.css';
import Contact from './components/Contact';
import Nav from './components/Nav';
import ProjectCarousel from './components/ProjectCarousel';
import TopBanner from './components/TopBanner';
import About from './components/About';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="App flex flex-col w-full">
      <Nav />  
      <TopBanner />
      <ProjectCarousel />
      <About />
      <TechStack />
      <Contact />    
    </div>
  );
}

export default App;
