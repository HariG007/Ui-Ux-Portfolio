import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <section className="footer" id='contact'>
        <div className="footer__container container">
            <h1 className="footer__title">Hariharan G</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href='https://linkedin.com/in/g0304' target="_blank"  className="footer__social-link">
                    <i className="bx bxl-linkedin"></i>
                </a>

                <a href='https://github.com/HariG007' target="_blank" className="footer__social-link">
                    <i className="bx bxl-github"></i>
                </a>
                

            </div>
                <span className="footer__copy">
                ------------------------
                <br></br>
                hariguru0304@gmail.com
                <br></br>
                ------------------------
                </span>

        </div>
    </section>
  )
}

export default Footer