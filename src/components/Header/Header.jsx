import React, { useState } from 'react'
import './header.css'


    const Header = () => {

    window.addEventListener("scroll" , function(){
        const header = this.document.querySelector(".header");
        if(this.scrollY >= 80 ) header.classList.add("showHeader");
        else header.classList.remove("showHeader");})

    const [Toggle,showMenu]=useState(false)
    const[ activeNav , setActiveNav]= useState("#home")

    return (
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="navLogo">
            Salem
          </a>
          <div className={Toggle ? "navMenu showMenu" : "navMenu"}>
            <ul className="navList ">
              <li className="navItem">
                <a
                  href="#home"
                  onClick={() => setActiveNav("#home")}
                  className={
                    activeNav === "#home" ? "navLink activeLink" : "navLink "
                  }
                >
                  <i className="uil uil-estate navIcon"></i> Home
                </a>
              </li>
              <li className="navItem">
                <a
                  href="#about"
                  onClick={() => setActiveNav("#about")}
                  className={
                    activeNav === "#about" ? "navLink activeLink" : "navLink "
                  }
                >
                  <i className="uil uil-user navIcon"></i> About
                </a>
              </li>
              <li className="navItem">
                <a
                  href="#skills"
                  onClick={() => setActiveNav("#skills")}
                  className={
                    activeNav === "#skills" ? "navLink activeLink" : "navLink "
                  }
                >
                  <i className="uil uil-file-alt navIcon"></i> Skills
                </a>
              </li>
              <li className="navItem">
                <a
                  href="#services"
                  onClick={() => setActiveNav("#services")}
                  className={
                    activeNav === "#services"
                      ? "navLink activeLink"
                      : "navLink "
                  }
                >
                  <i className="uil uil-briefcase-alt navIcon"></i> Services
                </a>
              </li>
              <li className="navItem">
                <a
                  href="#portfolio"
                  onClick={() => setActiveNav("#portfolio")}
                  className={
                    activeNav === "#portfolio"
                      ? "navLink activeLink"
                      : "navLink "
                  }
                >
                  <i className="uil uil-scenery navIcon"></i> portfolio
                </a>
              </li>
              <li className="navItem">
                <a
                  href="#contact"
                  onClick={() => setActiveNav("#contact")}
                  className={
                    activeNav === "#contact" ? "navLink activeLink" : "navLink "
                  }
                >
                  <i className="uil uil-message navIcon"></i> Contact
                </a>
              </li>
            </ul>
            <i
              className="uil uil-times navClose"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>
          <div className="navToggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil  uil-apps "></i>
          </div>
        </nav>
      </header>
    );
}
export default  Header 