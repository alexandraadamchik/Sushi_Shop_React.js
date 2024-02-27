import { SlideshowTwoTone } from '@mui/icons-material';
import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
export default function SliderButtons() {
    const swiper = useSwiper();
  return (
    <div className="arrow">
        <button  onClick={()=>swiper.slidePrev()}>&lt;</button>
        <button  onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  )
}
