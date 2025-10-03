import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/Add" element={<HomePage/>}></Route>
        <Route path="/Notes/:id" element={<DetailPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
