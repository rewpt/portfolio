import './App.css';
import Contact from './components/Contact';
import Nav from './components/Nav/Nav';
import ProjectCarousel from './components/ProjectCarousel';
import TopBanner from './components/TopBanner';

function App() {
  return (
    <div className="App">
      <Nav />
      <TopBanner />
      <ProjectCarousel />
      <Contact />
      
    </div>
  );
}

export default App;
