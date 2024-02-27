import React, {useState, useContext} from 'react'
import "../styles/Navbar.css"
import {Link} from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu'; 
import Logo from "../images/logo.png";
import {MyContext} from "../components/Context"

export default function Navbar() {

    //const [mobileMenu, setMobileMenu] = useState(false)
    const state = useContext(MyContext)
    const toggleNavbar = () => {
        state.setMobileMenu(!state.mobileMenu)
    }
  return (
    <div className="navbar">
        <div className="logo" id={state.mobileMenu ? "open" : "closed"}>
            <Link to="/"><img src={Logo}/></Link>
            <div className="hiddenLinks">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
        <div className="navMenu">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={toggleNavbar}>
                <MenuIcon/>
            </button>
        </div>
    </div>
  )
}
