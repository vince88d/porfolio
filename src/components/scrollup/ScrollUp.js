import React from 'react'
import { BsArrowUpSquare } from 'react-icons/bs'

import './scrollup.css';


const ScrollUp = () => {
  window.addEventListener("scroll", function(){
    const scrollUp = document.querySelector(".scrollup");
    if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  })
  return (
   <a href="#" className="scrollup">
<BsArrowUpSquare className='scrollup__icon'/>
</a>
  )
}

export default ScrollUp