// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import AddItem from './components/pages/AddItem';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-item" element={<AddItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
