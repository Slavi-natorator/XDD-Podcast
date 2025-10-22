
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import './Components/Navbar.css'; // Make sure to import the CSS file
import Home from './Components/pages/Home.js';
import About from './Components/pages/About.js';
import Contact from './Components/pages/Contact.js';
import Footer from './Components/Footer.js';
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;