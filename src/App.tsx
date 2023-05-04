import React from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm';
import { Route, Routes } from 'react-router-dom';
import SignInForm from './components/SignInForm';

function App() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignInForm />}></Route>
      <Route path="/sign-up" element={<SignUpForm />} />
    </Routes>
  );
}

export default App;
