import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AddPage from './pages/AddPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/Notes/new" element={<AddPage/>}></Route>
        <Route path="/Notes/:id" element={<DetailPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
