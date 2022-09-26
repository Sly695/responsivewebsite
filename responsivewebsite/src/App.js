import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import ServicePage from './Pages/ServicePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioPage from './Pages/PortfolioPage';
import ContactPage from './Pages/ContactPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} exact />
        <Route path="/Portfolio" element={<PortfolioPage/>} exact />
        <Route path="/Services" element={<ServicePage/>} exact />
        <Route path="/Contact" element={<ContactPage/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
