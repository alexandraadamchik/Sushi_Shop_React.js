
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './App.css'
import Home from "./pages/Home"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import ContextContainer from "./components/ContextContainer"
function App() {

  return (
    <div className="App"> 
      <BrowserRouter>
        <ContextContainer>
          <Navbar/>
        </ContextContainer>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/> 
          <Route path="/about" element={<About/>}/> 
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
