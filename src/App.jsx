import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <div className="row">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/hakkimizda' element={<About />} />
            <Route path='/iletisim' element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App