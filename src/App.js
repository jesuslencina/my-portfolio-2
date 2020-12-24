//CSS
import './css/mystyles.css';

//COMPONENTS
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Knowledge from './components/Knowledge/Knowledge';
import Education from './components/History/Education';
import Projects from './components/Projects/Projects';

//FUNCTION
function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Knowledge />
      <Education />
      <Projects />
    </div>
  );
}

export default App;
