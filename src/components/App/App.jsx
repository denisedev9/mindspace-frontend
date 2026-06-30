import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Main from '../Main/Main.jsx'
import About from '../About/About.jsx'
import Articles from '../Articles/Articles.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="*" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App