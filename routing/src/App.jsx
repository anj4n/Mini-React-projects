import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Navbar from './Components/Navbar';
import Error from './pages/Error';
import Men from './pages/Men';
import Women from './pages/Women';
import Footer from './Components/Footer';
import Buttons from './Components/Buttons';



function App() {
  return (
    <div>
      <Navbar/>
      <Buttons/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/product' element={<Product/>}>
         <Route path='men' element={<Men/>}></Route>
         <Route path='women' element={<Women/>}></Route>
        </Route>
        <Route path='/*' element={<Error/>}></Route>

      </Routes>
      <Footer>

      </Footer>
    </div>
  )
}

export default App
