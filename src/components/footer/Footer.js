import React from 'react'

import { BsFacebook ,BsInstagram,BsTwitter} from 'react-icons/bs'

import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Vincenzo</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.facebook.com/sciarretta1" className="footer__social-link" target={"_blank"}>
         <BsFacebook/>
            </a>

            <a href="https://www.instagram.com/devil3111" className="footer__social-link" target={"_blank"}>
               <BsInstagram/>
            </a>

            <a href="https://github.com/vince88d" className="footer__social-link" target={"_blank"}>
                <i className="uil uil-github-alt"></i>
            </a>
            </div>
            <span className='footer__copy'>
&#169; All right reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer