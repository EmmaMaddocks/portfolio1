import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Title from './components/Title'
import Contact from './components/Contact';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Title />
    <Nav/>
    <About />
    <Experience/>
    <Projects/>
    <Contact/>


<Routes>
          <Route path="/"  />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
