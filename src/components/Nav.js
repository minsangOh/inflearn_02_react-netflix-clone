import React, { useEffect, useState } from 'react'
import"./Nav.css"

export default function Nav() {

  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log('window.screenY', window.screenY)
      if (window.scrollY >50) {
        setShow(true)
      }
      else {
        setShow(false)
      }
    })
    return () => {
      window.removeEventListener("scroll", () => {})
    }
  }, [])


  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <img 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
      alt="Netflix logo"
      className='nav_logo'
      onClick={() => window.location.reload()}
      />
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Marc_Randolph_by_Gage_Skidmore.jpg/1920px-Marc_Randolph_by_Gage_Skidmore.jpg" 
      alt="" 
      className='nav_avator'
      />
    </nav>
  )
}
