import React from 'react'
import {Link} from "react-router-dom"
import "../styles/Home.css"
import banner from "../images/sushi_0.jpg"

export default function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${banner })`}}>
      <div className="container">

        <h1>Nigiri Nirvana</h1>

        <p>Our Sushi Best Sushi</p>
        <Link to="/menu"><button>ORDER</button></Link>
      </div>
    </div>
  )
}
