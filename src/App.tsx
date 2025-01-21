import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FAQ } from './pages/FAQ';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Community } from './pages/Community';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/community" element={<Community />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;