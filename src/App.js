import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Videos from './components/Videos';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/videos?category=free'/>
        <Route path='/upload'/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
