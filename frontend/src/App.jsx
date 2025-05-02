import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar.jsx';
// import Background from './Background-Ovals.jsx'
import DarkMode from './darkMode.jsx';
import InputOutput from './InputOutput.jsx';
import Footer from './Footer.jsx';
import About from './About.jsx';
import Sustainability from './Sustainability.jsx';
import Faq from "./faq.jsx" 

function App() {
  return (
    <Router>
      {/* <Background /> */}
      <NavBar />
      <DarkMode />
      <Routes>
        <Route path="/" element={<InputOutput />} />
        <Route path="/about" element={<About />} />
        <Route path="/Sustainability" element={<Sustainability />} />
        <Route path="/faq" element={<Faq />} />
        {/* <Route path="/SpamDetection" element={<SpamDetection />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
