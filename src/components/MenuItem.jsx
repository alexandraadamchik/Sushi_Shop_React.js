import React from "react";
export default function MenuItem({image, name, price}) {
  return (
    <div className='menuItem'>
      <h1>{name}</h1>
        <img src={image} alt="" className="sushimg" />
      
      <p>€{price}</p>
    </div>
  )
}
