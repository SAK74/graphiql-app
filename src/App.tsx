import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import { Footer } from './components/footer';
import { NotFound } from 'components/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignInForm />}></Route>
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/" element={<MainPage />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
