import React, {useState} from 'react'
import {MyContext} from "./Context"

export default function ContextContainer({children}) {
    const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <MyContext.Provider value={{mobileMenu, setMobileMenu}}>
        {children}
    </MyContext.Provider>
  )
}
