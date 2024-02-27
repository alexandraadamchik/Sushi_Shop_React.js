import React from "react";
import {sushiMenu} from '../components/menuList'
import MenuItem from '../components/MenuItem'
import '../styles/Menu.css'
import "swiper/css"
import banner from "../images/sushi_02.jpg"
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
import { sliderSettings } from "../components/Common";
import SliderButtons from "../components/SliderButtons";

export default function Menu() {
  return (
    <div className="menu" style={{backgroundImage: `url(${banner })` }}>
        <h1 className='menuTitle'>ROLL-W-US</h1>
        <div className='menulist' >
            <Swiper {...sliderSettings}>
              {sushiMenu.map((sushiItem,key) => (
                <SwiperSlide key={key}>
                  <MenuItem image={sushiItem.image}  name={sushiItem.name} price={sushiItem.price} /> 
                </SwiperSlide>
            ))}
            <SliderButtons/>
           </Swiper>
          
          {/* <h1>sushi</h1> */}


        </div>
    </div>
  )
}
