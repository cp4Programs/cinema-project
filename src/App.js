import './styles/App.css';
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThemeContextProvider from './contexts/ThemeContext'

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Header />

      </ThemeContextProvider>
    </BrowserRouter>

  )
}

export default App;
