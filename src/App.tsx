import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import WelcomePage from './components/WelcomePage/WelcomePage';
import { Footer } from './components/footer';
import { NotFound } from 'components/NotFound';

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-[calc(100vh_-_140px)]">
        <Routes>
          <Route path="/sign-in" element={<SignInForm />}></Route>
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/main" element={<MainPage />}></Route>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
