import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact'
import Blog from './Components/Blog/Blog';


function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='blog' element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
