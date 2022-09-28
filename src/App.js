// import './App.css';
import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
// import { ImageUpload } from './components/ImageUpload';
import Gallery from './components/Gallery';
// import NavBar from './components/NavBar';
import Main from './components/Main';
// import { Router } from 'express';
const App = () => {
  return (
    <>
      <Routes>
        {/*  MAIN - ALL pirates*/}
        <Route path='/images' element={<Main/>} />
        {/* REDIRECT */}
        <Route path="*" element={<Navigate to="/images" replace />} />
        {/* SHOW ONE*/}
        <Route path="/images/show" element={<Gallery />} />
        {/* <Link to='/images/show/:id'>hello</Link> */}
      </Routes>
    </>
  );
};

export default App;
