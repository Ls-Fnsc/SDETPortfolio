//import logo from './logo.svg';
import './App.css';
import { About } from './components/About/About';
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
    </div>
  );
}

export default App;
