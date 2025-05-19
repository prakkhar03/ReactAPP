import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Tours } from './pages/Tours';
import { Services } from './pages/Services';
import LandingPage from './pages/LandingPage.jsx';
import './css/styles.css';
import Navbar  from './components/Navbar';

const App = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <BrowserRouter>

      <Navbar />

        <main style={{ marginTop: '4rem' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Tours" element={<Tours />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
