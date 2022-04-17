import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Page from './pages/Page';
import PageContent from './pages/PageContent';


function App() {
  return (
    <BrowserRouter> 
      <Navigation />
      <Routes>
         <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
   
  );
}

export default App;
