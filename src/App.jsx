import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrintInvoice from './pages/PrintInvoice';
import Profile from './pages/Profile';
import Transactions from './pages/Transactions';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path="/print-invoice" element={<PrintInvoice />} />
      </Routes>
    </Router>
  );
}

export default App;
