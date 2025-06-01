import Container from './components/Container';
import Header from './components/Header';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import useImagePreloader from './hooks/useImagePreloader';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import your images
import profilepic from './assets/profile-pic.png';
import josecruz from './assets/josecruz.png';

function AppContent() {
  const [screenLoading, setScreenLoading] = useState(true);
  
  // List all images that need to be preloaded
  const imagesToPreload = [profilepic, josecruz];
  
  const { imagesLoaded } = useImagePreloader(imagesToPreload);

  useEffect(() => {
    // Only hide loading screen when images are loaded
    if (imagesLoaded) {
      // Optional: Add a small delay to ensure smooth transition
      setTimeout(() => {
        setScreenLoading(false);
      }, 500);
    }
  }, [imagesLoaded]);

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

export default App;