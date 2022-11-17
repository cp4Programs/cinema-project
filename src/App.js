import './styles/App.css';
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>

  )
}

export default App;
