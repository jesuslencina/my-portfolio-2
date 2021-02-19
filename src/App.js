//CSS
import './css/mystyles.css';

//ANIMATE
import '../node_modules/animate.css/animate.compat.css';
import '../node_modules/animate.css/animate.min.css';

//COMPONENTS
import { DataProvider } from './components/Context';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Knowledge from './components/Knowledge/Knowledge';
import Education from './components/History/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Credits from './components/Credits/Credits';

//FUNCTION
function App() {
  window.location.replace('https://jesuslencina.vercel.app/');

  return (
    <div className="App">
      <DataProvider>
        <Nav />
        <Hero />
        <About />
        <Knowledge />
        <Education />
        <Projects />
        <Contact />
        <Credits />
      </DataProvider>
    </div>
  );
}

export default App;
