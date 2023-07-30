import React ,{useRef} from 'react'
import { BrowserRouter as Router , Routes , Route, Link } from 'react-router-dom'
import Home from "./components/Home";
import Contact from './components/Contact';
import  Projects from './components/Projects';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';

const App = () => {
  return (
   <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
    <Footer/>
   </Router>
  )
}

export default App
