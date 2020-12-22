//CSS
import './css/mystyles.css';

//COMPONENTS
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

//FUNCTION
function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
    </div>
  );
}

export default App;
