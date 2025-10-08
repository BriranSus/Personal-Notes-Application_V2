import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AddPage from './pages/AddPage';
import ArchivePage from './pages/ArchivePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import { getUserLogged, putAccessToken } from './utils/network-data';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      const { error, data } = await getUserLogged();
      if (!error) setAuthedUser(data);
      setInitializing(false);
    }
    fetchUser();
  }, []);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { error, data } = await getUserLogged();
    if (!error) setAuthedUser(data);
    navigate('/');
  }

  function onLogout() {
    localStorage.removeItem('accessToken');
    setAuthedUser(null);
    navigate('/login');
  }

  if (initializing) return <p>Loading...</p>;

  return (
    <>
      <Routes>
        {!authedUser ? (
          <>
            <Route path="/login" element={<LoginPage loginSuccess={onLoginSuccess} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
          </>
        ) : (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/Notes/new" element={<AddPage />} />
            <Route path="/Notes/:id" element={<DetailPage />} />
            <Route path="/Archive" element={<ArchivePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/login" element={<LoginPage loginSuccess={onLoginSuccess} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
