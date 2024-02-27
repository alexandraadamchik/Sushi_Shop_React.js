import React from 'react'
import "../styles/Footer.css"
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Footer() {
  return (
    <div className="Footer">
        <div className="socials">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon color="primary" fontSize="large"/></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><TwitterIcon color="primary" fontSize="large"/></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon color="primary" fontSize="large"/></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><YouTubeIcon color="primary" fontSize="large"/></a>
        </div>
        <p> &copy; 2023 ourwebsite.com</p>
    </div>
  )
}
