// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Inventory from './components/Inventory';
import AddInformationForm from './components/AddInformationForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/add-product" element={<AddInformationForm />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
