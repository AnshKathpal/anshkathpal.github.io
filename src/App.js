import './App.css';
import  {Navbar}  from './Components/Navbar';
import {About} from "./pages/About"
import {Home} from "./pages/Home"
import {Skills} from "./pages/Skills"
import {Projects} from "./pages/Projects"
import {Contact} from "./pages/Contact"
import { TextSphere } from "./Components/TextSphere"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
