import './App.css';
import Contact from './components/Contact';
import Nav from './components/Nav';
import ProjectCarousel from './components/ProjectCarousel';
import TopBanner from './components/TopBanner';

function App() {
  return (
    <div className="App flex flex-col">
      <TopBanner />
      <ProjectCarousel />
      <Contact />    
      <Nav />  
    </div>
  );
}

export default App;
