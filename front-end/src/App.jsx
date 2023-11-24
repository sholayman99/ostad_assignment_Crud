/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import RegistrationPage from './pages/RegistrationPage';
import AppNavBar from './components/AppNavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
    <AppNavBar />
     <Routes>

     <Route path='/' element={<ListPage />} />
     <Route path='/register' element={< RegistrationPage/>} />

     </Routes>
     <Footer />
    </BrowserRouter>
  );
};

export default App;