import React from 'react'
import'./scrollUp.css'


 
const ScrollUp = () => {
    window.addEventListener("scroll" , function(){
        const scrollUp = this.document.querySelector(".scrollUp");
        if(this.scrollY >= 560 ) scrollUp.classList.add("showScroll");
        else scrollUp.classList.remove("showScroll");
    })
  return (
    <a href='#' className='scrollUp'>
        <i className='uil uil-arrow-up scrollUpIcon'></i>
    </a>
  )
}

export default ScrollUp