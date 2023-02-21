import React from 'react'
import { IoMdHand, IoMdSend } from 'react-icons/io'
import { BsDownload } from 'react-icons/bs'

import CV from "../../assets/VincenzoSciarretta-Cv.pdf"



function Data() {
  return (
    <div className="home__data">

      <h3 className="home__title"> Ciao mi chiamo Vincenzo
        <IoMdHand className='home__hand' color='rgb(220,191,42)' />
      </h3>


      <h4 className="home__subtitle">Web Developer</h4>
      <p className="home__description">
        Sono uno Junior Web Developer , Vivo a Minturno
        sono da sempre appassionato di Informatica dedicando serietà
        e impegno per questo lavoro.
      </p>
      <div className="home__button">
           <a href="#contact" className="button button--flex">
        Contattami
        <IoMdSend color={'white'} className="button__icon" />

      </a>
      <a download='' href={CV} className="button button--flex">
        Download CV <BsDownload />
      </a>
      </div>
   
    </div>
  )
}

export default Data