import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import NextGenReporting from './pages/NextGenReporting';
import Layout from './components/Layout';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-gray-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/nextgenreporting" element={<NextGenReporting />} />
            </Route>
          </Routes>
          <FloatingContact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
