import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import Dashboard from './pages/Dashboard';
import Medichine from './pages/Medichine';
import PrintInvoice from './pages/PrintInvoice';
import DomainInsight from './pages/DomainInsight';
import Profile from './pages/Profile';
import Transactions from './pages/Transactions';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/medicine" element={<Medichine />} />
        <Route path='/domain-insight' element={<DomainInsight />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path="/print-invoice" element={<PrintInvoice />} />
      </Routes>
    </Router>
  );
}

export default App;
