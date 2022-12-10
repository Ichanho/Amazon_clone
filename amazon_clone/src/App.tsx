import React from 'react';
import Header from './Header';
import Home from "./Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Basket from './Basket';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path='' element={<Header />} /> */}
          <Route path='/' element={<Home />} />
          <Route path="/basket" element={<Basket />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
