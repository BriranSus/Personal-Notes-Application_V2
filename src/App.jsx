import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AddPage from './pages/AddPage';
import ArchivePage from './pages/ArchivePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import { putAccessToken } from './utils/network-data'
import RegisterPage from './pages/RegisterPage';
import { useState } from 'react';

function App() {
  const [authedUser, setAuthedUser] = useState(null);

  function onLoginSuccess({ accessToken }){
    putAccessToken(accessToken);
    setAuthedUser(true)
  }

  return (
    <BrowserRouter>
      <Routes>
        {!authedUser ? (
          <>
            <Route path="/login" element={<LoginPage loginSuccess={onLoginSuccess}/>}/>
            <Route path="*" element={<LoginPage loginSuccess={onLoginSuccess}/>}/>
            <Route path='/register' element={<RegisterPage />}/>
          </>
        ) : (
          <>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/Notes/new" element={<AddPage/>}></Route>
            <Route path="/Notes/:id" element={<DetailPage/>}></Route>
            <Route path="/Archive" element={<ArchivePage/>}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
