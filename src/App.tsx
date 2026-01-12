import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { ModelTestPage } from './pages/ModelTestPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test-3d" element={<ModelTestPage />} />
      </Routes>
    </BrowserRouter>
  );
}
