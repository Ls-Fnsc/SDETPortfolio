//import logo from './logo.svg';
import './App.css';
import { About } from './components/About/About';
import { CaseStudy } from './components/caseStudy/CaseStudy';
import { Contact } from './components/Contact/Contact';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Tools } from './components/Tools/Tools';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Tools />
      <CaseStudy />
      <Contact />
    </div>
  );
}

export default App;
