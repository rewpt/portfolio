import './App.css';
import Contact from './components/Contact';
import Nav from './components/Nav';
import ProjectCarousel from './components/ProjectCarousel';
import TopBanner from './components/TopBanner';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="flex justify-center w-full bg-slate-200">
      <div className="w-[90%]">
      <TopBanner />
      </div>
      </div>
      <div className="flex justify-center w-full bg-slate-300">
      <div className="w-[90%]">
      <ProjectCarousel path="/projects" />
      </div>
      </div>
      <div className="flex justify-center w-full bg-slate-200">
      <div className="w-[90%]">
      <Contact />
      </div>
      </div>
      
    </div>
  );
}

export default App;
