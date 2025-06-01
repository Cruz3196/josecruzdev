import Container from './components/Container';
import Header from './components/Header';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function AppContent() {
  const [screenLoading, setScreenLoading] = useState(true);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {screenLoading ? (
        <div className='flex justify-center items-center h-screen bg-base-200'>
          <span className="loading loading-bars h-10 w-10 sm:h-15 sm:w-15"></span>
        </div>
      ) : (
        <div className='bg-base-200'>
          <Router>
            <Container>
              <Header/>
              <Routes>
                <Route path='/' element={<Home/>}/>
              </Routes>
            </Container>
          </Router>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App