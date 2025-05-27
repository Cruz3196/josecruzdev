import Container from './components/Container';
import Header from './components/Header';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  return (
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
  )
}

export default App
