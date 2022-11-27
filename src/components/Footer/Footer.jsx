import React from 'react'
import'./footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer container">
        <h1 className="footerTitle">Salem</h1>

        <ul className="footerList">
          <li>
            <a href=" #about" className="footerLink">
              About
            </a>
          </li>

          <li>
            <a href=" #portfolio" className="footerLink">
              Projects
            </a>
          </li>

          <li>
            <a href=" #Services" className="footerLink">
              Services
            </a>
          </li>
        </ul>
        <div className="footerSocial">
          <a
            href="https://www.linkedin.com/in/ahmed-salem-3967b7184/"
            className="footerSocialLink"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/AhmedSalem93"
            className="footerSocialLink"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
          <a
            href="https://www.instagram.com/a7mad_gamal93/"
            className="footerSocialLink"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>
        </div>
        <span className="footerCopy">
          &#169; Crypticalcoder. All rigths reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer