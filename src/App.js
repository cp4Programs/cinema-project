import './styles/App.css';
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThemeContextProvider from './contexts/ThemeContext'
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import MovieDetails from './pages/MovieDetails';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

function App() {

  const apiKey = process.env.REACT_APP_API_KEY
  const baseUrl = process.env.REACT_APP_BASE_URL

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Header />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Homepage apiKey={apiKey} baseUrl={baseUrl} />} />
          <Route path="/moviedetails/:movieid" element={<MovieDetails apiKey={apiKey} baseUrl={baseUrl} />} />
        </Routes>
        <Footer />

      </ThemeContextProvider>
    </BrowserRouter>

  )
}

export default App;
