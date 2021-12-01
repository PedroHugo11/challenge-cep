import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { Home } from './components/home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:cep_url" element={<Home />} />
        </Routes>
        <GlobalStyle />   
      </BrowserRouter> 
    </>
  );
}

export default App;
