import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Account from './pages/Account';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <AnimatePresence>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/account" element={<Account/>} />
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;
